import axios from "axios";

export const showTodolist = async (project_id) => {
    try{
        axios.get(`http://localhost:5000/auth/lists/show/${project_id}`).then((response)=>{
            console.log(response);
        })
   }catch(err){
       console.log(err);
   }
}

export const addTodolist = async (start_date,description,status,due_date) => {
    try{
        axios.post(`http://localhost:5000/auth/lists/add`,{
            start_date:start_date,
            description:description,
            status:status,
            due_date:due_date
        }).then((response)=>{
            console.log(response);
        })
    }catch(err){
        console.log(err);
    }
}

export const updateDescription = async (description,id) => {
    try{
        axios.post(`http://localhost:5000/auth/lists/updatedescription`,{
            description:description,
            id:id
        }).then((response) => {
            console.log(response);
        })
    }catch(err){
        console.log(err);
    }
}

export const updateStatus = async (status,id) => {
    try{
        axios.post(`http://localhost:5000/auth/lists/updatestatus`,{
            status:status,
            id:id
        }).then((response) => {
            console.log(response);
        })
    }catch(err){
        console.log(err);
    }
}

export const updateDueDate = async (due_date,id) => {
    try{
        axios.post(`http://localhost:5000/auth/lists/updateduedate`,{
            due_date:due_date,
            id:id
        }).then((response) => {
            console.log(response);
        })
    }catch(err){
        console.log(err);
    }
}

export const deleteTodolist = async (id) => {
    try{
        axios.delete(`http://localhost:5000/auth/lists/delete/${id}`).then((response) => {
            console.log(response);
        })
    }catch(err){
        console.log(err);
    }
}