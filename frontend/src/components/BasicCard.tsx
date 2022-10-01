import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Pill from './Pill';
import StarRateIcon from '@mui/icons-material/StarRate';

interface Props {
  username: string;
  discription: string;
  place: string;
  rate: number;
}

const BasicCard: FC<Props> = (props) => {
  const { username, discription, place, rate } = props;

  const switchColor = (place: string) => {
    switch (place) {
      case 'Chinatown':
        return 'primary';

      case 'Brentwood':
        return 'success';

      case 'Production Way':
        return 'info';

      case 'Richmond':
        return 'warning';

      default:
        return 'default';
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='user icon'>
            R
          </Avatar>
        }
        title={username}
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {discription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <Pill text={place} color={switchColor(place)} />

        <IconButton aria-label='review rate'>
          <StarRateIcon />
          {rate}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default BasicCard;
