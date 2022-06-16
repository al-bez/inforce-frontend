import { Box } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  containerBox: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

interface IFlexBox {
  children: React.ReactNode
}

const FlexBox = ({ children }: IFlexBox): JSX.Element => {
  const classes = useStyles()
  return (
    <div>
      <Box className={classes.containerBox}>{children}</Box>
    </div>
  )
}
export default FlexBox
