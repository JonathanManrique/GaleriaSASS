window.onload=elClick;
var imagen3 ="<img src='./imagenes/imagen1.jpg' height='380vw' width:'360vw'/>";
var imagen1;
imagen1="<img src='";				
var tamaño="' height='380vw' width:'360vw'/>";
var imagen2;
imagen2="<img src='";




 function elClick(){
 	var imagen1=document.getElementById("iman1")
 	imagen1.addEventListener("click",function() {
	clicEn("./imagenes/imagen1.jpg");
	});

	imagen1.addEventListener("mouseover",function(){
								mostrar("./imagenes/imagen1.jpg")
									});
	
	imagen1.addEventListener("mouseout",fin);

 	var imagen2=document.getElementById("iman2"); 
 	imagen2.addEventListener("click",function() {
	clicEn("./imagenes/imagen2.jpg");
	});

	imagen2.addEventListener("mouseover",function(){
								mostrar("./imagenes/imagen2.jpg")
									});

	imagen2.addEventListener("mouseout",fin);

 	var imagen3=document.getElementById("iman3"); 
 	imagen3.addEventListener("click",function() {
	clicEn("./imagenes/imagen3.jpg");
	});

	imagen3.addEventListener("mouseover",function(){
								mostrar("./imagenes/imagen3.jpg")
									});

	imagen3.addEventListener("mouseout",fin);

 	var imagen4=document.getElementById("iman4"); 
 	imagen4.addEventListener("click",function() {
	clicEn("./imagenes/imagen4.jpg");
	});


	imagen4.addEventListener("mouseover",function(){
								mostrar("./imagenes/imagen4.jpg")
									});

	imagen4.addEventListener("mouseout",fin);

 	var imagen5=document.getElementById("iman5"); 
 	imagen5.addEventListener("click",function() {
	clicEn("./imagenes/imagen5.jpg");
	});


	imagen5.addEventListener("mouseover",function(){
								mostrar("./imagenes/imagen5.jpg")
									});
	imagen5.addEventListener("mouseout",fin);

 	var imagen6=document.getElementById("iman6"); 
 	imagen6.addEventListener("click",function() {
	clicEn("./imagenes/imagen6.jpg");
	});

	imagen6.addEventListener("mouseover",function(){
								mostrar("./imagenes/imagen6.jpg")
									});

	imagen6.addEventListener("mouseout",fin);

 	var imagen7=document.getElementById("iman7"); 
 	imagen7.addEventListener("click",function() {
	clicEn("./imagenes/imagen7.jpg");
	});

	imagen7.addEventListener("mouseover",function(){
								mostrar("./imagenes/imagen7.jpg")
									});

	imagen7.addEventListener("mouseout",fin);

 	var imagen8=document.getElementById("iman8"); 
 	imagen8.addEventListener("click",function() {
	clicEn("./imagenes/imagen8.jpg");
	});

	imagen8.addEventListener("mouseover",function(){
								mostrar("./imagenes/imagen8.jpg")
									});
	imagen8.addEventListener("mouseout",fin);

 	var imagen9=document.getElementById("iman9"); 
 	imagen9.addEventListener("click",function() {
	clicEn("./imagenes/imagen9.jpg");
	});

	imagen9.addEventListener("mouseover",function(){
								mostrar("./imagenes/imagen9.jpg")
									});
	imagen9.addEventListener("mouseout",fin);

	 }


 function clicEn(imagen){
 	
 	imagen1 +=imagen;

 	imagen1 +=tamaño;

 	var k=document.getElementById('principal').innerHTML = imagen1;
 	imagen3=imagen1;
 	imagen1="<img src='";

 }

 function mostrar(imag){

 	imagen2 +=imag;

 	imagen2 +=tamaño;

 	var  b=document.getElementById('principal').innerHTML = imagen2;
 	imagen2="<img src='";

 }

function fin(){
	var p=document.getElementById('principal').innerHTML = imagen3;
}

 