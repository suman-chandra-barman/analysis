import * as React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { IncomeContext } from '../../context/IncomeProvider';
import IncomeCard from '../../sections/@dashboard/incomeData/IncomeCard';

export default function Transactions() {
  const [loading, setLoading] = React.useState(true);
  const { incomesData, expenseData } = React.useContext(IncomeContext);
  const combined = [...incomesData, ...expenseData];
  const newArray = [...combined];
  newArray.sort((a, b) => new Date(b.time) - new Date(a.time));
  console.log(newArray);
  return (
    <Container>
      <Grid item xs={6}>
        <Box sx={{ width: '100%' }}>
          <Typography variant="h4" textAlign="center">
            All Transactions
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {newArray.map((income) => (
            <IncomeCard key={income._id} income={income} loading={loading} setLoading={setLoading} path="incomes" />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
