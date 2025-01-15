import React, { useState } from 'react'
import data from '../data/responsible';

export default function Responsible() {
    const [filter,setFilter]=useState('');
    const searchText=(event)=>{
        setFilter(event.target.value);
    }
    let dataSearch=data.responsibleData.filter(item=>{
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
                                <h5>{item.fullname}</h5>
                                <p>{item.birthdate}</p>
                                <span>{item.role}</span>
                                <li>{item.sex}</li>
                            </div>
                        </div>
                    </div>
                    )
                })}
        </div>     
    </div>
  )
}
