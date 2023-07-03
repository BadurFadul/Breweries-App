// components/SearchBar.tsx
import React from 'react';
import { Box, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

const Search: React.FC<SearchBarProps> = ({ setSearchQuery }) => {
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Box 
      sx={{marginBottom: '2rem',}}
    >
        <TextField label="Search" variant="standard" 
          onChange={handleSearchInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
    </Box>
  );
};

export default Search;