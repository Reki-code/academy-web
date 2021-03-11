import React from 'react'
import { times } from 'ramda'
import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'


const PTabs = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[50],
    borderBottom: '1px solid #e8e8e8',
    position: 'sticky',
    top: 0,
    marginTop: 6,
    width: '100%',
  },
  indicator: {
    display: 'none',
  },
}))(Tabs);

const PTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: 'white',
      fontWeight: theme.typography.fontWeightBold,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {
    backgroundColor: '#1890ff',
  },
}))((props) => <Tab disableRipple {...props} />);

const Nav = ({ count, index, handleChange }) => {

  return (
    <PTabs
      value={index}
      onChange={handleChange}
      scrollButtons='auto'
      variant='scrollable'
    >
      {times(i => <PTab key={i} label={`主题${i + 1}`} /> )(count)}
    </PTabs>
  )
}

export default Nav