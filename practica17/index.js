const app = Vue.createApp({
    data(){
        return{
            articulos: [
                {
                    codigo: 001,
                    descripcion: 'papas fritas',
                    precio: 18.00
                },
                {
                    codigo: 002,
                    descripcion: 'pan dulce',
                    precio: 5.00
                },
                {
                    codigo: 003,
                    descripcion: 'jugo',
                    precio: 15.00
                }
            ],
            total: 0
        }
    }
});

app.mount('#miApp');