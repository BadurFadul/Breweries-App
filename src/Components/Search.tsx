// components/SearchBar.tsx
import React from 'react';

interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

const Search: React.FC<SearchBarProps> = ({ setSearchQuery }) => {
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search companies by name..."
        onChange={handleSearchInputChange}
      />
    </div>
  );
};

export default Search;