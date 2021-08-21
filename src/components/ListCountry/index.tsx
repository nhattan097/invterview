import Skeleton from '@material-ui/lab/Skeleton';
import { Grid } from '@material-ui/core';
import { useQuery } from 'react-query';

import BoxCountry from 'components/BoxCountry';
import ICountry from 'interfaces/country';
import useStyles from './styles';
import Empty from 'components/shared/Empty';
import { countryApi } from 'api';

interface IProps {
  handleChooseCountry(country: ICountry): void;
  selectedCountry?: ICountry;
}

function ListCountry(props: IProps) {
  const classes = useStyles();
  const { handleChooseCountry, selectedCountry } = props;

  const { isLoading, error, data } = useQuery(
    'countries',
    countryApi.getCountries
  );

  return !error ? (
    <Grid container spacing={4}>
      {isLoading
        ? Array(6)
            .fill(0)
            .map((item, index) => (
              <Grid key={index} container item xs={12} sm={6} lg={4}>
                <Skeleton
                  className={classes.skeleton}
                  animation="wave"
                  variant="rect"
                  width={470}
                  height={250}
                />
              </Grid>
            ))
        : data?.map((country: ICountry) => (
            <Grid
              onClick={() => handleChooseCountry(country)}
              key={country.id}
              container
              item
              xs={12}
              sm={6}
              lg={4}
            >
              <BoxCountry
                isSelected={
                  country.isComing ? false : selectedCountry?.id === country.id
                }
                country={country}
              />
            </Grid>
          ))}
    </Grid>
  ) : (
    <Empty />
  );
}

export default ListCountry;
