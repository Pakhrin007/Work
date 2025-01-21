import React from "react";
import { FormInput } from "./type";

const Form: React.FC<FormInput> = ({ label, type, placeholder }) => {
    return (
        <div className="h-[68px] flex-col justify-start items-start gap-1 inline-flex">
            <label 
                className="text-[#9b9da1] text-sm font-normal font-['Manrope'] leading-tight" 
                htmlFor={label}
            >
                {label}
            </label>
            <div className="relative w-[109px] h-[44px]">
                <input 
                    type={type} 
                    placeholder={placeholder}
                    className="w-full p-3 bg-[#0b0e1a] rounded-lg border border-[#1f212c] text-[#cecfd1] text-sm font-normal font-['Manrope'] leading-tight placeholder-[#cecfd1] focus:outline-none"
                />
            </div>
        </div>
    );
}

export default Form;