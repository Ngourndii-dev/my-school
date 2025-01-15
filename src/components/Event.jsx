import React, { useState } from 'react';
import styles from "../styles/about.module.css";

import data from '../data/event';
export default function Event() {
    const [filter,setFilter]=useState('');
    const searchText=(event)=>{
        setFilter(event.target.value);
    }
    let dataSearch=data.eventData.filter(item=>{
        return Object.keys(item).some(key=>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    })
  return (
    <div>
        <section>
            <div>
                <div>
                    <label class="relative block" className={styles.search}>
                        <span class="sr-only">Search</span>
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                        </span>
                        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"  value={filter} onChange={searchText.bind(this)}/>
                    </label>
                </div>
                {dataSearch.map((item,index)=>{
                    return (
                    <div class="flex flex-row">
                        <div class="flex p-6 font-mono">
                            <div class="flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400">
                                <img src="/retro-shoe.jpg" alt="" class="absolute z-10 inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
                            </div>
                            <form class="flex-auto pl-6">
                                <div class="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
                                <h1 class="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
                                    {item.title}
                                </h1>
                                <div class="relative text-lg text-white">
                                    {item.mission}
                                </div>
                                <div class="relative uppercase text-teal-400 ml-3">
                                    {item.location}
                                </div>
                                </div>
                                <div class="flex items-baseline my-6">
                                <div class="space-x-3 flex text-sm font-medium">
                                    <label>
                                    <input class="sr-only peer" name="size" type="radio" value="xs" checked />
                                    <div class="relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
                                        {item.view}
                                    </div>
                                    </label>
                                    <label>
                                    <input class="sr-only peer" name="size" type="radio" value="xl" />
                                    <div class="relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
                                        {item.react}
                                    </div>
                                    </label>
                                </div>
                                </div>
                                <div class="flex space-x-2 mb-4 text-sm font-medium">
                                <div class="flex space-x-4">
                                    <button class="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black" type="submit">
                                    Like
                                    </button>
                                    <button class="px-6 h-12 uppercase font-semibold tracking-wider border border-slate-200 text-slate-900" type="button">
                                    {item.description} 
                                    </button>
                                </div>
                                <button class="flex-none flex items-center justify-center w-12 h-12 text-black" type="button" aria-label="Like">
                                    <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                    </svg>
                                </button>
                                </div>
                                <p class="text-xs leading-6 text-slate-500">
                                Habituer les eleves depuis le secondaire à faire du 
                                </p>
                            </form>
                        </div>                    
                    </div>               
                    )
                })}
            </div>
        </section>
    </div>
  )
}
