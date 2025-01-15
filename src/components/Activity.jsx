import React, { useState } from 'react'
import data from '../data/activity'
export default function Activity() {
  const [filter,setFilter]=useState('');
  const searchText=(event)=>{
        setFilter(event.target.value);
  }
  let dataSearch=data.activityData.filter(item=>{
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
                                <h5>{item['activity-name']}</h5>
                                <p>{item['playing-number']}</p>
                                <span>{item.rent}</span>
                            </div>
                        </div>
                    </div>
                    )
                })}      
      </div>
    </div>
  )
}
