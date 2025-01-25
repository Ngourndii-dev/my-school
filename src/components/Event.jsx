import React, { useState } from 'react';
import styles from "../styles/about.module.css";
import data from '../data/event';
import { BiSearch } from 'react-icons/bi';

export default function Event() {
    const [filter, setFilter] = useState('');
    const searchText = (event) => {
        setFilter(event.target.value);
    };

    const dataSearch = data.eventData.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        );
    });

    return (
        <div className="container mx-auto p-4">
            <section>
                <div>
                <div className="relative mx-auto max-w-md w-full">
                    <input
                                    className="placeholder:italic placeholder:text-gray-400 bg-white border border-gray-300 rounded-md py-2 px-4 shadow-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base"
                                    placeholder="Search for anything..."
                                    type="text"
                                    name="search"
                                    value={filter}
                                    onChange={searchText}
                            />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                    <BiSearch />
                    </button>
                    <br /><br />
                </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {dataSearch.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden"
                        >
                            <div className="relative w-full h-48">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4 flex flex-col">
                                <h1 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h1>
                                <button
                                    type="submit"
                                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
                                >
                                {item.mission}
                                </button>
                                <p className="text-teal-00 text-lg mb-3">{item.location}</p>
                                <div className="flex justify-between items-center mt-auto">
                                    <button className="px-2 py-1 bg-teal-400 text-white rounded-md">
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
