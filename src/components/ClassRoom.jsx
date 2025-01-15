import React, { useState } from 'react'
import data from '../data/classroom';

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
            <input type="text" value={filter} onChange={searchText.bind(this)}/>
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
