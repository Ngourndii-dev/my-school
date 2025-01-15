import React, { useState } from 'react'
import data from '../data/review'
export default function Review() {
    const [filter,setFilter]=useState('');
    const searchText=(event)=>{
        setFilter(event.target.value);
    }
    let dataSearch=data.reviewData.filter(item=>{
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
                                <h5>{item.person}</h5>
                                <p>{item.comments}</p>
                                <span>{item.rating}</span>
                            </div>
                        </div>
                    </div>
                    )
                })}        
        </div>    
    </div>
  )
}
