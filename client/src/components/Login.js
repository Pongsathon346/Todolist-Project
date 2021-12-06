import { useState, } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { loginUser } from '../redux/actions'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function sendLogin() {
        dispatch(loginUser(username,password))
        navigate('/projects')
    }
    
    return(
        <>
          <div class="flex justify-center my-8">

            <div class="max-w-md w-full space-y-8">
                <div>
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Login to your account
                </h2>
                <p class="mt-2 text-center text-sm text-gray-600">
                    Or
                    <Link to='/register' class="font-medium text-indigo-600 hover:text-indigo-500 mx-2">
                        Sign Up
                    </Link>
                </p>
                </div>
                    <div class="mt-8 space-y-6" >
                    <input type="hidden" name="remember" value="true"/>
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="username" class="sr-only">Username</label>
                        <input id="username" name="username" type="text" autoComplete="current-username" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" 
                        onChange={(event) => {setUsername(event.target.value)}} />
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input id="password" name="password" type="password" autoComplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"
                        onChange={(event) => {setPassword(event.target.value)}} />
                    </div>
                </div>

                <div>
                    <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                     onClick={sendLogin} >
                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                       Login
                    </button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Login