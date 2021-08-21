import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActionArea,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

import useStyles from './styles';
import ICountry from 'interfaces/country';

interface IProps {
  country: ICountry;
  isSelected?: boolean;
}

function BoxCountry(props: IProps) {
  const { country, isSelected } = props;
  const { name, isComing, thumbnailUrl } = country;
  const classes = useStyles({ isComing: country.isComing, isSelected });

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.backgroundComingSoon}>
        <CardMedia className={classes.thumbCountry} image={thumbnailUrl} />
        <CardContent>
          <Typography align="center" gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      {isSelected && (
        <div className={classes.stick}>
          <CheckIcon />
        </div>
      )}
      {isComing && <div className={classes.comingSoon}>Coming soon...</div>}
    </Card>
  );
}

export default BoxCountry;
