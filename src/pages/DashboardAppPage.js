import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { Grid, Container, Typography } from '@mui/material';
// sections
import { AppCurrentVisits, AppWebsiteVisits, AppWidgetSummary, AppConversionRates } from '../sections/@dashboard/app';
import { IncomeContext } from '../context/IncomeProvider';
import { totalIncome } from '../components/income-data/TotalIncome';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const { incomesData, expenseData } = useContext(IncomeContext);
  const theme = useTheme();

  // expenses variables
  let totalFoods = 0;
  let totalHomeRent = 0;
  let totalGrocery = 0;
  let totalShopping = 0;
  let totalEducation = 0;
  let totalOthers = 0;
  let totalPocketMoney = 0;

  // incomes variables
  let totalSalary = 0;
  let totalInvestments = 0;
  let totalFreelancing = 0;
  let totalBusiness = 0;
  let totalYoutube = 0;
  let totalFacebook = 0;
  let totalIncomeOthers = 0;
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
  // category incomes
  incomesData.forEach((income) => {
    if (income.category === 'salary') {
      totalSalary += +income.amount;
    } else if (income.category === 'investments') {
      totalInvestments += +income.amount;
    } else if (income.category === 'freelancing') {
      totalFreelancing += +income.amount;
    } else if (income.category === 'business') {
      totalBusiness += +income.amount;
    } else if (income.category === 'youtube') {
      totalYoutube += +income.amount;
    } else if (income.category === 'facebook') {
      totalFacebook += +income.amount;
    } else {
      totalIncomeOthers += +income.amount;
    }
  });

  return (
    <>
      <Helmet>
        <title> Dashboard | Analyzer </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Sam Barman
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
              title="Analyze"
              subheader="(+43%) than last year"
              chartLabels={[
                '05/01/2022',
                '06/01/2022',
                '07/01/2022',
                '08/01/2022',
                '09/01/2022',
                '10/01/2022',
                '11/01/2022',
                '12/01/2022',
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
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
              title="Total transactions"
              chartData={[
                { label: 'Total Balance', value: saving },
                { label: 'Total Income', value: totalIncomeAmount },
                { label: 'Total Expense', value: totalExpenseAmount },
              ]}
              chartColors={[theme.palette.primary.main, theme.palette.warning.main, theme.palette.error.main]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Lat one year Incomes"
              subheader="(+10%) than last year"
              chartData={[
                { label: 'Salary', value: totalSalary },
                { label: 'Investments', value: totalInvestments },
                { label: 'Freelancing', value: totalFreelancing },
                { label: 'Business', value: totalBusiness },
                { label: 'Youtube', value: totalYoutube },
                { label: 'Facebook', value: totalFacebook },
                { label: 'Others', value: totalOthers },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Incomes Analysis by category"
              chartData={[
                { label: 'salary', value: totalSalary },
                { label: 'investments', value: totalInvestments },
                { label: 'freelancing', value: totalFreelancing },
                { label: 'business', value: totalBusiness },
                { label: 'youtube', value: totalYoutube },
                { label: 'facebook', value: totalFacebook },
                { label: 'others', value: totalIncomeOthers },
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
              title="Lat one year expenses"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Foods', value: totalFoods },
                { label: 'Home Rent', value: totalHomeRent },
                { label: 'Grocery', value: totalGrocery },
                { label: 'Shopping', value: totalShopping },
                { label: 'Education', value: totalEducation },
                { label: 'Pocket Money', value: totalPocketMoney },
                { label: 'Others', value: totalOthers },
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
        </Grid>
      </Container>
    </>
  );
}
