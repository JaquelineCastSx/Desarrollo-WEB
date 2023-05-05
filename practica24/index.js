const { createApp } = Vue;

createApp({
    data(){
        return{
          articulos: [
            {
              codigo: 1, 
              descripcion: 'bolillos',
              precio: 1.50,
            },
            {
              codigo: 2,
              descripcion: 'cajas',
              precio: 5.50,
            }
          ]
        }
    },
    methods:{
      agregarArticulo(){
        this.articulos.push({
          codigo: this.codigo,
          descripcion: this.descripcion,
          precio: this.precio
        });
        this.codigo = 0,
        this.descripcion = '',
        this.precio = 0;
      }
    }
}).mount('#miApp');