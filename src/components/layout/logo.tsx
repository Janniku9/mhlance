import { Box } from '@mui/material';
import Image from 'next/image';

const Logo = () => {
  return (
    <Box sx={{ height: '70%', position: 'relative', aspectRatio: '146/52' }}>
      <Image alt="j9mh logo" src="/logo/full_logo.png" layout="fill" objectFit="contain" />
    </Box>
  );
};

export default Logo;
