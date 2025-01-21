import React, { useState } from "react"
function Todo(){
    const [initial,setinitial]=useState();
    const [data,setdata]=useState([]);

    const getinput=(e)=>{
        setinitial(e.target.value)
    }

    const getdata=()=>{
        let store=[...data,initial]
        setdata(store)
        setinitial("")
    }
    const deletetask=(index)=>{
        let filterdata=data.filter((currele,id)=>{
            return id !==index
        })
        setdata(filterdata)
    }

  

    return(
        <>
        <div className="w-[380px] m-auto bg-cyan-700 mt-20 p-3">
            <div className="flex justify-center items-center gap-3">
                <input type="text" className="text-2xl" placeholder="Enter your task" value={initial} onChange={getinput}/>
                <button className="border border-b-gray-600 p-2 w-20 bg-green-300" onClick={getdata}>Add</button>
            </div>
            {data.map((curval,index)=>{
                return(
                    <>
                    <div className="flex gap-20 justify-between items-center m-4">
                        <p>
                            {curval}
                        </p>
                        <button className="bg-red-700 p-2" onClick={()=>deletetask(index)}>Delete</button>
                    </div>
                    </>
                )
            })}
        </div>
        </>
    )
}
export default Todo