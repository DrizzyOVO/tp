import React from 'react'

const Welcome = () => {
    return (

        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-auto pt-10 pb-20">

                <div className='h-full w-full justify-center md:justify-end'>
                    <video src="cars1.mp4" width="500" className='rounded-lg mt-16 float-end' controls loop muted></video>  
                    {/* poster="pics/2019-McLaren-720S.jpg" src="Motivation_video_4K.webm" */}
                </div>

                <div className='h-full w-full '>
                    <h1 className='flex mt-10 text-4xl font-bold' style={{ color: "#2d3e50" }}>Welcome!</h1>
                    <h2 className='flex mt-3 text-2xl font-semibold' style={{ color: "#2d3e50" }}>Know More About Us</h2> 
                    <hr className="h-px mt-4 bg-gray-900 border-0 dark:bg-gray-700" />
                    <p className='flex mt-4 text-start' style={{ color: "#2d3e50" }}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, labore autem! Minima dolorum a minus facilis officiis. Eligendi quas repellat aperiam aspernatur? Fugiat, rem? Facilis possimus iste blanditiis culpa. Qui.</p>
                    <p className='flex mt-5 text-start' style={{ color: "#2d3e50" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugit minus eaque eveniet voluptatibus neque laborum itaque. Perspiciatis voluptatem optio sunt alias, placeat porro similique, aut sapiente inventore, cumque dicta.</p>
                    {/* <div className='flex mt-6'>
                        <button className=' text-white px-5 py-2 rounded-lg' style={{ backgroundColor: "#2d3e50" }}>Let's Know More</button> 
                        <button className=' text-white px-5 py-2 rounded-lg ml-2' style={{ backgroundColor: "#2d3e50" }}>Download Catalogue</button>
                    </div> */}
                </div>

            </div>

        </div>

    )
}

export default Welcome