import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isNavOpen } from '../store/selectors/nav';
import { navState } from '../store/atoms/nav';
import Dropdown from './Dropdown';

const Header = () => {

    const nav = useRecoilValue(isNavOpen); 
    const setNav = useSetRecoilState(navState); 

    let Links =[
        {name:"HOME",link:"/"},
        {name:"SERVICE",link:"/"},
        {name:"ABOUT",link:"/"},
        {name:"CONTACT",link:"/"},
    ];

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-[100]'>
           <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <BookOpenIcon className='w-7 h-7 text-blue-600'/>
                <span>UniqueEdge</span>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setNav({ isOpen: !nav })} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    nav ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-0 transition-all duration-500 ease-in ${nav ? 'top-12' : 'top-[-490px]'} ${nav && 'right-10'}`}>

                    {/* // Links.map((link) => (
                    // <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                    //     <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                    // </li>)) */}

                    <li className='md:ml-8 md:my-0 my-7 font-semibold text-lg'>
                    <a href="#" className="text-gray-800 hover:text-cyan-400 duration-500" aria-current="page">Home</a>
                    </li>

                    {/* <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <button
                            className="flex justify-center items-center m-auto rounded bg-cyan-400 px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            type="button"
                            id="dropdownMenuButton1"
                            data-twe-dropdown-toggle-ref
                            aria-expanded="false"
                            data-twe-ripple-init
                            data-twe-ripple-color="light">
                            Mutual Funds
                            <span className="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                fill-rule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clip-rule="evenodd" />
                            </svg>
                            </span>
                        </button>
                        <ul
                            className="absolute justify-center items-center content-center z-[1000] float-left m-0 hidden w-40 list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                            aria-labelledby="dropdownMenuButton1"
                            data-twe-dropdown-menu-ref>
                            <li>
                            <a
                                className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-cyan-100 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                href="#"
                                data-twe-dropdown-item-ref
                                >Action
                            </a>
                            </li>
                            <li>
                            <a
                                className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-cyan-100 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                href="#"
                                data-twe-dropdown-item-ref
                                >Another action
                            </a>
                            </li>
                            <li>
                            <a
                                className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-cyan-100 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                href="#"
                                data-twe-dropdown-item-ref
                                >Something else here
                            </a>
                            </li>
                        </ul>

                    </li> */} 

                    <li className='md:ml-8 md:my-0 my-7 font-semibold text-lg'>
                        <Dropdown />
                    </li>

                    <li className='md:ml-8 md:my-0 my-7 font-semibold text-lg'>
                    <a href="#" className="text-gray-800 hover:text-cyan-400 duration-500" aria-current="page">Wealth Management</a>
                    </li>

                    <li className='md:ml-8 md:my-0 my-7 font-semibold text-lg'>
                    <a href="#" className="text-gray-800 hover:text-cyan-400 duration-500" aria-current="page">Treasury consultancy</a>
                    </li>

                    <li className='md:ml-8 md:my-0 my-7 font-semibold text-lg'>
                    <a href="#" className="text-gray-800 hover:text-cyan-400 duration-500" aria-current="page">Blog</a>
                    </li>

                    <li className='md:ml-8 md:my-0 my-7 font-semibold text-lg'>
                    <a href="#" className="text-gray-800 hover:text-cyan-400 duration-500" aria-current="page">Contact us</a>
                    </li>

                {/* <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button> */}
            </ul>
            {/* button */}
           </div>
        </div>
    );
};

export default Header;