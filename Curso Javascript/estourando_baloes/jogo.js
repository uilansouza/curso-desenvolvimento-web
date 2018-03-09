var timerId = 5; //variavel que armazena a chamada da função timeout

function iniciaJogo(){

	var url = window.location.search;
	var nivel_jogo = url.replace("?","");
	var tempo_segundos = 0;
	
	if(nivel_jogo == 1){ // 1 Facil -> 120 segundos
		tempo_segundos=120;


	}
	
	if(nivel_jogo == 2){ // 1 Facil -> 60 segundos

		tempo_segundos=60;
	}

	if(nivel_jogo == 3){ // 1 Facil -> 30 segundos

		tempo_segundos=30;
	}
	
	//inserindo segundos no span

	document.getElementById('cronometro').innerHTML= tempo_segundos;//conteudo dentro d tag

	var qtd_baloes =20;
	cria_baloes(qtd_baloes);
	//imprimir baloes inteiros

	document.getElementById('baloes_inteiros').innerHTML=qtd_baloes;
	document.getElementById('baloes_estourados').innerHTML=0;

	contagem_tempo(tempo_segundos);
}

function contagem_tempo(segundos){

	segundos = segundos - 1;
	if(segundos ==-1){
		clearTimeout(timeId); //Para a execuação da função settimeout
		game_over();
		return false
	}

	document.getElementById('cronometro').innerHTML = segundos;

	timeId = setTimeout("contagem_tempo("+segundos+")",1000);

}

function game_over(){
	alert('Fim de Jogo, voce nao conseguiu estourar todos os balões a tempo');}


function cria_baloes(qtd_baloes){
	for(var i = 1; i<=qtd_baloes; i++){

		var balao = document.createElement("img");
		balao.src="imagens/balao_azul_pequeno.png";
		balao.style.margin= '10px';
		balao.id='b'+i;
		document.getElementById('cenario').appendChild(balao);
		balao.onclick = function(){estourar(this);};

	}

}

function estourar(e){
	var id_balao = e.id;
	document.getElementById(id_balao).setAttribute("onclick","")
	document.getElementById(id_balao).src='imagens/balao_azul_pequeno_estourado.png';

	pontuacao(-1);
	
}


function pontuacao(acao){
	var baloes_inteiros = document.getElementById('baloes_inteiros').innerHTML;
	var baloes_estourados= document.getElementById('baloes_estourados').innerHTML
	
	baloes_inteiros = parseInt(baloes_inteiros);
	baloes_estourados = parseInt(baloes_estourados);

	baloes_inteiros = baloes_inteiros+acao;
	baloes_estourados =baloes_estourados - acao;

	document.getElementById('baloes_inteiros').innerHTML= baloes_inteiros;
	document.getElementById('baloes_estourados').innerHTML= baloes_estourados;

	situacao_jogo(baloes_inteiros, );



}

function situacao_jogo(baloes_inteiros){

	if(baloes_inteiros==0){

		alert('Parabens! você conseguiu estourar todos os balões a tempo!')

		parar_jogo();
	}
}

function parar_jogo(){

	clearTimeout(timeId);// para o tempo

}

function remover_eventos_baloes(){

	var i=1;
	while(document.getElementById('b'+i)){
		//retira o evento onclick do elemento
		document.getElementById('b'+i).onclick='';
		i++
	}
}
