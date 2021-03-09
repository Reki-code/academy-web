import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    textAlign: 'right',
  },
  details: {
    display: 'block',
    alignItems: 'center',
  },
  column1: {
    flexBasis: '60%',
  },
  column2: {
    flexBasis: '30%',
  },
}))

const announcementInfo = [
  {
    id: 'abc',
    title: '关于网络学堂微信版的使用说明',
    content: [
      '为方便各位老师、助教使用在线学堂微信版创建和使用课程群，我们撰写了相应的使用说明',
      '您在使用2018版网络学堂过程中，有任何问题，请咨询：',
      '电话：62788122'
    ]
  }, {
    id: 'bbc',
    title: '关于网络学堂微信版的使用说明',
    content: [
      '为方便各位老师、助教使用在线学堂微信版创建和使用课程群，我们撰写了相应的使用说明',
      '您在使用2018版网络学堂过程中，有任何问题，请咨询：',
      '电话：62788122'
    ]
  }
]

const Announcement = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState()

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  }

  return <div className={classes.root}>
    {
      announcementInfo.map((announcement) => {
        const id = announcement.id
        return (
          <Accordion square expanded={expanded === id} onChange={handleChange(id)} key={id}>
            <AccordionSummary>
              <div className={classes.column1}>
                <Typography className={classes.heading}>{announcement.title}</Typography>
              </div>
              <div className={classes.column2}>
                <Typography className={classes.secondaryHeading}>
                  2月8日
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              {announcement.content.map(cont => (
                <p>
                  {cont}
                </p>
              ))}
            </AccordionDetails>
          </Accordion>
        )
      })
    }
  </div>
}

export default Announcement
