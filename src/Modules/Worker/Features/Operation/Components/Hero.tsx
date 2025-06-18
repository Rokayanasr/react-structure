// import React from 'react';
import Select from '@/components/form/Select';

type Option = {
  label: string;
  value: string;
};

function Hero() {
  const options: Option[] = ['Latest', 'Popular', 'Remote', 'Full-time'].map((item) => ({
    label: item,
    value: item.toLowerCase(),
  }));

  return (
    <div >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">Job bei</h1>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:w-1/2 ">
          <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg
              className="fill-gray-500 dark:fill-gray-400"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Suche..."
            className="h-11 w-3/4 rounded-lg border border-gray-300 bg-[#EAECF5] py-2.5 pl-12 pr-4 text-sm text-gray-800 shadow-sm placeholder:text-gray-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>

        <div className="w-full md:w-1/4 flex items-center gap-4">
        <p className='text-nowrap'>Sortieren nach:</p>
            <div className="bg-[#EAECF5] w-full">
           <Select
             options={options}
             defaultValue=""
             placeholder="Sort by"
             className="w-full"
             onChange={(selected) => {
               console.log('Selected option:', selected);
             }}
           />
       </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
