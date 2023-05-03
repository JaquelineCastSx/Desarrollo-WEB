const { createApp } = Vue;

const canciones = [
  {
    autor:'Raquel Sofía',
    cancion:'Odio que no te odio'
  },
  {
    autor:'Arturo Venegas',
    cancion:'Date cuenta'
  },
  {
    autor:'Jorge Villamizar',
    cancion:'Caraluna'
  },
];

createApp({
    data(){
        return{
          canciones: canciones,
        }
    }
}).mount('#miApp');