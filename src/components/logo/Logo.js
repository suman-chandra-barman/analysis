import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Link } from '@mui/material';

// ----------------------------------------------------------------------

const Logo = forwardRef(() => {
  const theme = useTheme();
  return (
    <Link to="/" component={RouterLink} sx={{ display: 'contents', fontSize: '30px', fontWeight: '800' }}>
      Analyzer
    </Link>
  );
});

export default Logo;
