import React from 'react'

const Ourservices = () => {

    const services = [
        {
            logo: 'smth', 
            heading: 'heading1', 
            point1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro magnam perferendis aperiam. Quaerat quas repudiandae nesciunt provident dignissimos. Debitis neque vitae totam excepturi sapiente', 
            point2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro magnam perferendis aperiam. Quaerat quas repudiandae nesciunt provident dignissimos. Debitis neque vitae totam excepturi sapiente', 
            point3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro magnam perferendis aperiam. Quaerat quas repudiandae nesciunt provident dignissimos. Debitis neque vitae totam excepturi sapiente', 
            button: 'View Courses'
        },{
            logo: 'smth', 
            heading: 'heading1', 
            point1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro magnam perferendis aperiam. Quaerat quas repudiandae nesciunt provident dignissimos. Debitis neque vitae totam excepturi sapiente', 
            point2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro magnam perferendis aperiam. Quaerat quas repudiandae nesciunt provident dignissimos. Debitis neque vitae totam excepturi sapiente', 
            point3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro magnam perferendis aperiam. Quaerat quas repudiandae nesciunt provident dignissimos. Debitis neque vitae totam excepturi sapiente', 
            button: 'View Courses'
        }, {
            logo: 'smth', 
            heading: 'heading1', 
            point1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro magnam perferendis aperiam. Quaerat quas repudiandae nesciunt provident dignissimos. Debitis neque vitae totam excepturi sapiente', 
            point2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro magnam perferendis aperiam. Quaerat quas repudiandae nesciunt provident dignissimos. Debitis neque vitae totam excepturi sapiente', 
            point3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro magnam perferendis aperiam. Quaerat quas repudiandae nesciunt provident dignissimos. Debitis neque vitae totam excepturi sapiente', 
            button: 'View Courses'
        }, {
            logo: 'smth', 
            heading: 'heading1', 
            point1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro magnam perferendis aperiam. Quaerat quas repudiandae nesciunt provident dignissimos. Debitis neque vitae totam excepturi sapiente', 
            point2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro magnam perferendis aperiam. Quaerat quas repudiandae nesciunt provident dignissimos. Debitis neque vitae totam excepturi sapiente', 
            point3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro magnam perferendis aperiam. Quaerat quas repudiandae nesciunt provident dignissimos. Debitis neque vitae totam excepturi sapiente', 
            button: 'View Courses'
        },  
    ]

    return (

        <div className='h-auto pb-20' style={{ backgroundColor: "#2d3e50" }}>

            <div>
                <h1 className='text-white font-bold p-16 text-2xl'>OUR SERVICES</h1>
            </div>

            <div className='grid gird-cols-1 md:grid-cols-4 w-full h-full justify-center'> 

                {
                    services.map((service) => (
                        <div className='mt-10'>
                            <div className='bg-cyan-400 w-5/6 h-full m-auto rounded-md pt-10 pb-10 text-white'>
                                <h1>{service.point1}</h1>
                            </div>
                        </div> 
                    ))
                }

            </div>

        </div>

    )
}

export default Ourservices