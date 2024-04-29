import React from 'react'

const DefualtBlog = () => {
    return (


        <div className='container m-auto '>


            <div className='flex justify-around mt-16'>
                <div className='inline-block overflow-hidden'>
                    <img className='hover:scale-110 duration-500 transition-transform  max-w-[700px] ' src="https://emart.wpthemedemos.com/wp-content/uploads/2022/10/blog-img-12-1.webp" alt="" />
                </div>



                <div>
                    <input className='border-2 border-solid border-black mt-4' type="text" name="" id="" />
                    <p className='mt-3 font-bold text-xl'> Categories</p>
                    <input className='hover:    mt-3' type="radio" name="" id="" /><label htmlFor="">Beauty</label><br />
                    <input className='hover:   mt-1' type="radio" name="" id="" /><label htmlFor="">Consulting</label><br />
                    <input className='hover: mt-1' type="radio" name="" id="" /><label htmlFor="">Creative</label><br />
                    <input className='hover: mt-1' type="radio" name="" id="" /><label htmlFor="">Design</label><br />
                    <input className='hover: mt-1' type="radio" name="" id="" /><label htmlFor="">Fashion</label><br />
                    <input className='hover: mt-1' type="radio" name="" id="" /><label htmlFor="">Modern</label><br />
                    <input className='hover: mt-1' type="radio" name="" id="" /><label htmlFor="">Season Style</label><br />
                    <input className='hover: mt-1' type="radio" name="" id="" /><label htmlFor="">Shoping</label><br />
                    <input className='hover: mt-1' type="radio" name="" id="" /><label htmlFor="">Start Up</label><br />
                    <input className='hover: mt-1' type="radio" name="" id="" /><label htmlFor="">Style</label><br />
                    <input className='hover: mt-1' type="radio" name="" id="" /><label htmlFor="">Style Development</label><br />
                    <input className='hover: mt-1' type="radio" name="" id="" /><label htmlFor="">Success Cases</label><br />
                    <input className='hover: mt-1' type="radio" name="" id="" /><label htmlFor="">Trending</label><br />


                    <p className='text-lg font-bold mt-3'> Archives</p>

                    <input className='hover: mt-3' type="radio" name="" id="" /><label htmlFor="">October 2022</label><br />
                    <input className='hover: mt-1' type="radio" name="" id="" /><label htmlFor="">May 2021</label><br />

                    <p className='text-lg font-bold mt-3'>Tag</p>
                    <div className='mt-3'>
                        <button className='border-2 border-r-neutral-600 border-solid p-1 px-3 rounded-full bg-slate-200 hover:bg-black hover:text-white m-1'>Creativ</button>
                        <button className='border-2 border-r-neutral-600 border-solid p-1 px-3 rounded-full bg-slate-200 hover:bg-black hover:text-white m-1'>Design</button>
                        <button className='border-2 border-r-neutral-600 border-solid p-1 px-3 rounded-full bg-slate-200 hover:bg-black hover:text-white m-1'>Fashion</button>
                        <button className='border-2 border-r-neutral-600 border-solid p-1 px-3 rounded-full bg-slate-200 hover:bg-black hover:text-white m-1'>Tread</button>

                    </div>

                </div>
            </div>



        </div>
    )
}

export default DefualtBlog
