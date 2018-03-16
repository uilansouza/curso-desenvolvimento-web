$(document).ready(function(){

$('#btn_iniciar_jogo').click(function(){

	//Valida a digitação dos apelidos dos jogadores

	if(($('#entrada_apelido_jogador_1').val()=='')){
		alert('Apelido do jogador 1 não foi preenchido');
		return false;
	}

	if(($('#entrada_apelido_jogador_2').val()=='')){
		alert('Apelido do jogador  2 não foi preenchido');
		return false;
	}
	///Exibir os apelidos
	$('#nome_jogador_1').html($('#entrada_apelido_jogador_1').val());
	$('#nome_jogador_2').html($('#entrada_apelido_jogador_2').val());
	
	//controla a exibição das divs 
	$('#pagina_inicial').hide()
	$('#palco_jogo').show()
	});

	$('.jogada').click(function(){

		var id_campo_clicado = this.id
		alert(id_campo_clicado);
	})

});