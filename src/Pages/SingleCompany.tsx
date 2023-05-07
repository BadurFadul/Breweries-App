import axios from 'axios'
import { useParams } from 'react-router-dom'

import { BreweriesListInterface } from "../types/Breweries"
import React, { useEffect, useState } from 'react'



const SingleCompany = () => {
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
    <div>
        {company?.name}
    </div>
  )
}

export default SingleCompany