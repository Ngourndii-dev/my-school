import { CommandLineIcon, FolderOpenIcon } from '@heroicons/react/24/outline';
import { RocketLaunchIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { AiFillBackward } from 'react-icons/ai';
import { RiBodyScanFill } from 'react-icons/ri';

const Sponsors = () => {
  return (
    <div className="flex row">
        <div className="flex justify-center items-center w-20 h-10 grid-cols-5 rounded-full p-4">
            {[1].map((index) => (
                <div key={index} className="w-12 h-12">
                <RocketLaunchIcon />
                <AiFillBackward />
                <RiBodyScanFill />
                <FolderOpenIcon />
                <CommandLineIcon/>
        </div>
      ))}
        </div>
        <div className="flex justify-center items-center w-20 h-10 grid-cols-5 rounded-full p-4">
            {[1].map((index) => (
                <div key={index} className="w-12 h-12">
                <RocketLaunchIcon />
                <AiFillBackward />
                <RiBodyScanFill />
                <FolderOpenIcon />
                <CommandLineIcon/>
        </div>
      ))}
        </div>
    </div>
  );
};

export default Sponsors;