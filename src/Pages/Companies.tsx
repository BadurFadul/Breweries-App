import React, { useEffect, useState, memo } from 'react';
import axios from 'axios';
import { 
  Typography,
  Container,
  Box,
  Button,
  Grid

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
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <Typography variant="h5">Loading...</Typography>
      </Grid>
    );
  }
  if (error) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <Typography variant="h5">{error}</Typography>
      </Grid>
    );
  }

  return (
    <Box
      sx={{margin: '10px'}}
    >
      <Box
        sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
      >
        <Typography variant='h4'>Companies list</Typography>
        <Search setSearchQuery={setSearchQuery} />
      </Box>
      
      <BreweriesList data={filteredBreweries} isDisable={isDisable} loadMore={loadMore} />
    </Box>
  );
});

export default Companies;