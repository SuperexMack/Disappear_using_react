import { useState } from "react"

function Holder(){

    const [isVisible , setisvisble] = useState(true)

    const Hide = ()=>{
        setisvisble(false)
    }



    return(
        <>

        {isVisible && (
        
        <div className="mt-10 bg-gray-800 text-white h-40 w-2/6 relative left-96 rounded-2xl"> 
        
        <div className="pt-4">
       
        <h1>This is the first heading </h1>
        <h1>This is the second heading </h1>
        <h1>This is the third heading </h1>
        <h1>This is the fourth heading </h1>
        </div>

        <div>
            <button 

            onClick={()=> Hide()}
            
            className="bg-black text-white w-24 ml-3 mt-3 rounded-xl hover:cursor-pointer hover:bg-white hover:text-black">Delete</button>
        </div>

        </div>

        )}

        </>
    )
}

export default Holder