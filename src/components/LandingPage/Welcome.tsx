import React from 'react'

const Welcome = () => {
    return (

        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-auto pt-10 pb-20">

                <div className='h-full w-full justify-center md:justify-end'>
                    <video src="cars1.mp4" width="500" className='rounded-lg mt-28 float-end' controls loop muted></video>  
                    {/* poster="pics/2019-McLaren-720S.jpg" src="Motivation_video_4K.webm" */}
                </div>

                <div className='h-full w-full '>
                    <h1 className='flex mt-10 text-4xl font-bold' style={{ color: "#2d3e50" }}>Welcome!</h1>
                    <h2 className='flex mt-3 text-2xl font-semibold' style={{ color: "#2d3e50" }}>Know More About Us</h2> 
                    <hr className="h-px mt-4 bg-gray-900 border-0 dark:bg-gray-700" />
                    <p className='flex mt-4 text-start' style={{ color: "#2d3e50" }}>Satyadevi Institute for Financial Learning aims to bolster the human capital in banking and finance through online, classroom and customized training programs. India faces the twin challenges of making small money reach its poorest and big money expand its rapidly developing financial markets. To meet this burgeoning demand, we need well trained professionals.</p>
                    <p className='flex mt-5 text-start' style={{ color: "#2d3e50" }}>Both The Reserve Bank of India and the National Skill Development Corporation have underscored this pressing requirement of our times. A team of experienced practitioners, academics and policy makers have teamed up at SIFL to prepare the next generation of banking and finance experts.</p>
                    <div className='flex mt-6'>
                        <button className=' text-white px-5 py-2 rounded-lg' style={{ backgroundColor: "#2d3e50" }}>Let's Know More</button> 
                        <button className=' text-white px-5 py-2 rounded-lg ml-2' style={{ backgroundColor: "#2d3e50" }}>Download Catalogue</button>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Welcome