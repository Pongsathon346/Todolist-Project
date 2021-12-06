import { useNavigate } from "react-router"

const Welcome = () => {
    const navigate = useNavigate()

    function go() {
        let user = JSON.parse(localStorage.getItem('user'))
        if(!user){
            navigate('/login')
        }else {
            navigate('/lists')
        }
    }

    return(
        <>
            <div class="bg-gray-100 flex min-h-screen justify-center items-center">
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" 
                style={{marginTop:'-40px'}}
                onClick={go} >
                    Enter Site
                </button>
            </div>
        </>
    )
}

export default Welcome