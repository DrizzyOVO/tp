import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
  return (
    // <Menu as="div" className="relative inline-block text-left">
    //   <div>
    //     <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-cyan-400 shadow-sm ring-1 ring-inset ring-cyan-400 hover:bg-cyan-50">
    //       Mutual Funds
    //       <ChevronDownIcon className="-mr-1 h-5 w-5 text-cyan-400" aria-hidden="true" />
    //     </Menu.Button>
    //   </div>

    //   <Transition
    //     as={Fragment}
    //     enter="transition ease-out duration-100"
    //     enterFrom="transform opacity-0 scale-95"
    //     enterTo="transform opacity-100 scale-100"
    //     leave="transition ease-in duration-75"
    //     leaveFrom="transform opacity-100 scale-100"
    //     leaveTo="transform opacity-0 scale-95"
    //   >
    //     <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    //       <div className="py-1">
    //         <Menu.Item>
    //           {({ active } : { active: any }) => (
    //             <a
    //               href="#"
    //               className={classNames(
    //                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
    //                 'block px-4 py-2 text-sm hover:bg-cyan-50'
    //               )}
    //             >
    //               Option 1
    //             </a>
    //           )}
    //         </Menu.Item>
    //         <Menu.Item>
    //           {({ active } : { active: any }) => (
    //             <a
    //               href="#"
    //               className={classNames(
    //                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
    //                 'block px-4 py-2 text-sm hover:bg-cyan-50'
    //               )}
    //             >
    //               Option 2
    //             </a>
    //           )}
    //         </Menu.Item>
    //         <Menu.Item>
    //           {({ active } : { active: any }) => (
    //             <a
    //               href="#"
    //               className={classNames(
    //                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
    //                 'block px-4 py-2 text-sm hover:bg-cyan-50' 
    //               )}
    //             >
    //               Option 3
    //             </a>
    //           )}
    //         </Menu.Item>
    //         <form method="POST" action="#">
    //           <Menu.Item>
    //             {({ active } : { active: any }) => (
    //               <button
    //                 type="submit"
    //                 className={classNames(
    //                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
    //                   'block w-full px-4 py-2 text-left text-sm hover:bg-cyan-50'
    //                 )}
    //               >
    //                 Sign out
    //               </button>
    //             )}
    //           </Menu.Item>
    //         </form>
    //       </div>
    //     </Menu.Items>
    //   </Transition>
    // </Menu>


//     <div className="flex items-center justify-center bg-white duration-500">
//     <div className="group relative cursor-pointer duration-500">

//         <div className="flex items-center justify-between bg-white px-4">
//             <a className="menu-hover text-base font-medium text-black hover:text-cyan-400 duration-500" onClick={() => {}}>
//             Mutual Funds
//             </a>
//             <span className='mt-1'>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                     stroke="currentColor" className="h-6 w-6 duration-500" >
//                     <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//                 </svg>
//             </span>
//         </div>

//         <div className="invisible absolute z-[50] flex w-full flex-col bg-white py-1 px-4 text-gray-800 shadow-xl group-hover:visible duration-500">

//             <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
//                 Option 1
//             </a>

//             <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
//                 Option 2
//             </a>

//             <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
//                 Option 3
//             </a>

//         </div>
//     </div>
// </div>


<nav aria-label="primary" className="relative z-20 flex-col flex-grow hidden md:pb-0 md:flex md:justify-end md:flex-row">
  
<div className="relative group">
    <button className="flex justify-between items-center w-full font-semibold text-lg text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none hover:text-cyan-400 duration-500">
        <span>Mutual Funds</span>
        {/* <span className='mt-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" className="h-6 w-6 duration-500" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        </span> */}
    </button>
    <div className="absolute z-10 hidden bg-grey-200 group-hover:block duration-500 rounded-xl">
        
        <div className="w-full px-4 pt-2 bg-white shadow-lg duration-500 rounded-2xl">
          <div className="grid grid-rows-2 gap-4 rounded-xl ">
            <a className='hover:text-cyan-400 duration-500 cursor-pointer'>
              option 1
            </a>
            <a className='hover:text-cyan-400 duration-500 cursor-pointer'>
                option 2
            </a>
          </div>
        </div>
    </div>
</div>  

</nav>


  )
}
