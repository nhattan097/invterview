import { Divider, Typography, CircularProgress, Box } from '@material-ui/core';
import { ExpandMore, Phone } from '@material-ui/icons';

import {
  useStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from './styles';
import { IBank, IBankStatus } from 'interfaces/bank';

interface IProps {
  statusBank: IBankStatus;
  handleChange(id: number): any;
  expanded?: number | false;
  infoBank?: IBank;
  isLoading?: boolean;
}

export default function BoxBank(props: IProps) {
  const { statusBank, handleChange, expanded, infoBank, isLoading } = props;
  const classes = useStyles({ isActive: statusBank.isActive });

  return (
    <Accordion
      square
      expanded={expanded === statusBank.id}
      onChange={handleChange(statusBank.id)}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography className={classes.name}>{statusBank.name}</Typography>
        <Typography className={classes.status}>
          {statusBank.isActive ? 'Active' : 'Inactive'}
        </Typography>
      </AccordionSummary>
      {expanded && <Divider className={classes.space} />}
      <AccordionDetails>
        {isLoading ? (
          <Box width="100%" display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          <Box display="flex" flexDirection="column">
            <Box component="h1" fontWeight={500}>
              {infoBank?.name}
            </Box>
            <Box marginBottom={1}>
              <img src={infoBank?.logoUrl} alt="" />
            </Box>
            {infoBank?.hotline && (
              <Box display="flex" alignItems="center" className={classes.phone}>
                <Box marginRight={1}>
                  <Phone />
                </Box>
                {infoBank.hotline}
              </Box>
            )}
          </Box>
        )}
      </AccordionDetails>
    </Accordion>
  );
}
