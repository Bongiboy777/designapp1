import React from 'react';
import Button from './Button/Button';

interface SearchSectionProps {}

const SearchSection: React.FC<SearchSectionProps> = () => {
  return (
    <section className="flex overflow-hidden flex-col items-center bg-indigo-50 z-[-1]">
      <div className="flex z-0 flex-col justify-center max-w-full rounded-xl min-h-[246px] shadow-[1px_2px_1px_rgba(0,0,0,0.25)] w-[1200px]">
        <div className="flex flex-col justify-center px-5 w-full rounded-xl bg-blue-950 bg-opacity-30 min-h-[246px] max-md:max-w-full">
          <div className="flex flex-col justify-center py-2.5 w-full text-white max-md:max-w-full">
            <h1 className="text-4xl font-bold uppercase max-md:max-w-full">
              FIND THE PERFECT RENTAL
            </h1>
            <p className="mt-2.5 text-lg font-light max-md:max-w-full">
              Discover the perfect property that suits your needs.
            </p>
          </div>
          <form className="flex flex-wrap gap-2.5 items-start mt-2.5 w-full text-lg font-light text-stone-500 max-md:max-w-full pb-4">
            <input
              type="text"
              placeholder="Enter Keywords or location"
              aria-label="Enter Keywords or location"
              className="gap-2.5 self-stretch px-2.5 py-2 bg-indigo-50 rounded-md min-h-[40px] min-w-[240px] w-[407px]"
            />
            <select
              aria-label="Property type"
              className="flex gap-10 justify-between items-center px-2.5 py-1 whitespace-nowrap bg-indigo-50 rounded-md min-h-[40px] w-[197px]"
            >
              <option value="">All</option>
            </select>
            <Button
              type="submit"
              className="gap-2.5 self-stretch px-5 py-2 font-extrabold text-center text-white uppercase whitespace-nowrap bg-amber-300 rounded-md min-h-[40px]"
            >
              Search
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;