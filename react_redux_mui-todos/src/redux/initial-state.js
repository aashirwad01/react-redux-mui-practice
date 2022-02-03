export const initialState=JSON.parse(window.localStorage.getItem("Todos"))
||{
    todos:[
        {
        id:0,
        title:"Buy Milk",
        completed:false,
        important:false,
    },
    {
        id:1,
        title:"Clean my room",
        completed:true,
        important:false,
    },
    {
        id:2,
        title:"Get Medicines",
        completed:false,
        important:true,
    },
    {
        id:3,
        title:"Car Service",
        completed:false,
        important:true,
    },
    {
        id:4,
        title:"Prepare for meeting",
        completed:true,
        important:false,
    },

],
}