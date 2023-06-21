import React, { useEffect, useState, memo } from 'react';
import axios from 'axios';
import { 
  Typography,
  Container,
  Box

} from '@mui/material';

import { BreweriesListInterface } from '../types/Breweries';
import BreweriesList from '../Components/BreweriesList';
import Search from '../Components/Search';


const Companies: React.FC = memo(() => {
  const [searchQuery, setSearchQuery] = useState('');
  const [breweries, setBreweries] = useState<BreweriesListInterface[]>([]);
  const [filteredBreweries, setFilteredBreweries] = useState<BreweriesListInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('https://api.openbrewerydb.org/v1/breweries');
        setBreweries(result.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredBreweries(
      breweries.filter((brewery) =>
        brewery.name.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    );
  }, [searchQuery, breweries]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Box
      sx={{margin: '10px'}}
    >
      <Typography variant='h4'>Companies list</Typography>
      <Search setSearchQuery={setSearchQuery} />
      <BreweriesList data={filteredBreweries} />
    </Box>
  );
});

export default Companies;