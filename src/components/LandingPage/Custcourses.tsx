import React from 'react'

const Custcourses = () => {

    const courses = [1, 1, 1, 1, 1, 1, 1, 1, 1] 

    return (

        <div className='pb-20'>

            <div>
                <h1 className='pt-10 text-2xl font-bold mt-10' style={{ color: "#2d3e50" }}>CUSTOMIZED COURSES FOR  BANKS AND FINANCIAL INSTITUTIONS</h1>
                <p className='text-sm mt-5 font-sans'>Following are some of the important courses. Get more information and register for downloading the brochures.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center w-5/6 m-auto'>

                {
                    courses.map((course) => (
                        <div className=''>
                            <div className="max-w-sm sm:ml-6 md:ml-6 mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>

    )

}

export default Custcourses


