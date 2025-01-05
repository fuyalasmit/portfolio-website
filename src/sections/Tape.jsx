import React, { Fragment } from 'react';
import { words } from '../constants';
import { FaAngleLeft } from 'react-icons/fa';

const Tape = () => {
  return (
    <section className="overflow-x-clip py-20 lg:py-2">
      <div className="-mx-1 -rotate-3 bg-gradient-to-r from-emerald-400 to-cyan-600">
        <div className="flex mask-gradient-right">
          <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left">
            {[...new Array(2)].fill(0).map((value, index) => (
              <Fragment key={index}>
                {words.map((word, wordIndex) => (
                  <div
                    className="inline-flex items-center gap-4"
                    key={`${index}-${wordIndex}`}
                  >
                    <span className="text-sm font-extrabold uppercase text-gray-800 ">
                      {word}
                    </span>
                    <FaAngleLeft className="size-8 -rotate-12 " />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tape;
