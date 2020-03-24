class cor{
	constructor(cor){
		this.cor = cor
	}
}
const distinct = (value,index,self) =>{return self.indexOf(value) === index;}
function separarIguais(cidades,colors,itenVerificado){
	var arrayls = Array(colors.length)
	var i = 0
	while(i < arrayls.length){
		arrayls[i] = itenVerificado
		i++	
	}
	return arrayls
}
function separarNaoInteiro(cidades,colors, itenVerificado){
	var inteiroVerificado = parseInt(itenVerificado)
	var excedente = (((itenVerificado * 10) - (inteiroVerificado * 10)) / 10 ) * colors.length
	var arrayls = Array(colors.length)
	var i = 0
	while(i < arrayls.length){
		arrayls[i] = inteiroVerificado
		i++	
	}
	var contador = 0
	var arraylsLenght = (arrayls.length - 1)
	while(contador < excedente){
		arrayls[arraylsLenght] += 1
		contador ++
		arraylsLenght --
	}
	return arrayls
}
function grapDois(cidades, colors){
	var cidades = cidades.filter(distinct)
	console.log(cidades)
	var verificacao = cidades.length / colors.length
	if(Number.isInteger(verificacao)){
		var quantidadeListas = separarIguais(cidades,colors, verificacao)
	} else {
		var quantidadeListas = separarNaoInteiro(cidades,colors, verificacao)
	}
	console.log(quantidadeListas)
	var cidadePosicao = 0;
	var contador = 0;
	var inicial_final =[];
	var qntIten;
	var intenLista;
	var colorPosition;
	for(iten in quantidadeListas){
		intenLista = quantidadeListas[iten]
		colorPosition = colors[iten]
		if(intenLista == 1){
			colorPosition.inicial = cidades[cidadePosicao]
			colorPosition.final = cidades[cidadePosicao]
			cidadePosicao ++
		} else {
			console.log(intenLista)
			while(contador < intenLista){
				if(contador <= 0){
					colorPosition.inicial = cidades[cidadePosicao]
				} else if(contador == (intenLista - 1)){
					colorPosition.final = cidades[cidadePosicao]
				}
				contador ++
				cidadePosicao ++
			}
			contador = 0
		}
		inicial_final.push(colorPosition)
	}
	return inicial_final
}
/*
// select colors
var colors = [new cor([255,186,186,0.7]),new cor([255,123,123,0.7]),new cor([255,82,82,0.7]),new cor([255,0,0,0.7]),new cor([167,0,0,0.7])]
//  sent values and colors
cor_city =grapDois(values, colors)

getStyle = function (feature, resolucao, colors) {
	// pegar o atributo da feature
	//take the atribute target from feature

	var pk = feature.get('target')
	for (color in colors){
		color = colors[color]

		// se tiver entre o valor final e o valor inicial
		// if the target is betwen initial value and final value then fill equal the color
		// manda a cor dele
		// send the color to feature

		if (pk >= color.inicial && pk <= color.final) {
            fill = new ol.style.Fill({
            	color: color.cor // semi-transparent red
            })
    	}
	}

// how the style function need be
style:  function (feature, resolucao,) {
        			return getStyle(feature, resolucao,cor_city)
    			}
*/