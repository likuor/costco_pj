import React, { FC } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface Props {
  text: string;
  onClick?: () => {};
}

const BasicButton: FC<Props> = (props) => {
  const { text } = props;

  return (
    <Stack spacing={2} direction='row'>
      <Button variant='contained'>{text}</Button>
    </Stack>
  );
};

export default BasicButton;
