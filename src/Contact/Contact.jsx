import React, { useState } from "react";

function Contact() {
    const [initial,setinitial]=useState();
    const [data,setdata]=useState([]);

    const gettext=(e)=>{
        setinitial(e.target.value);
    }
    const getinput=()=>{
        let store=[...data,initial]
        setdata(store)
        setinitial("")
    }

    const deldata=(index)=>{
        let filterdata =data.filter((currele,id)=>{
            return id!==index;
        })
        setdata(filterdata)
    }




    return (
        <div className="min-h-screen w-full bg-slate-900 flex justify-center items-start pt-9">
            <div className="min-h-96 w-[600px] bg-white">
                <h1 className="text-center text-xl text-red-400 underline">Contacts</h1>
                <div className="text-center mt-5 flex justify-around items-center">
                    <input type="text" className="border border-black h-9 p-5" value={initial} onChange={gettext} placeholder="Enter your Contacts"/>
                    <button className="bg-green-300 p-2 rounded-xl" onClick={getinput}>Add Contacts</button>
                </div>
                <div>
                  {data.map((curr,index)=>{
                    return(
                        <>
                        <div className="flex justify-around items-center bg-slate-600 p-2 ml-16 mt-2 mb-2 mr-6">
                        <p className="text-white">{curr}</p>
                        <button className="p-2 bg-red-500 w-20" onClick={()=>deldata(index)}>Del</button>
                        </div>
                        
                        </>
                    )
                  })}
                </div>
            </div>
        </div>
    );
}

export default Contact;
