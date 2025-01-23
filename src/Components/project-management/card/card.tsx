import React from 'react';
import AddIcon from '../../../assets/images/AddIcon';

const Card = () => {
    return (
        // ------------------main card------------------
        <div className='p-[12px] h-[380px] w-[333.68px] flex flex-col gap-[8px] rounded-[12px] bg-red-500'>
            {/* -------------------image ------------------------- */}
           <div className='w-100% h-[122px] color bg-blue-500 rounded-[10px]'>
            <img src="" alt="" />
           </div>
           {/* --------------------priority------------ */}
           <div className='w-[42px] h-[24px] p-[8px] bg-cyan-500 flex justify-center items-center rounded-full px-[8px] py-[4px]'>
            <p>High</p>
           </div>
           {/* -------------------Topic---------------------- */}
           <div className='w-100% h-[58px] space-y-[6px]  bg-blue-200'>
            <div className='w-[100%] h-[20px] bg-green-500'>
                <p>Build Global Design System</p>
            </div>
            <div className='w-[100%] h-[32px] bg-pink-500'>
                <p>Lorem, ipsum dolor sit amet </p>
            </div>
           </div>
           {/* --------------------people, Dates and Tage------------------------- */}
           <div className='w-100% h-[96px] bg-slate-400 space-y-[4px] flex flex-col'>
            {/* ----------------------peoples------------------------- */}
            <div className='w-[100%] h-[28px] bg-green-500 flex  items-center'>
                <i className='h-[28px] w-[20px] py-[4px]'>{<AddIcon/>}</i>
                <p className='px-[12px] h-full w-[100%] flex  items-center'>People</p>
            </div>
            {/* ----------------------------Dates--------------------------- */}
            <div className='w-[100%] h-[28px] bg-green-500 flex  items-center'>
                <i className='h-[28px] w-[20px] py-[4px]'>{<AddIcon/>}</i>
                <div className='px-[12px] py-[4px] h-full w-[100%] gap-x-[8px] flex items-center'>
                    <p>Hello</p>
                    <p>-</p>
                    <p>World</p>
                </div>
            </div>
            {/* -----------------------------Tags---------------------------- */}
            <div className='w-[100%] h-[32px] flex'>
                <i className='h-full w-[28px] py-[4px] flex items-center'>{<AddIcon/>}</i>
                <div className='px-[12px] py-[4px] h-full w-[100%] gap-x-[8px] flex items-center'>
                  <p className='w-[99px] h-[24px] bg-brown px-[8px] py-[4px] rounded-full flex items-center bg-red-500'>Hello</p>
                  <p className='w-[89px] h-[24px] bg-brown px-[8px] py-[4px] rounded-full flex items-center bg-red-500'>World</p>
                  <p className='w-[30px] h-[24px] bg-brown px-[8px] py-[4px] rounded-full flex items-center bg-red-500'>+3</p>
                </div>
            </div>

           </div>
           {/* ---------------------------Divider------------------------------ */}
           <div className='w-[100%] h-px bg-slate-400'></div>
           {/* ---------------------------------Comments----------------------------- */}
           <div className='w-100% h-[16px] flex items-center space-x-[12px]'>
            <div className='w-[34px] h-full bg-blue-500 flex items-center space-x-[4px]'>
            
                    <i>
                        {<AddIcon/>}
                    </i>
                    <p>23</p>
              
            </div>
            <div className='w-[80px] h-full bg-blue-500 flex items-center space-x-[4px]'>
            <i>
                        {<AddIcon/>}
                    </i>
                    <p>23</p>
            </div>
            <div className='w-[35px] h-full bg-green-500 flex items-center space-x-[4px]'>
            <i>
                        {<AddIcon/>}
                    </i>
                    <p>23</p>
            </div>
            <div className='w-[64px] h-full bg-yellow-500 flex items-center space-x-[4px]'>
            <i>
                        {<AddIcon/>}
                    </i>
                    <p>23</p>
            </div>
           </div>
           
            
        </div>
    );
};

export default Card;
