import React, { FC } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface Props {
  text: string;
  color: 'primary' | 'success' | 'warning' | 'info' | 'default';
}

const Pill: FC<Props> = (props) => {
  const { text, color } = props;

  return (
    <Stack direction='row' spacing={1}>
      <Chip label={text} color={color} />
    </Stack>
  );
};

export default Pill;
