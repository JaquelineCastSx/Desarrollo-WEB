const { createApp } = Vue;
const frases = [
  {
    id: 1,
    texto: "Camarón que se duerme se lo lleva la corriente",
  },
  {
    id: 2,
    texto: "Pablito clavo un clavito",
  },
  {
    id: 3,
    texto: "M de motomami",
  },
];

createApp({
    data(){
        return{
          frases: frases,
          nueva : 'Ingresa una nueva frase'
        }
    },
    methods : {
        agregarFrase(event){
            console.log(event);
            if(event.charCode == 13){
                console.log('Enter');
                this.frases.unshift({
                    texto: this.nueva
                });
                this.nueva = '';
            }
        }
    }
}).mount('#miApp');