import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { Grid, Container, Typography } from '@mui/material';
// sections
import {
  AppCurrentVisits,
  AppWebsiteVisits,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import { IncomeContext } from '../context/IncomeProvider';
import { totalIncome } from '../components/income-data/TotalIncome';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const { incomesData, expenseData } = useContext(IncomeContext);
  const theme = useTheme();

  // variables
  let totalFoods = 0;
  let totalHomeRent = 0;
  let totalGrocery = 0;
  let totalShopping = 0;
  let totalEducation = 0;
  let totalOthers = 0;
  let totalPocketMoney = 0;

  // total calculation
  const totalIncomeAmount = totalIncome(incomesData);
  const totalExpenseAmount = totalIncome(expenseData);
  const saving = totalIncomeAmount - totalExpenseAmount;

  console.log(expenseData);

  // category expenses
  expenseData.forEach((expense) => {
    if (expense.category === 'food') {
      totalFoods += +expense.amount;
    } else if (expense.category === 'home') {
      totalHomeRent += +expense.amount;
    } else if (expense.category === 'education') {
      totalEducation += +expense.amount;
    } else if (expense.category === 'shopping') {
      totalShopping += +expense.amount;
    } else if (expense.category === 'grocery') {
      totalGrocery += +expense.amount;
    } else if (expense.category === 'pocket money') {
      totalPocketMoney += +expense.amount;
    } else {
      totalOthers += +expense.amount;
    }
  });

  return (
    <>
      <Helmet>
        <title> Dashboard | Analyzer </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Good Morning, Sam Barman
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4}>
            <AppWidgetSummary title="Total Balance" total={saving} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary
              title="Total Income"
              total={totalIncomeAmount}
              color="info"
              icon={'ant-design:apple-filled'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary
              title="Total Expenses"
              total={totalExpenseAmount}
              color="error"
              icon={'ant-design:windows-filled'}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Cost Analyze"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
                '12/01/2023',
              ]}
              chartData={[
                {
                  name: 'Saving',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Income',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Cost',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Cost Analysis by category"
              chartData={[
                { label: 'Food', value: totalFoods },
                { label: 'Home Rent', value: totalHomeRent },
                { label: 'Education', value: totalEducation },
                { label: 'Pocket Money', value: totalPocketMoney },
                { label: 'Shopping', value: totalShopping },
                { label: 'Grocery', value: totalGrocery },
                { label: 'Others', value: totalOthers },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
