import Projectpop from "./Projectpop"


const Projects = () => {
    return(
        <>
            <div class="my-5 flex flex-row justify-center">
                <input type="text" class=" mx-3 w-3/4 -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Project Name" />
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" data-modal-toggle="test-modal">
                Add Project
                </button>
            </div>
            <div class="my-5 flex flex-row justify-center">
                <div class="rounded-lg shadow-xl bg-white mx-5 flex-wrap">
                    <div class="p-5">
                        <header class="font-semibold text-lg pb-5 border-b-2">Project Name</header>
                        <p class="text-gray-500 px-4 my-4">
                            Project Description
                        </p>
                        <footer><p class="text-gray-400 px-4">Created At: 12/11/2021</p></footer>
                    </div>
                </div>
            </div>            
        </>
    )
}

export default Projects