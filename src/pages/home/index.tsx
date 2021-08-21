import { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import ICountry from 'interfaces/country';
import ListCountry from 'components/ListCountry';
import ListBank from 'components/ListBank';

const useStyles = makeStyles((theme: Theme) => ({
  headerListBank: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '30px 0 15px 0',
  },
  labelName: {
    marginLeft: 16,
    color: '#728fcc',
    fontWeight: 500,
  },
  labelStatus: {
    marginRight: 130,
    color: '#aaabb0',
    fontWeight: 500,
    [theme.breakpoints.down('xs')]: {
      marginRight: 75,
    },
  },
}));

function HomePage() {
  const [selectedCountry, setCountry] = useState<ICountry | undefined>(
    undefined
  );
  const classes = useStyles();

  const handleChooseCountry = (country: ICountry) => {
    if (country.isComing) {
      setCountry(undefined);
    } else {
      setCountry(country);
    }
  };

  return (
    <div>
      <h1>Country selection</h1>
      <p>Please select your registered country or region:</p>
      <ListCountry
        handleChooseCountry={handleChooseCountry}
        selectedCountry={selectedCountry}
      />
      <div className={classes.headerListBank}>
        <span className={classes.labelName}>Bank name</span>
        <span className={classes.labelStatus}>Status</span>
      </div>
      <ListBank selectedCountry={selectedCountry} />
    </div>
  );
}

export default HomePage;
