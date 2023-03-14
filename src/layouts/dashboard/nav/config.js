// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'View Transactions',
    path: '/dashboard/transactions',
    icon: icon('transaction'),
  },
  {
    title: 'Incomes',
    path: '/dashboard/incomes',
    icon: icon('income'),
  },
  {
    title: 'expenses',
    path: '/dashboard/expenses',
    icon: icon('expenses'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
];

export default navConfig;
