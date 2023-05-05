const { createApp } = Vue;
const frases = [
  {
    id: 1,
    texto: "El respeto al derecho ajeno es la paz",
    autor: "Benito Juárez",
  },
  {
    id: 2,
    texto: "La medida del amor es amar sin medida",
    autor: "San Agustín",
  },
  {
    id: 3,
    texto: "El dinero no puede comprar la felicidad",
  },
];
createApp({
  data() {
    return {
      frases: frases,
      nueva: "Ingresa una nueva frase",
    };
  },
  methods: {
    agregarFrase(event) {
      console.log(event);
      if (event.charCode == 13) {
        this.frases.push({
          texto: this.nueva,
        });
        this.nueva = "";
      }
    },
  },
}).mount("#miApp");
