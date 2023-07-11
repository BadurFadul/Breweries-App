import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { BreweriesListInterface } from "../types/Breweries"
import React, { useEffect, useState, memo } from 'react'

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

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

  const mapStyles = {        
    height: "50vh",
    width: "100%"};
   
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }

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
    <Grid
    container
    justifyContent="center"
    alignItems="center"
    style={{ minHeight: '100vh' }}
  >
    <Grid item xs={12} sm={12} md={8} lg={8}>
      <Card variant="outlined" sx={{ height: '50vh' }}>
        <CardContent
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <Typography variant="h4" component="div">
            {company?.name}
          </Typography>
          <Typography variant="body1">
            <strong>Address:</strong> {company?.street}, {company?.city}, {company?.state}, {company?.country}
          </Typography>
          <Typography variant="body1">
            <strong>Type:</strong> {company?.brewery_type}
          </Typography>
          <Typography variant="body1">
            <strong>Phone:</strong> {company?.phone}
          </Typography>
          <Typography variant="body1">
            <strong>Website:</strong>{' '}
              {company?.website_url}
          </Typography>
          <iframe
                className='mapsFrame'
                title='mapsEmbed'
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBPg4nSA2QW6hVAevXXhmwXfE8BIi_BQOM
                    &q=${company?.name}+${company?.state}`}>

            </iframe>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
  )
});

export default SingleCompany;