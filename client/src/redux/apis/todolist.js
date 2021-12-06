import axios from "axios";

export const showTodolist = async (user_id) => {
    try{
        return await axios.get(`http://localhost:5000/auth/lists/show/${user_id}`)
   }catch(err){
       console.log(err);
   }
}

export const addTodolist = async ( description, status, user_id) => {
    try{
        axios.post(`http://localhost:5000/auth/lists/add`,{
            description: description,
            status: status,
            user_id: user_id
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
        })
    }catch(err){
        console.log(err);
    }
}

export const deleteTodolist = async (id) => {
    try{
        axios.delete(`http://localhost:5000/auth/lists/delete/${id}`)
    }catch(err){
        console.log(err);
    }
}