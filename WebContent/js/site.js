function validaSejaUmDeNos(){

	var nome = document.fmrsejaumdenos.txtnome.value;
	var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
	if(!expRegNome.test(nome)){
		alert("Preencha corretamente o campo Nome.");
		document.fmrsejaumdenos.txtnome.focus();
		return false;
	}
	var fone = document.fmrsejaumdenos.txtfone.value;
	var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");

	if (!expRegFone.test(fone)){
		alert("Preencha corretamente o campo Fone!");
		document.fmrsejaumdenos.txtfone.focus();
		return false;
	}
	if(document.fmrsejaumdenos.txtemail.value==""){
		alert("Preencha o campo E-mail");
		document.fmrsejaumdenos.txtemail.focus();
		return false;
	}
	return true;
}
//Menu lateral que esconde e mostra quando clica no botão
$(document).ready(function(){
	$("header").load("/FaClube/pages/site/general/cabecalho.html");
	$("nav").load("/FaClube/pages/site/general/menu.html");
	$("footer").load("/FaClube/pages/site/general/rodape.html");
});

var botaoMenu = document.getElementById("botao-menu");
var menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function() {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

function topFunction() {
	window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  

