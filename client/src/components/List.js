import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addListData, deleteListData, showListData, updateStat } from "../redux/actions"

const List = () => {
    
    const dispatch = useDispatch()

    const [input,setInput] = useState('')

    const local = JSON.parse(localStorage.getItem('user'))

    const [userid,setUserid] = useState(local.id)

    const [todos,setTodos] = useState([])

    const [count,setCount] = useState(1)

    useEffect(()=>{
        dispatch(showListData(userid))       
    },[count])

    const lists = useSelector((state) => state.todolist)

    useEffect(()=>{
        if(lists.data) {
            setTodos(lists.data.data.rows)
        }
    },[lists,count])

    const addList = async () => {
        try{
            dispatch(addListData(input,'Plan',userid))
            setTimeout(()=>{
                setCount(count+1)   
            }, 100)
        }catch(e){
            throw e
        }
    }

    const onDelete = async (id) => {
        try{
            dispatch(deleteListData(id))
            setTimeout(()=>{
                setCount(count+1)
            },100)
        }catch(e){
            throw e
        }
    }

    const done = async (id) => {
        try{
            dispatch(updateStat(id))
            setTimeout(()=>{
                setCount(count+1)
            },100)
        }catch(e){
            throw e
        }
    }

    return(
        <>
            <div className=" text-5xl flex flex-row justify-center my-10 font-semibold text">WORKS TO BE DONE</div>
            <div className="my-5 flex flex-row justify-center">
                <input id="search" onChange={(e) => setInput(e.target.value)} type="text" class=" mx-3 w-3/4 -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter name of event ex. wash a car" />
                <button onClick={addList} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                    Add Work       
                </button>
            </div>
            <div className="my-2 flex flex-row justify-center text-center">
                <div className="flex flex-row justify-between w-3/4 py-2 px-10 border-b-2">
                    <span className="text-lg font-bold">Lists</span>
                    <div className="">
                        <span className="h-7 w-7  mx-4 text-md font-bold">Done</span>
                        <span className="h-7 w-7 mx-2 text-md font-bold">Delete</span>
                    </div>
                </div>
            </div>
            <div className="mb-5">
                {todos == undefined ? (
                    <div className="flex flex-row justify-center text-gray-500">Add a lists</div>
                    ):(
                        todos.map((list) => (
                        <div className="flex flex-row justify-center text-center ">
                            {list.todo_status !== 'Plan' ? (
                                <div className="my-4 flex flex-row justify-between w-3/4 rounded-2xl bg-gray-300 py-7 px-10 shadow-xl">
                                    <s>
                                    <div className="font-400 text-lg ">
                                        {list.todo_describ}
                                    </div>
                                    </s>
                                    <div className="flex flex-row justify-between">
                                        <svg onClick={()=>done(list.todo_id)} xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-5 text-green-700 hover:bg-gray-200 hidden" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                        <svg onClick={()=> onDelete(list.todo_id)} xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mx-5 text-red-700 hover:bg-gray-200" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            ):(
                                <div className="my-4 flex flex-row justify-between w-3/4 rounded-2xl bg-gray-100 py-7 px-10 shadow-xl">
                                    <div className="font-400 text-lg ">
                                        {list.todo_describ}
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        
                                        <svg onClick={()=>done(list.todo_id)} xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-5 text-green-700 hover:bg-gray-200" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                        <svg onClick={()=> onDelete(list.todo_id)} xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mx-5 text-red-700 hover:bg-gray-200" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                            
                        </div>
                    ))
                )}
            </div>
        </>
    )
}

export default List