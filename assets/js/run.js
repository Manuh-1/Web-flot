function COVID () {
	document.getElementById("clsw").innerHTML="⚠ Debido a la pandemia, algunos de nuetros cursos se han visto afectados, esto no significa que no seguiremos ofreciendo nuestro amplio catálogo pero sí significa un cambio en nuestra forma de ofrecerlo, estamos trabajando constantemente para ofrecerte soluciones accesibles y cómodas para realizar todos los estudios que necesites, incluyendo los estudios de desarrollo web. ";
	document.getElementById("contF").innerHTML=" #QUEDATENCASA";
}

function infocovid() {
	document.getElementById("clsw").innerHTML="⚠ La actuál situación ha limitado a casi toda la población, privando a los jovenes de sus estudios y obligandolos a cambíar su forma de vida de una manera drástica, en Flot Access entendemos esta situación y estamos trabajando arduamente en mejorar nuestra infraestructura web para ofrecer un mejor servicio, eficiente, digno y de calidad para cada estudiante que desee adquirir ya sea suscripciones pagadas o asesoría gratuita.";
	document.getElementById("contF").innerHTML=" #QUEDATENCASA";
}

function products() {

	console.log(navigator.cookieEnabled);
	console.log("Recarga de página");
}

function cooc() {

	var cookie = navigator.cookieEnabled;
	 if( navigator.cookieEnabled == true ) {
	 	console.log("Cookies activas");
	 	var cok = navigator.platform;

	 }else {
	 	console.log("Las cookies no estan activas");
	 	console.log("Recargando");
	 	alert("Esta página utiliza las cookies para mejorar la expericia del usuario, si tiene un bloqueador de anuncios desactivelo y acepte el acuerdo.");
	 }
}

function rel() {

	 var line = document.getElementById("cons");
	
}

function navdata() {
	

	var navName = navigator.appName;
	var appC = navigator.appCodeName;
	var naVer = navigator.appVersion;
	var cookieSy = navigator.cookieEnabled;
	var agent = navigator.userAgent;
	var plat = navigator.platform;

	var us = "Manuel";
	var pas = "140201";
	console.log("Obteniendo detalles del cliente - solicitante...");
	console.log("2%");
	console.log("6%");
	console.log("18%");
	console.log("32%");
	console.log("50%");
	console.log("90%");
	console.log("100%");

	//document.getElementById("cons").innerHTML(navName + "\n " + appC + "\n" + naver + "\n" + cookieSy + "\n" + agent + "\n" + plat  )
	var cld = console.log("Nombre del navegador: " + navName + "\n" + "Nombre del compilador: " + appC + "\n" + "Navegador: " + naVer + "\n" + "Cookies: " + cookieSy + "\n" + "Agente de navegador: " + agent + "\n" + "Plataforma: " + plat  );

	if (navigator.cookieEnabled == true) {
		console.log("\n Correcto, cargando complementos.");
	}else {
		console.log("\nNo se ha podido cargar el complemento.");
	}

}

//=======================================================================================================
var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789";
var contraseña =""; 

function retra() {
	var color = document.getElementById("fpt").innerHTML;
                document.getElementById("fpt").style.backgroundColor = "#150f95";
}

function gentoken(){
	console.log("Solicitud de creacion de token digital, constate 1");
	console.log("Solicitando datos para la generar token a usuario");
	var usuariogen = prompt("Ingresa el nombre del solicitante...");
	console.log("Dato solicitado correctamente.");
	console.log("Cargando complementos adicionales y ejecutando script de creacion.");

	document.getElementById("fpt").style.backgroundColor="#fff";
	for (i=0; i<20; i++) contraseña +=caracteres.charAt(Math.floor(Math.random()*caracteres.length));

		document.getElementById("fpt").innerHTML=contraseña;

		document.getElementById("avertoken").innerHTML="Pase el cursor sobre la linea color blanco para revelar el token, copie su token, cuando lo haya copiado presione INGRESAR.";
	
	console.log("Token generado correctamente por usuario: " + usuariogen);
	console.log("El token generado contiene una validez de un solo uso.");
	console.log("Datos generados correctamente");

}

function create() {
	location.reload();
	console.log("Solicitando acceso al servidor.");
	console.log("solicitando recursos.");
	console.log("Solicitando información de usuario.");

	var datauser = prompt("Ingrese su usuario");
	var datauserpass = prompt("Ingresa el token digital");
	var userdata ="Manuel";
	location.reload();


	if(datauser == userdata){
		console.log("Usuario confirmado");
		console.log("Conectando con base de datos.")
		if(datauserpass == contraseña) {
			alert("Ingresado");
			console.log("Token confirmado con solicitante.")
		}
		else
		{
			return;
			console.log("Error de token.")
		}
	}else {
		alert("Datos erroneos");
		return;
		console.log("Datos erroneos.")
	}
}  

function darkmode (){

	 document.getElementById("condark").style.backgroundColor="black";
}






