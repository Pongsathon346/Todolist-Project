import axios from "axios";

export const register = async (user,email,password) => {
    try{
        await axios.post(`http://localhost:5000/auth/users/reg`,{
            username:user,
            password:password,
            email:email
        }).then((response)=>{
            console.log(response);
            return response
        })
    }catch(err){
        console.log(err);
    }
}

export const login = async (username,password) => {
    try{
        axios.post('http://localhost:5000/auth/users/login',{},{
            auth:{
                username: username,
                password: password
            }
        }).then((res) => {
            localStorage.setItem('user', JSON.stringify(res.data))
        })
    }catch(err){
        console.log(err);
    }
}