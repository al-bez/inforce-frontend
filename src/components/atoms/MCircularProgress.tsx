import { Box, CircularProgress, CircularProgressProps } from '@mui/material'

const MCircularProgress = (props: CircularProgressProps) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" margin={4}>
      <CircularProgress color="primary" {...props} />
    </Box>
  )
}

export default MCircularProgress
