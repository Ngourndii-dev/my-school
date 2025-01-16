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
            <label>Search</label>
            <div className="relative mx-auto max-w-md w-full">
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Rechercher..."
              value={filter} onChange={searchText.bind(this)}
            />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
              <BiSearch />
            </button>
          </div>
        </div>
        <div>
            {dataSearch.map((item,index)=>{
                    return (
                    <div key={item.id}>
                        <div>
                            <img src="" alt="" />
                            <div>
                                <h5>{item.degree}</h5>
                                <p>{item.description}</p>
                                <span>{item.averagepass}</span>
                                <img src={item.image} alt="" />
                                <button>Inscription</button>
                            </div>
                        </div>
                    </div>
                    )
        })}
    </div>
    </div>
  )
}
