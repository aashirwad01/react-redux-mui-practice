export const initialState=JSON.parse(window.localStorage.getItem("Todos"))
||{
    todos:[
        {
        id:0,
        title:"This is Some Lines",
        completed:false,
        important:false,
    },
    {
        id:1,
        title:"Exercise",
        completed:true,
        important:false,
    },
    {
        id:2,
        title:"Some Lines",
        completed:false,
        important:true,
    },
    {
        id:3,
        title:"Delete all and add your list",
        completed:false,
        important:true,
    },
    {
        id:4,
        title:"Car wash",
        completed:true,
        important:false,
    },

],
}