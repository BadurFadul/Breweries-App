import React, { useEffect, useState, memo } from 'react';
import axios from 'axios';
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
    <div>
      <h1>Companies list</h1>
      <Search setSearchQuery={setSearchQuery} />
      <BreweriesList data={filteredBreweries} />
    </div>
  );
});

export default Companies;