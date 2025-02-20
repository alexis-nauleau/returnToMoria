"use client";

import { ChangeEvent } from "react";

interface SearchBarProps {
  types: string[];
  selectedType: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SearchBar = ({ types, selectedType, onChange }: SearchBarProps) => {
  return (
    <div className="w-full bg-gray-900 p-6  shadow-lg mb-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center gap-4">
        <label htmlFor="filter" className="text-yellow-700 font-medium text-lg">
          Filtrer par type:
        </label>
        <select
          id="filter"
          value={selectedType}
          onChange={onChange}
          className="w-full sm:w-auto bg-gray-700 text-yellow-700 px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
        >
          <option value="">Tous</option>
          {types.map((type) => (
            <option key={type} value={type} className="bg-gray-700">
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchBar;