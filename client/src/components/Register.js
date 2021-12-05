import {useState, useEffect} from 'react' 
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCon, setPasswordCon] = useState('')
    const navigate = useNavigate()

    function sendReg(){
        if(password !== passwordCon){
            alert('Password did not match!')
        }else{
            axios.post('http://localhost:5000/auth/users/reg',{
                username: username,
                email: email,
                password: password
            }).then((res) => {
                alert(res.data.message)
                navigate('/login')
            })
        }

    }

    return(
        <>
            <div class="min-w-screen flex items-center justify-center px-5">
                <div class="text-gray-500 rounded-3xl w-full overflow-hidden" style={{maxWidth:'1000px'}}>
                    <div class="md:flex w-full justify-center items-center">
                        <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
                            <div class="text-center mb-5">
                                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 mb-2">
                                    Register
                                </h2>
                                <p class="mt-2 text-center text-sm text-gray-600">
                                    Or
                                    <Link to='/login' class="font-medium text-indigo-600 hover:text-indigo-500 mx-2">
                                      Login
                                    </Link>
                                </p>
                            </div>
                            <div>
                                <div class="flex -mx-3">
                                    <div class="w-full px-3 mb-2">
                                        <label for="" class="text-xs font-semibold px-1">Username</label>
                                        <div class="flex">
                                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John" 
                                            onChange= {(event) => {setUsername(event.target.value)}} />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex -mx-3">
                                    <div class="w-full px-3 mb-3">
                                        <label for="" class="text-xs font-semibold px-1">Email</label>
                                        <div class="flex">
                                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com"
                                            onChange= {(event) => {setEmail(event.target.value)}} />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex -mx-3">
                                    <div class="w-full px-3 mb-5">
                                        <label for="" class="text-xs font-semibold px-1">Password</label>
                                        <div class="flex">
                                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                            <input type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************"
                                            onChange= {(event) => {setPassword(event.target.value)}} />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex -mx-3">
                                    <div class="w-full px-3 mb-5">
                                        <label for="" class="text-xs font-semibold px-1">Re-Enter Password</label>
                                        <div class="flex">
                                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                            <input type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************"
                                            onChange= {(event) => {setPasswordCon(event.target.value)}} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={sendReg} >
                                       Create Account
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register