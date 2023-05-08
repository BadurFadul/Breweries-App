import axios from 'axios'
import { useParams } from 'react-router-dom'
import { BreweriesListInterface } from "../types/Breweries"
import React, { useEffect, useState, memo } from 'react'

import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
} from '@mui/material';

const SingleCompany: React.FC = memo(() => {
  const {id} = useParams()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState("")
  const [company, setcompany] = useState<BreweriesListInterface | null>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`https://api.openbrewerydb.org/v1/breweries/${id}`);
        setcompany(result.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="right"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={12} sm={8} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h4" component="div" gutterBottom>
              {company?.name}
            </Typography>
            <Typography variant="body1">
              <Box fontWeight="fontWeightBold" component="span">Address: </Box>
              {company?.street}, {company?.city}, {company?.state}, {company?.country}
            </Typography>
            <Typography variant="body1">
              <Box fontWeight="fontWeightBold" component="span">Type: </Box>
              {company?.brewery_type}
            </Typography>
            <Typography variant="body1">
              <Box fontWeight="fontWeightBold" component="span">Phone: </Box>
              {company?.phone}
            </Typography>
            <Typography variant="body1">
              <Box fontWeight="fontWeightBold" component="span">Website: </Box>
              <a href={company?.website_url} target="_blank" rel="noreferrer">{company?.website_url}</a>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
});

export default SingleCompany;