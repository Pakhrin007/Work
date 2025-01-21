import img1 from "./assets/images/SVG 1.svg"
import img2 from "./assets/images/SVG 2.svg"
import img3 from "./assets/images/SVG 3.svg"
import image4 from "./assets/images/sss.jpg"

function Prati(){

    return(
        <>
        <nav className="flex justify-around">
            <div className="mt-5">
                <h1>Branding</h1>
            </div>
            <div className="mt-5 ">
                <img className="inline ml-10" src={img1} alt="" />
                <img className="inline ml-10" src={img2} alt="" />
                <img className="inline ml-10" src={img3} alt="" />
            </div>
        </nav>

        <header className="mt-20  flex justify-around  mb-4">
            <div>
                <h1 className="font-bold mb-9 text-3xl mt-1 text-center">Spring /Summer vibes</h1>
                <p className="w-[390px] font-serif text-justify border border-slate-700 p-2 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio tempore blanditiis impedit quisquam perferendis, quia fugit minima, esse eum quo accusantium id harum totam reprehenderit! Sed fugit labore, excepturi ipsa reprehenderit dolores magnam tempora qui quasi facere at, itaque accusamus sunt minima </p>
                <img src={image4} className="w-[320px] relative left-11 mt-8" alt="" />
            </div>

            <div>
            <img src={image4} className="w-[320px] relative left-11 mt-8" alt="" />
                <h1 className="font-bold mb-9 text-3xl mt-1 text-center">Spring /Summer vibes</h1>
                <p className="w-[390px] font-serif text-justify border border-slate-700 p-2 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio tempore blanditiis impedit quisquam perferendis, quia fugit minima, esse eum quo accusantium id harum totam reprehenderit! Sed fugit labore, excepturi ipsa reprehenderit dolores magnam tempora qui quasi facere at, itaque accusamus sunt minima 
                </p>
                <button className="bg-cyan-600 pt-2 pb-2 pl-5 pr-5 ">Explore</button>
               
            </div>
           
        </header>

        <section className="flex justify-around mt-10  p-2 mb-5 ml-5 mr-5">

            <div className="p-3 border">
                <p className="font-bold">Buy now, pay later</p>
                <p className="mt-5 w-[180px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quis.</p>
                <button className="bg-cyan-600 pt-2 pb-2 pl-5 pr-5 mt-3">Explore</button>
            </div>
            <div className="p-3 border">
                <p className=" font-bold">Buy now, pay later</p>
                <p className="mt-5 w-[180px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quis.</p>
                <button className="bg-cyan-600 pt-2 pb-2 pl-5 pr-5 mt-3">Explore</button>

            </div>
            <div className="p-3 border">
                <p className="font-bold">Buy now, pay later</p>
                <p className="mt-5 w-[180px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quis.</p>
                <button className="bg-cyan-600 pt-2 pb-2 pl-5 pr-5 mt-3">Explore</button>

            </div>

        </section>
        </>
    )
}

export default Prati