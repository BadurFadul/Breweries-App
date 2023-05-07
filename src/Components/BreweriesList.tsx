import { BreweriesListInterface } from "../types/Breweries"
import { Link } from 'react-router-dom';

import fetchLoading from "./fetchLoading"

interface BreweriesListProps {
    data: BreweriesListInterface[];
  }

const BreweriesList = ({ data }: BreweriesListProps) => {
  return (
    <div>
      {data.map((brewery) => (
        <Link key={brewery.id} to={`/companies/${brewery.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div>
            {brewery.name}
          </div>
        </Link>
      ))}
    </div>
  )
}

const BreweriesListWithLoading = fetchLoading(BreweriesList, "https://api.openbrewerydb.org/v1/breweries")

export default BreweriesListWithLoading