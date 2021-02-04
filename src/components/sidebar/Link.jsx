import React, { useState } from 'react';

export default function Link(props){
    const [isActive, setActive] = useState(false)
    return(
        <a onClick={()=>{setActive(true)}} className={`${isActive ? 'bg-gray-100 hover:bg-gray-200': 'hover:bg-gray-100'} flex flex-row items-center h-12 px-4 cursor-pointer rounded-lg text-gray-600`}><span class="text-gray-600">
            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {props.icon}
            </svg>
        </span>
        <span>{props.title}</span>
        </a>
    )
}