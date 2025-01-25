import React, { useState } from 'react'
import data from '../data/classroom';
import { BiSearch } from 'react-icons/bi';

export default function ClassRoom() {
    const [filter,setFilter]=useState('');
    const searchText=(event)=>{
        setFilter(event.target.value);
    }
    let dataSearch=data.classRoomData.filter(item=>{
        return Object.keys(item).some(key=>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    })
  return (
    <div>
        <div>
            <div className="relative mx-auto max-w-md w-full">
            <input
                                className="placeholder:italic placeholder:text-gray-400 bg-white border border-gray-300 rounded-md py-2 px-4 shadow-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base"
                                placeholder="Search ..."
                                type="text"
                                name="search"
                                value={filter} onChange={searchText.bind(this)}
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
              <BiSearch />
            </button>
          </div>
        </div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Classroom</h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {dataSearch.map((index) => (
                <a key={index.id} href={index.description} className="group">
                  <img
                    alt={index.description}
                    src={index.image}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                  />
                  <h3 className="mt-4 text-sm text-gray-700">{index.averagepass}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{index.degree}</p>
                  <button
                      type="submit"
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
                    >
                    Subscribe
                  </button>
                </a>
              ))}
            </div>
        </div> 
    </div>
  )
}
