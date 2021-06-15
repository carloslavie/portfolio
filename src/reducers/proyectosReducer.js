import { createSlice } from '@reduxjs/toolkit';

export const proyectosReducer = createSlice ({
    name: 'proyectos',
        initialState:{
            proyectos: [
                {id:'1', name:'veterinario', url:"https://reverent-lumiere-fe3899.netlify.app/", img:'/images/slider/vet.png'},
                {id:'2', name:'presupuesto', url:"https://fervent-davinci-78d215.netlify.app/", img:'/images/slider/pres.png'},
                {id:'3', name:'seguros', url:"https://ecstatic-goldstine-516f3f.netlify.app/", img:'/images/slider/segu.png'},
                {id:'4', name:'bbad', url:"https://confident-hawking-74783b.netlify.app/", img:'/images/slider/break.png'},
                {id:'5', name:'clima', url:"https://hardcore-brahmagupta-99a2b8.netlify.app/", img:'/images/slider/clima.png'},
                {id:'6', name:'cripto', url:"https://admiring-lewin-adc7eb.netlify.app/", img:'/images/slider/cripto.png'},
                {id:'7', name:'noticias', url:"https://angry-knuth-6bc83f.netlify.app/", img:'/images/slider/news.png'},
                {id:'8', name:'fotos', url:"https://xenodochial-jackson-567d13.netlify.app/", img:'/images/slider/fotos.png'},
                {id:'9', name:'sunddb', url:"https://dazzling-poitras-34d2ae.netlify.app/", img:'/images/slider/sound.png'},
                {id:'10', name:'cocktails', url:"https://trusting-brahmagupta-11bdff.netlify.app/", img:'/images/slider/drinks.png'},
                {id:'11', name:'tareas', url:"https://wonderful-allen-522a72.netlify.app/", img:'/images/slider/tasks.png'},
                {id:'12', name:'phunt', url:"https://trusting-bohr-800337.netlify.app/", img:'/images/slider/phunt.png'},
                {id:'13', name:'hotel', url:"https://nervous-sinoussi-3389d5.netlify.app/", img:'/images/slider/gats.png'},
                {id:'14', name:'challengeuno', url:"https://eager-goodall-697f02.netlify.app/", img:'/images/slider/chall1.png'},
                {id:'15', name:'bienesraices', url:"https://naughty-murdock-2695ca.netlify.app/", img:'/images/slider/braices.png'},
                {id:'16', name:'challengedos', url:"https://zen-feynman-be75bd.netlify.app/", img:'/images/slider/chall2.png'},
            ]
        ,
            proyecto: null,
            loading:null,
            error:null  
        },

        reducers:{
            proyecto: (state, action) =>{
                state.proyecto = action.payload
            },
            
        }
})

export const { proyectoActual } = proyectosReducer.actions;

export const obtenerProyectoActual = proyecto => dispatch => {
    
    dispatch(proyectoActual(proyecto))
}


export default proyectosReducer.reducer;

