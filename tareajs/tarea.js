var input = document.getElementsByClassName('formularioinput');
for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('keyup', function () {
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar')
        }
    });
}

(function(){
	// Variables
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");
		

	// Funciones
	var agregarTarea = function(){
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}

		// Agregamos el contenido al enlace
		enlace.appendChild(contenido);
		// Le establecemos un atributo href
		enlace.setAttribute("href", "#");
		// Agrergamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";

		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}

	};
	var comprobarInput = function(){
		tareaInput.className = "";
		teareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};

	var eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};

	// Eventos

	// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);

	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);

	// Borrando Elementos de la lista
	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eleminarTarea);
	}
}());






/*  
var nombre =document.getElementById('nombre'),
    var password = document.getElementById('password');
    var error = document.getElementById('error');
    error.style.color='red';

function enviarFormulario(){
        console.log('enviando formulario...');
        var mensajesError=[];
if(nombre.value===null || nombre.value===''){
    mensajesError.push('ingresa nombre');
}
if(apellido.value===null || apellido.value ===''){
    mensajesError.push('ingresa apellido');
}
if(correo.value===null || correo.value ===''){
    mensajesError.push('ingresa correo');
}
if(password.value===null || password.value ===''){
    mensajesError.push('ingresa password');
}
error.innerHTML= mensajesError.join(', ');
        return false;
};






var eliminarultimos=document.getElementById('lista').children[0];
for(let i=0;i<10;i++){
	let li = document.createElement('li');
	li.innerText=i+1;
	eliminarultimos.appendChild(li);
}

function eliminarultimos(){
	if(retornarUltimos().length>0)
	retornarUltimos()[retornarUltimos().length-1].remove();
}

function retornarUltimos(){
	return document.getElementById('lista').children[0].children.remove()}


*/