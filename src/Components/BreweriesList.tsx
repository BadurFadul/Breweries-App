import React, { memo } from 'react';
import { BreweriesListInterface } from "../types/Breweries";
import { Link } from 'react-router-dom';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

interface BreweriesListProps {
  data: BreweriesListInterface[];
}

const BreweriesList: React.FC<BreweriesListProps> = memo(({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Street</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((brewery) => (
            <TableRow
              key={brewery.id}
              component={Link}
              to={`/companies/${brewery.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <TableCell component="th" scope="row">
                {brewery.name}
              </TableCell>
              <TableCell>{brewery.city}</TableCell>
              <TableCell>{brewery.state}</TableCell>
              <TableCell>{brewery.street}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
});

export default BreweriesList;