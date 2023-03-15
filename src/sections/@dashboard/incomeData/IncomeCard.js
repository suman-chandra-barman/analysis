import { Avatar, Box, Grid, IconButton, ListItem, ListItemAvatar, Typography } from '@mui/material';
import React from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DeleteIcon from '@mui/icons-material/Delete';

function IncomeCard({ income }) {
  const { source, date, amount, reference, category } = income;

  const todayDate = new Date(date).toISOString().slice(0, 10);
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
          </Grid>

          <Typography>{reference}</Typography>
        </Box>
        <Box marginLeft="auto">
          <IconButton aria-label="delete" size="large" sx={{ color: '#ff5252' }}>
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </ListItem>
    </Grid>
  );
}

export default IncomeCard;
