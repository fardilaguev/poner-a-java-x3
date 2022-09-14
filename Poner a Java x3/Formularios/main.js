'use strict';

const nombres = document.querySelector('#inputNames');
const edad = document.querySelector('#inputAge');
const correo = document.querySelector('#inputEmail');
const ciudad = document.querySelector('#inputCity');
const politicaData = document.querySelector('#checkPolitica');
const formulario = document.querySelector('#form');

//Validación de Formulario

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (validFieldsFomr () === -1){
        alert("Goog enviando formulario");
    }else{
        alert("Error en formulario");
    }
});

const validFieldsFomr = () => {
    const values = Object.values(validFields);
    let response = values.findIndex(e => e === false);
    return response;
}

//Objeto de validacion 

let validFields = {
     nom: false,
     edad: false,
     mail: true,
     ciud: true,
     politica: false
}

nombres.addEventListener('change', (event) => {
    const inputNombre = event.target.value;
    const patronNombres = /^([a-zA-ZÁ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    //Ternario
    validFields.nom = inputNombre.match(patronNombres) ? true : false;
    console.log(Object.values(validFields));

});

edad.addEventListener('change', function(e) {
    const patronEdad = /(^[0-9]{1,2}$)/g;
    if (parseInt(edad.value) >= 18){
        if(edad.value.match(patronEdad)){
            validFields.edad = true;

        }else{
            alert("Error en edad")
        }
    }else{
        alert("Error en edad");
    }
    console.log(Object.values(validFields));
})

correo.addEventListener('change', (event) => {
    const inputEmail = event.target.value;
    const patronEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/g;
    validFields.mail = inputEmail.match(patronEmail) ? true : false ;
    console.log(Object.values(validFields));
})

ciudad.addEventListener('change', (event) => {
    const inputCity = event.target.value;
    const patronCity = /^([Bogotá, Medellín, Cúcuta]{0,200}$)/g;
    validFields.ciud = inputCity.match(patronCity) ? true : false ;
    console.log(Object.values(validFields));
})

politicaData.addEventListener('change', (e) => {
    validFields.politica = politicaData.checked === true ? true : false;
    console.log(Object.values(validFields));
})