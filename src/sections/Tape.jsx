import React, { Fragment } from 'react';
import { words } from '../constants';
import { FaAngleLeft } from 'react-icons/fa';

const Tape = () => {
  return (
    <section className="overflow-x-clip py-20 lg:py-2">
      <div className="-mx-1 -rotate-3 bg-gradient-to-r from-teal-300 to-blue-400">
        <div className="flex flex-none gap-4 py-3 mask-gradient-right">
          {[...new Array(2)].fill(0).map((value, index) => (
            <Fragment key={index}>
              {words.map((word, wordIndex) => (
                <div
                  className="inline-flex items-center gap-4"
                  key={`${index}-${wordIndex}`}
                >
                  <span className='text-sm font-extrabold uppercase text-gray-800 '>{word}</span>
                  <FaAngleLeft className='size-8 -rotate-12 ' />
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tape;
