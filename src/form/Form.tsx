import React from "react";
import { FormInput } from "./test";

interface FormProps {
    inputs: FormInput[];
}

const Form: React.FC<FormProps> = ({ inputs }) => {
    return (
        <div className="h-[500px] w-3/4 border border-red-300 bg-slate-200 p-8 m-auto mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center underline underline-offset-1 ">Sign Up</h2>
            <form className="flex flex-col space-y-4">
                {inputs.map((input, index) => (
                    <div key={index} className="flex flex-col">
                        <label className="mb-2" htmlFor={input.label}>{input.label}</label>
                        <input 
                            type={input.type} 
                            placeholder={input.placeholder}
                            className="border border-black h-10 px-2 rounded"
                        />
                    </div>
                ))}
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-6 w-full"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;