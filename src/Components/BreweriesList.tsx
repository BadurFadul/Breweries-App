import { BreweriesListInterface } from "../types/Breweries"

import fetchLoading from "./fetchLoading"

interface BreweriesListProps {
    data: BreweriesListInterface[];
  }

const BreweriesList = ({ data }: BreweriesListProps) => {
  return (
    <div>
      {data.map((item) => (
        <div>
            {item.name} {}
        </div>
      ))}
    </div>
  )
}

const BreweriesListWithLoading = fetchLoading(BreweriesList, "https://api.openbrewerydb.org/v1/breweries")

export default BreweriesListWithLoading