import React, { useState } from 'react';
import styles from "../styles/about.module.css";
import data from '../data/event';
import { BiSearch } from 'react-icons/bi';

export default function Event() {
    const [filter, setFilter] = useState('');

    const handleSearch = (event) => {
        setFilter(event.target.value.toLowerCase());
    };

    const filteredData = data.eventData.filter(item => 
        Object.values(item).some(value => 
            value.toString().toLowerCase().includes(filter)
        )
    );

    return (
        <div className="container mx-auto p-4">
            <section>
                <div className="relative mx-auto max-w-md w-full mb-6">
                    <input
                        type="text"
                        name="search"
                        value={filter}
                        onChange={handleSearch}
                        placeholder="Search for anything..."
                        className="w-full placeholder:italic placeholder:text-gray-400 bg-white border border-gray-300 rounded-md py-2 px-4 shadow-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                        <BiSearch />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredData.map((item, index) => (
                        <div key={index} className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden">
                          <div className="w-1/2 h-36 overflow-hidden mx-auto">
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                            <div className="p-4 flex flex-col w-full">
                                <h1 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h1>
                                <button className="w-1/2 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                                    {item.mission}
                                </button>
                                <p className="text-teal-600 text-lg my-3">{item.location}</p>
                                <div className="flex justify-between items-center mt-auto w-full">
                                    <button className="px-4 py-2 bg-teal-400 text-white rounded-md hover:bg-teal-500">
                                        Like
                                    </button>
                                    <button className="px-4 py-2 border border-gray-300 rounded-md">
                                        {item.description}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
