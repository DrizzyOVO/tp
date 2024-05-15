import React from 'react'

const Footer = () => {

    return (

        <div className='grid grid-cols-1 md:grid-cols-4 w-full h-auto mt-20' style={{ backgroundColor: "#2d3e50" }}>

            <div className='grid grid-rows-3 mt-10 ml-20 justify-start items-start'>

                {/* <img src="https://www.sifl-training.com/wp-content/uploads/2022/10/SIFL.png" width={300} alt="..." /> */}

                <p className='-mt-2 text-white text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quia et saepe labore quidem perferendis minima in placeat sequi maxime porro minus, suscipit quas eos quo mollitia hic quisquam repellendus!</p>

                <div className='flex justify-start pt-4 mr-4'>

                    <svg enable-background="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width={40}><g id="Flat_copy"><g><path d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16s16-7.164,16-16C32,7.163,24.837,0,16,0z" fill="#2d3e50"/></g><path d="M13.69,24.903h3.679v-8.904h2.454l0.325-3.068h-2.779l0.004-1.536c0-0.8,0.076-1.229,1.224-1.229h1.534   V7.097h-2.455c-2.949,0-3.986,1.489-3.986,3.992v1.842h-1.838v3.069h1.838V24.903z" fill="#FFFFFF"/></g></svg>

                    <svg enable-background="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width={40}><g id="Flat_copy"><g><path d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16s16-7.164,16-16C32,7.163,24.837,0,16,0z" fill="#2d3e50"/></g><path d="M24.294,22.942v-6.137c0-3.288-1.755-4.818-4.096-4.818c-1.889,0-2.735,1.039-3.206,1.768v-1.517h-3.558   c0.047,1.005,0,10.704,0,10.704h3.558v-5.978c0-0.319,0.023-0.639,0.117-0.867c0.257-0.639,0.842-1.301,1.825-1.301   c1.288,0,1.803,0.981,1.803,2.42v5.727L24.294,22.942L24.294,22.942z M9.685,10.777c1.24,0,2.013-0.823,2.013-1.85   c-0.023-1.05-0.773-1.849-1.99-1.849S7.696,7.877,7.696,8.927c0,1.028,0.772,1.85,1.967,1.85H9.685z M11.464,22.942V12.238H7.907   v10.704H11.464z" fill="#FFFFFF"/></g></svg>

                </div>

            </div> 

            <div className='grid grid-rows-2 '> 

                <h1 className='text-white font-bold text-lg mt-10'><span className='text-cyan-400'>| &nbsp;&nbsp;Q</span>uick Links </h1>

                <div className='grid grid-rows-5 justify-center -mt-20'>

                    <div className='flex justify-start gap-4'>
                        <span className='text-white'><svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" widths={100}><path d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z" fill="#FFFFFF"/></svg></span>

                        <a href='#' className='text-white mt-1 hover:text-cyan-400 duration-500'>&nbsp;&nbsp;&nbsp;Testimonials</a>
                    </div>

                    <div className='flex justify-start gap-4'>
                        <span className='text-white'><svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" widths={100}><path d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z" fill="#FFFFFF"/></svg></span>

                        <a href='#' className='text-white mt-1 hover:text-cyan-400 duration-500'>&nbsp;&nbsp;&nbsp;About Us</a>
                    </div>

                    <div className='flex justify-start gap-4'>
                        <span className='text-white'><svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" widths={100}><path d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z" fill="#FFFFFF"/></svg></span>

                        <a href='#' className='text-white mt-1 hover:text-cyan-400 duration-500'>&nbsp;&nbsp;&nbsp;Contact Us</a>
                    </div>

                    <div className='flex justify-start gap-4'>
                        <span className='text-white'><svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" widths={100}><path d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z" fill="#FFFFFF"/></svg></span>

                        <a href='#' className='text-white mt-1 hover:text-cyan-400 duration-500'>&nbsp;&nbsp;&nbsp;Privacy Policy</a>
                    </div>

                    <div className='flex justify-start gap-4'>
                        <span className='text-white'><svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" widths={100}><path d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z" fill="#FFFFFF"/></svg></span>

                        <a href='#' className='text-white mt-1 hover:text-cyan-400 duration-500'>&nbsp;&nbsp;&nbsp;Refund Policy</a>
                    </div>

                </div>  

            </div> 

            <div className='grid grid-rows-2 justify-center'> 

                <h1 className='text-white font-bold text-lg mt-10'><span className='text-cyan-400'>| &nbsp;&nbsp;R</span>egistered Office </h1>

                <div className='flex justify-start text-left ml-24'>
                <h1 className='-mt-20 text-white text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laboriosam laborum, architecto iusto accusamus odit odio quibusdam obcaecati temporibus assumenda in impedit doloremque</h1>  
                </div>

            </div> 

            <div className='grid grid-rows-2 justify-center'> 

                <h1 className='text-white font-bold text-lg mt-10'><span className='text-cyan-400'>| &nbsp;&nbsp;C</span>orporate Office </h1>

                <div className='flex justify-start text-left ml-24'>
                    <h1 className='-mt-20 text-white text-md'>{"sdf \n sdf"}</h1>  
                </div>

            </div> 

        </div>

    )
}

export default Footer