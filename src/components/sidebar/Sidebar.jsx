import React, { useState } from 'react';
import { Navigation } from "react-minimal-side-navigation";
import {useHistory, useLocation} from "react-router-dom"
import {IoFastFoodOutline, IoRestaurantOutline} from 'react-icons/io5'
import {HiOutlineTemplate} from 'react-icons/hi';
import {GiDutchBike} from 'react-icons/gi';
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi'

import logo from '../../images/logord.svg';


export const Sidebar=()=>{
    const history = useHistory();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return(
        <React.Fragment>
            <aside className={(isSidebarOpen) ? 'sm:w-3/12 md:w-3/12 xl:w-3/12 2xl:w-2/12 bg-white rounded p-3 shadow-lg m-2' : 'm-2 rounded bg-white dark:bg-gray-800 w-20 shadow-lg flex flex-col'}>
                <div className={(isSidebarOpen) ? "flex relative items-center space-x-4 p-2 mb-5" : "flex flex-col"}>
                    <div className={(isSidebarOpen) ? "absolute items-center inset-y-0 right-0 " : "mt-2 mb-2"}>
                        {(isSidebarOpen) ? <div className="cursor-pointer text-lg" onClick={()=>{setIsSidebarOpen(false)}}><BiLeftArrow/></div>:<div className="cursor-pointer flex justify-center text-lg mt-2" onClick={()=>{setIsSidebarOpen(true)}}><div className="h-auto"><BiRightArrow/></div></div>}
                    </div>
                    <img src={logo} alt="logo" className={(isSidebarOpen) ? "h-12 rounded-full" : 'mt-2 mb-2'}/>
                    {(isSidebarOpen) ?
                    <div className="relative">
                        <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">San Gonzalo Good Food</h4>
                        <span class="text-sm tracking-wide flex items-center space-x-1">
                            <svg class="h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span class="text-gray-600">EmSoft POS 0.1.0</span>
                        </span>
                    </div>
                    : ''}
                </div>
                <Navigation activeItemId={location.pathname} onSelect={({itemId})=>{history.push(itemId)}} items={
                    [
                        {
                            title: isSidebarOpen ? "Dashboard" : "",
                            itemId: "/dashboard",
                            elemBefore: ()=> <HiOutlineTemplate/>
                        },
                        {
                            title: isSidebarOpen ? "Pedidos" : "",
                            itemId: "/pedidos",
                            elemBefore: ()=> <IoFastFoodOutline/>
                        },
                        {
                            title: isSidebarOpen ? "Mesas" : "",
                            itemId: "/mesas",
                            elemBefore: ()=> <IoRestaurantOutline/>
                        },
                        {
                            title: isSidebarOpen ? "Delivery" : "",
                            itemId: "/delivery",
                            elemBefore: ()=> <GiDutchBike/>
                        },
                    ]
                }/>
            </aside>
        </React.Fragment>
    )
}