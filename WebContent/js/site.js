function teste(){
	document.getElementById("modal").style.display = "none";
}


function validaFormulario(){

	var nome = document.frmContato.nome.value;
	var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
	if(!expRegNome.test(nome)){
		alert("Preencha corretamente o campo Nome.");
		document.frmContato.nome.focus();
		return false;
	}
	var fone = document.frmContato.telefone.value;
	var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");

	if (!expRegFone.test(fone)){
		alert("Preencha corretamente o campo Fone!");
		document.frmContato.telefone.focus();
		return false;
	}
	if(document.frmContato.email.value==""){
		alert("Preencha o campo E-mail");
		document.frmContato.email.focus();
		return false;
	}

	if(document.frmContato.cidade.value==""){
		alert("Preencha o campo Cidade");
		document.frmContato.cidade.focus();
		return false;
	}

	if(document.frmContato.estado.value==""){
		alert("Preencha o campo Estado");
		document.frmContato.estado.focus();
		return false;
	}
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

/*Botão vai pro Motor */
const btnMotor = document.getElementById('btnMotor');
const textoMotor = document.getElementById('textoMotor');

btnMotor.addEventListener('click', () => {
	textoMotor.scrollIntoView({ behavior: 'smooth' });
});
/*********************************************************************8888 */

/*Botão vai pro Formulario */
const btnInformbtnSolicitaValoresacoes = document.getElementById('btnSolicitaValores');
const btnModal = document.getElementById('btnModal');

btnSolicitaValores.addEventListener('click', () => {
	btnModal.scrollIntoView({ behavior: 'smooth' });
});
/*********************************************************************8888 */



  

