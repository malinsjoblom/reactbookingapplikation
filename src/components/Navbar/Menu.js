import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';





function Menu() {

    return (

        <>
        <nav className="bg-purple-100 shadow h-auto">

            <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
                <div className="flex justify-between items-center">
                    <svg viewBox="-28 0 511 511.99967" xmlns="http://www.w3.org/2000/svg"><path d="m108.667969 300.8125c-59.738281 0-108.167969 48.429688-108.167969 108.167969v103.019531h216.335938v-103.019531c0-59.738281-48.425782-108.167969-108.167969-108.167969zm0 0" fill="#ffd4bd" /><path d="m78.792969 315.75c1.515625-4.054688 3.125-8.058594 4.8125-12.011719-47.652344 11.304688-83.105469 54.132813-83.105469 105.242188v103.019531h78.292969c-23.621094-63.285156-23.621094-132.964844 0-196.25zm0 0" fill="#ffbf9d" /><path d="m165.332031 270.953125c-13.089843-60.855469-100.21875-60.925781-113.324219 0-11.941406 55.507813-19.019531 115.265625-20.597656 176.523437-.179687 7.089844 3.949219 13.589844 10.445313 16.429688 21.109375 9.234375 43.582031 14.371094 66.8125 14.371094 22.992187 0 45.355469-4.984375 66.8125-14.371094 6.5-2.839844 10.628906-9.339844 10.445312-16.429688-1.542969-59.960937-8.398437-119.820312-20.59375-176.523437zm0 0" fill="#ff8e9e" /><path d="m108.667969 225.277344c-25.054688 0-50.109375 15.222656-56.660157 45.675781-11.828124 54.980469-18.996093 114.386719-20.597656 176.523437-.183594 7.089844 3.945313 13.589844 10.445313 16.429688 21.457031 9.386719 43.820312 14.371094 66.8125 14.371094-26.9375-82.183594-26.9375-170.820313 0-253zm0 0" fill="#ea5b70" /><path d="m181.699219 251.769531 101.457031-101.457031 21.855469 21.851562-101.460938 101.460938zm0 0" fill="#4c5659" /><path d="m209.152344 274.214844c11.203125-18.328125-9.714844-39.246094-28.042969-28.042969-13.855469 8.46875-27.910156 18.40625-41.84375 29.683594-7.144531 5.777343-7.730469 16.46875-1.234375 22.964843l18.472656 18.472657c6.496094 6.496093 17.1875 5.910156 22.96875-1.230469 11.273438-13.933594 21.210938-27.992188 29.679688-41.847656zm0 0" fill="#ea5b70" /><path d="m400.132812 9.066406c-10.9375-10.9375-28.308593-12.140625-40.585937-2.726562-46.558594 35.703125-91.460937 74.578125-134.414063 116.636718-6.136718 6.011719-6.175781 15.886719-.101562 21.960938l71.25 71.25 132.261719-178.710938zm0 0" fill="#676f72" /><path d="m296.28125 216.1875 14.105469 14.105469c6.074219 6.074219 15.949219 6.039062 21.960937-.101563 42.058594-42.949218 80.933594-87.855468 116.636719-134.414062 9.414063-12.273438 8.210937-29.648438-2.726563-40.585938l-17.714843-17.714844c-28.421875 8.601563-55.199219 24.132813-77.667969 46.601563-36.472656 36.476563-54.664062 84.304687-54.59375 132.109375zm0 0" fill="#82888b" /><g fill="#313d40"><path d="m294.363281 96.855469c-3.019531-3.015625-7.910156-3.015625-10.925781 0l-7.285156 7.285156c-3.019532 3.015625-3.015625 7.910156 0 10.925781 1.507812 1.507813 3.484375 2.265625 5.460937 2.265625 1.976563 0 3.957031-.757812 5.464844-2.265625l7.285156-7.285156c3.019531-3.015625 3.015625-7.90625 0-10.925781zm0 0" /><path d="m358.46875 160.960938c-3.019531-3.015626-7.910156-3.015626-10.925781 0l-7.285157 7.285156c-3.019531 3.015625-3.019531 7.910156 0 10.925781 1.507813 1.507813 3.484376 2.265625 5.464844 2.265625 1.976563 0 3.953125-.753906 5.460938-2.261719l7.285156-7.285156c3.015625-3.019531 3.015625-7.910156 0-10.929687zm0 0" /><path d="m324.570312 144.933594c-3.75 1.324218-8.03125.324218-10.902343-2.546875-2.875-2.875-3.871094-7.152344-2.550781-10.90625 1.421874-4.023438-.6875-8.4375-4.710938-9.855469-4.023438-1.421875-8.4375.6875-9.859375 4.710938-3.292969 9.332031-.863281 19.917968 6.195313 26.976562 4.964843 4.964844 11.679687 7.640625 18.480468 7.640625 2.855469 0 5.730469-.472656 8.492188-1.449219 4.023437-1.417968 6.136718-5.832031 4.714844-9.855468-1.417969-4.023438-5.832032-6.132813-9.859376-4.714844zm0 0" /></g></svg>
                    <div className="logo">
                        <Link to='/' className="text-gray-800 text-2xl font-bold md:text-2xl hover:text-gray-700">NAIL BAR ME</Link>
                    </div>

                    <div className="flex md:hidden">
                        <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="md:flex items-center">
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <Link 
                        to='/login'
                        className="my-1 text-lm text-gray-700 p-1 hover:bg-white hover:bc-black font-medium hover:text-purple-300 md:mx-4 md:my-0">
                             - login - 
                             </Link>

                        <Link 
                        to='/'
                        className="my-1 text-lm text-gray-700 font-medium hover:text-purple-300 md:mx-4 md:my-0 p-1 hover:bg-white">
                             - nail bar menu - 
                             </Link>

                        <Link 
                        to='/form'
                        className="my-1 text-lm text-gray-700 font-medium hover:text-purple-300 md:mx-4 md:my-0 p-1 hover:bg-white"> 
                        - add products -  
                        </Link>
                        


                        <Link 
                        to='/userprofile'
                        className="my-1 text-lm text-grey-500 font-medium hover:text-purple-300 md:mx-4 md:my-0 p-1 hover:bg-white"> 
                        <i className="fas fa-user"></i>
                        
                        </Link>
                    </div>

                    <div className="flex justify-center md:block ">
                        <Link to='/checkout' className="relative text-gray-700 hover:text-white-200">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229
                                 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046
                                  15.8954 21 17 21C18.1046 21 19 20.1046
                                 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 
                                 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" 
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <span className="absolute top-0 left-0 rounded-full bg-purple-300 text-white p-1 text-xs">
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
        <div className="w-full h-10 pl-3 pr-2 bg-white border-2 border-grey-400 flex justify-between items-center relative">
        <input type="search" name="search" id="search" placeholder="Search"
            className="appearance-none w-full outline-none focus:outline-none active:outline-none" />
        <button type="submit" className="ml-1 outline-none focus:outline-none active:outline-none">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
        </button>
        
        

    </div>

    </>
    )
}

export default Menu