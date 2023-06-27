import React, { useEffect, useState, memo } from 'react';
import axios from 'axios';
import { 
  Typography,
  Container,
  Box,
  Button

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
  const [page, setPage] = useState(1);
  const [isDisable, setDiable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`https://api.openbrewerydb.org/v1/breweries?page=${page}`);
        setLoading(false);
        if(!result.data.length){
          setDiable(true);
        }
        setBreweries([...breweries, ...result.data]);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  const loadMore = () => {
    setPage(page +1);
  }

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
      <Button disabled={isDisable} onClick={loadMore}>load more</Button>
    </Box>
  );
});

export default Companies;