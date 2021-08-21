import { makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

interface IProps {
  isActive: boolean;
}

export const useStyles = makeStyles((theme: Theme) => ({
  status: ({ isActive }: IProps) =>
    isActive
      ? {
          color: 'white',
          background: '#68bf56',
          textAlign: 'center',
          padding: '8px 0',
          borderRadius: 4,
          width: 100,
          marginRight: 50,
          alignSelf: 'center',
          [theme.breakpoints.down('xs')]: {
            height: 32,
            marginRight: 10,
            padding: '4px 0',
            maxWidth: 70,
          },
        }
      : {
          color: 'white',
          background: '#e0b33c',
          textAlign: 'center',
          padding: '8px 0',
          borderRadius: 4,
          width: 100,
          marginRight: 50,
          alignSelf: 'center',
          [theme.breakpoints.down('xs')]: {
            height: 32,
            marginRight: 10,
            padding: '4px 0',
            maxWidth: 70,
          },
        },
  name: {
    flex: '1 1',
    alignSelf: 'center',
    marginRight: 100,
    [theme.breakpoints.down('xs')]: {
      marginRight: 20,
    },
  },
  phone: {
    textDecoration: 'underline',
    color: 'blue',
  },
  space: {
    height: 8,
    backgroundColor: '#F2F3FA',
  },
}));

export const Accordion = withStyles({
  root: {
    borderRadius: 8,
    overflow: 'hidden',
    boxShadow: 'none',
    marginBottom: 8,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: '8px 0',
    },
  },
  expanded: {},
})(MuiAccordion);

export const AccordionSummary = withStyles((theme: Theme) => ({
  root: {
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    margin: '12px 0',
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
}))(MuiAccordionSummary);

export const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);
