import { Paper, Box } from '@material-ui/core';

function Empty() {
  return (
    <Paper variant="outlined">
      <Box component="span" display="flex" justifyContent="center" p={2} m={2}>
        Empty
      </Box>
    </Paper>
  );
}

export default Empty;
