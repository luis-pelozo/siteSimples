/*function teste(){
	document.getElementById("modal").style.display = "none";
}*/



/* 8888888888888888888888888888888888888888888888888*/

// Oculta a modal quando a página é carregada
document.addEventListener("DOMContentLoaded", function(event) {
	var modal = document.getElementById("modal");
	modal.classList.add("hidden");
  });
  
/* 8888888888888888888888888888888888888888888888888*/


var telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('input', function(e) {
  var telefone = e.target.value;
  telefone = telefone.replace(/\D/g, ''); // remove todos os caracteres que não são dígitos
  telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2'); // adiciona o parêntese após o DDD
  telefone = telefone.replace(/(\d{5})(\d)/, '$1-$2'); // adiciona o traço após os primeiros 5 dígitos
  e.target.value = telefone;
});

function validaFormulario() {
/////////////VALIDA O NOME
	var nome = document.frmContato.nome.value;
	var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
	if(!expRegNome.test(nome)){
		alert("Preencha corretamente o campo Nome.");
		document.frmContato.nome.focus();
		return false;
	}
/////////////VALIDA O TELEFONE
	var telefoneInput = document.getElementById('telefone');
	var telefone = telefoneInput.value.replace(/\D/g, '');
	if (telefone.length < 10 || telefone.length > 11) {
		alert("Preencha corretamente o campo Telefone.");
		telefoneInput.focus();
		return false;
	}
/////////////COMPLETA COM () E  -
	telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2');
	telefone = telefone.replace(/(\d{4,5})(\d)/, '$1-$2');
	telefoneInput.value = telefone;
/////////////VALIDA O E-MAIL
	var email = document.frmContato.email.value;
	var expRegEmail = new RegExp("^\\S+@\\S+\\.\\S+$");
	if(!expRegEmail.test(email)){
		alert("Preencha corretamente o campo E-mail.");
		document.frmContato.email.focus();
		return false;
	}
/////////////VALIDA CAMPO CIDADE
	var cidade = document.frmContato.cidade.value;
	if (cidade === "") {
		alert("Preencha corretamente o campo Cidade.");
		document.frmContato.cidade.focus();
		return false;
	}
/////////////VALIDA CAMPO ESTADO
	var estado = document.frmContato.estado.value;
	if (estado === "") {
		alert("Preencha corretamente o campo Estado.");
		document.frmContato.estado.focus();
		return false;
	}

	alert("Informações enviadas!");
	location.reload();
	return true;
}
/*             MODAL              */
function abrirModal() {
	document.getElementById("modal").style.display = "block";
}

function fecharModal() {
	document.getElementById("modal").style.display = "none";
}

// Fechar a modal se o usuário clicar fora dela
window.onclick = function(event) {
	if (event.target == document.getElementById("modal")) {
		fecharModal();
	}
}
/*******************************************************************/

/*     VOLTAR PARA O TOPO */
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
/*******************************************************************/
/*Botão vai pra Informações */
const btnInformacoes = document.getElementById('btnInformacoes');
const boxe = document.getElementById('boxe');

btnInformacoes.addEventListener('click', () => {
	boxe.scrollIntoView({ behavior: 'smooth' });
});
/*********************************************************************8888 */
/*Botão vai pro Formulario */
const btnInformbtnSolicitaValoresacoes = document.getElementById('btnSolicitaValores');
const btnModal = document.getElementById('btnModal');

btnSolicitaValores.addEventListener('click', () => {
	btnModal.scrollIntoView({ behavior: 'smooth' });
});
/*********************************************************************8888 */
/*Botão vai pro Mapa */
const btnMapa = document.getElementById('btnMapa');
const maps = document.getElementById('maps');

btnMapa.addEventListener('click', () => {
	maps.scrollIntoView({ behavior: 'smooth' });
});
/*********************************************************************8888 */
  

