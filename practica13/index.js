console.log(Vue);
const app = Vue.createApp(
    {data(){
        return{
            nombre: 'Mario'
        }
    },
    methods: {
        cambiarNombre(){
            this.nombre = 'Luigi';
        },
        cambiarMayus(){
            this.nombre = this.nombre.toUpperCase();
        }
    }
});
app.mount('#miApp');