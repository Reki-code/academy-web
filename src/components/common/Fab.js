import React from 'react'
import MuiFab from '@material-ui/core/Fab'

const Fab = (props) => {
  const { Icon, text, ...fabProps } = props

  return (
    <MuiFab
      {...fabProps}
      style={{
        position: 'fixed',
        right: 0,
        bottom: 0,
        margin: 8,
      }}
      variant='extended'
    />
  )
}

export default Fab
