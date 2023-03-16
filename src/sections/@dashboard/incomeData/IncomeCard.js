import { Avatar, Box, Grid, IconButton, ListItem, ListItemAvatar, Typography } from '@mui/material';
import React from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteIncomeData } from './deleteData';

function IncomeCard({ income, loading, setLoading, path }) {
  const { _id, source, date, amount, reference, category, time } = income;

  let todayDate;
  if (date) {
    todayDate = new Date(date).toISOString().substring(0, 10);
  }

  // time
  const dateObject = new Date(time);
  const hours = String(dateObject.getHours()).padStart(2, '0');
  const minutes = String(dateObject.getMinutes()).padStart(2, '0');
  const seconds = String(dateObject.getSeconds()).padStart(2, '0');
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  return (
    <Grid item xs={12}>
      <ListItem sx={{ boxShadow: '1' }}>
        <ListItemAvatar>
          <Avatar>
            <AttachMoneyIcon />
          </Avatar>
        </ListItemAvatar>

        <Box>
          <Typography variant="h6" sx={{ width: '100%' }}>
            {source}
          </Typography>
          <Grid container gap={2}>
            <Grid item>
              <Typography>${amount}</Typography>
            </Grid>
            <Grid item>
              <Typography>{todayDate}</Typography>
            </Grid>
            <Grid item>
              <Typography>Time:{formattedTime}</Typography>
            </Grid>
          </Grid>

          <Typography>{reference}</Typography>
        </Box>
        <Box marginLeft="auto">
          <IconButton
            onClick={() => deleteIncomeData(_id, loading, setLoading, path)}
            aria-label="delete"
            size="large"
            sx={{ color: '#ff5252' }}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </ListItem>
    </Grid>
  );
}

export default IncomeCard;
