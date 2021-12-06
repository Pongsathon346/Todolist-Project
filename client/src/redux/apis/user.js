import axios from "axios";

export const register = async (username,password,email) => {
    try{
        axios.post(`http://localhost:5000/auth/users/reg`,{
            username:username,
            password:password,
            email:email
        }).then((response)=>{
            console.log(response);
        })
    }catch(err){
        console.log(err);
    }
}

export const login = async () => {
    try{
        //login axios
    }catch(err){
        console.log(err);
    }
}