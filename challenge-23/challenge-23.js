(function(win, doc){
	'use strict';
/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

var $display = doc.querySelector('[data-js="display"]');

var $buttonNumbers = doc.querySelectorAll('[data-js="buttonNumbers"]');
		Array.prototype.forEach.call($buttonNumbers, function(button){
			button.addEventListener('click', displayNumbers, false);
	});

var $buttonCE = doc.querySelector('[data-js="buttonCE"]');
	$buttonCE.addEventListener('click', reset, false);
		
var $buttonOperations = doc.querySelectorAll('[data-js="buttonOperations"]');
		Array.prototype.forEach.call($buttonOperations, function(button){
			button.addEventListener('click', displayOperations, false);
	});

var $buttonEqual = doc.querySelector('[data-js="buttonEqual"]');
	$buttonEqual.addEventListener('click', clickIgual, false);

var valor1 = null;
var valor2 = null;
var operation = null;
var opeIgual = null;

function displayNumbers(){
	if($display.value == '0' || $display.value == ''){
		$display.value = '';
		$display.value += validationDisplay(this.value);
	}
	else{
		$display.value += this.value;
	}
}

function displayOperations(){

	if(!operation){
	valor1 = $display.value;
	operation = this.value;
	$display.value = '';
	}
}

function clickIgual(){
	if(!opeIgual){
		opeIgual = this.value;
		aritimetica()
		}
	}

function aritimetica(){
	if(!valor2){
		valor2 = $display.value;
	}
		$display.value = validateOperation(operation, valor1, valor2);
		valor2 = 0
		operation = null;
		opeIgual = null;
}

function validationDisplay(valorBotao){
	var validation;
	if(valorBotao == '0'){
		return validation = '0.';
	}
	return validation = valorBotao;
}

function validateOperation(valorBotao, valor1, valor2){
	var validation;
	switch(valorBotao){
			case '+':
				return Number(valor1) + Number(valor2);
				break;

			case '-':
				return Number(valor1) - Number(valor2);
				break;
			
			case 'x':
				return Number(valor1) * Number(valor2);
				break;
			
			case '/':
				return Number(valor1) / Number(valor2);
				break;
			}
}

function reset(){
	$display.value = '0';
	valor2 = 0
	operation = null;
	opeIgual = null;
}

})(window, document);