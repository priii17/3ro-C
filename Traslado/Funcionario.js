
const elemento = document.getElementById('Trasladar');

const selectormuestra = document.getElementById('fold-muestra');

const selectorequipamiento = document.getElementById('fold-equipamiento');

const selectorinsumo = document.getElementById('fold-insumos');




//* espera a que se eliga una opcion distinta,luego ejecuta*//
elemento.addEventListener( 'change', ( ) => {

let opcion = elemento.value;

selectormuestra.style.display = 'none';

selectorequipamiento.style.display = 'none'; 

selectorinsumo.style.display = 'none';

switch(opcion){

case "muestra":
    selectormuestra.style.display = 'block';
    break;

 case "equipamiento":
    selectorequipamiento.style.display = 'block';
    break;
case "insumos":
    selectorinsumo.style.display = 'block';
    break;
default:
    break;
}

});


//* se ejecuta cada que se cambia el valor de tipo *//

const tipo = document.getElementById('tipo')

const nombremuestra = document.getElementById('nombremuestra')

const muestrarefrigeracion = document.getElementById('refrigeracion')


//* si elige la opcion organo se muestra el campo*//

const shownombremuestra =function(e) {
 nombremuestra.style.display=e.target.value === 'nombremuestra' ? 'block' : 'none';
};

tipo.addEventListener('change' ,  shownombremuestra)


const showomuestrarefrigeracion =function(e){
 muestrarefrigeracion.style.display=e.target.value === 'muestrarefrigeracion' ? 'block' : 'none';
};

tipo.addEventListener('change', showmuestrarefrigeracion)



const tipo2 = document.getElementById('tipo2')



const n_serie = document.getElementById('n_serie')

const descripcion = document.getElementById('descripcionequipamiento')




const shown_serie = function (e) {

 n_serie.style.display=e.target.value === 'n_serie' ? 'block' : 'none';


};

tipo2.addEventListener('change', shown_serie);




const showdescripcionequipamiento = function (e) {

 descripcionequipamiento.style.display=e.target.value === 'descripcionequipamiento' ? 'block' : 'none';


};

tipo2.addEventListener('change', showdescripcionequipamiento);






const tipo3 = document.getElementById('tipo3')



const nombre = document.getElementById('nombreinsumo')

const descripcioninsumo = document.getElementById('descripcioninsumo')






const shownombreinsumo = function (e) {

 nombreinsumo.style.display=e.target.value === 'nombreinsumo' ? 'block' : 'none';


};

tipo3.addEventListener('change', shownombreinsumo);


const shoowdescripcioninsumo = function (e){

descripcioninsumo.style.display=e.target.value === 'descripcioninsumo' ? 'block' : 'none';



};
 
tipo3.addEventListener('change', shoowdescripcioninsumo);