import React, { memo, useState } from 'react';
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
  TablePagination,
  Button
} from '@mui/material';

interface BreweriesListProps {
  data: BreweriesListInterface[];
  isDisable: boolean;
  loadMore: () => void;
}

const BreweriesList = memo(({ data, isDisable, loadMore }: BreweriesListProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(30);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const slicedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div>
      
      <TableContainer component={Paper}>
        <Table
          size='medium'
        >
          <TableHead
            sx={{background: 'lightgray'}}
          >
            <TableRow>
              <TableCell sx={{fontWeight: 'bold'}}>Name</TableCell>
              <TableCell sx={{fontWeight: 'bold'}}>City</TableCell>
              <TableCell sx={{fontWeight: 'bold'}}>State</TableCell>
              <TableCell sx={{fontWeight: 'bold'}}>Street</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slicedData.map((brewery) => (
              <><TableRow
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
              </TableRow></>
            ))}
            <Button disabled={isDisable} onClick={loadMore}>Load more</Button>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[25, 35, 50]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
});

export default BreweriesList;