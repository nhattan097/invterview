import { makeStyles, Theme } from '@material-ui/core/styles';

interface IProps {
  isComing: boolean;
  isSelected?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: 8,
    width: '100%',
    position: 'relative',
    border: ({ isSelected }: IProps) =>
      isSelected ? '1px solid #5954E9' : '1px solid #CED0D6',
  },
  stick: ({ isSelected }) =>
    isSelected
      ? {
          position: 'absolute',
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          borderTop: '40px solid #5954E9',
          borderRight: '40px solid transparent',
          '& svg': {
            position: 'absolute',
            top: -40,
            left: 2,
            color: 'white',
          },
        }
      : {},
  thumbCountry: {
    height: 140,
    margin: '40px 40px 0 40px',
  },
  comingSoon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '8px 16px',
    background: '#484b56',
    borderRadius: 20,
    color: '#fff',
  },
  backgroundComingSoon: ({ isComing }) =>
    isComing ? { opacity: 0.2 } : { opacity: 1 },
}));

export default useStyles;
