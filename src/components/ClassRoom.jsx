import React, { useState } from 'react';
import data from '../data/classroom';

const ClassRoom = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [classInfo, setClassInfo] = useState(null);

  const handleClassChange = (event) => {
    const selected = data.classroomData.find(cls => cls.id === event.target.value);
    setSelectedClass(event.target.value);
    setClassInfo(selected ? selected.info : null);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-5 text-center">Registration form</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="class">
            select a class
          </label>
          <select
            id="class"
            value={selectedClass}
            onChange={handleClassChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">select a class</option>
            {data.classroomData.map(cls => (
              <option key={cls.id} value={cls.id}>{cls.name} ({cls.category})</option>
            ))}
          </select>
        </div>

        {classInfo && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Informations sur la classe</label>
            <div className="p-4 bg-gray-100 rounded">
              {classInfo}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClassRoom;