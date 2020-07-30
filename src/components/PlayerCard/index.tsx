import * as React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  IconButton,
  Badge,
} from '@material-ui/core'
import AttrIcon from '@material-ui/icons/Layers'
import BagIcon from '@material-ui/icons/BusinessCenter'
import SkillIcon from '@material-ui/icons/HowToVote'
import TaskIcon from '@material-ui/icons/Style'

const useStyles = makeStyles({
  root: {
    width: '100%',
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  actionBar: {
    '& > *:not(:first-child)': {
      marginLeft: 8,
    },
  },
})

const HealthBar = withStyles({
  colorPrimary: {
    backgroundColor: '#ffcdcd',
  },
  barColorPrimary: {
    backgroundColor: '#ff6b6b',
  },
})(LinearProgress)

const ManaBar = withStyles({
  colorPrimary: {
    backgroundColor: '#dce8ff',
  },
  barColorPrimary: {
    backgroundColor: '#6b9bff',
  },
})(LinearProgress)

export const PlayerCard = (): JSX.Element => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          亡灵法师
        </Typography>
        <Typography variant="h5" component="h2">
          WhiteMind
        </Typography>
        <Typography color="textSecondary">15级（100 / 500）</Typography>
      </CardContent>
      <CardContent>
        <HealthBar variant="determinate" value={(100 / 120) * 100} />
        <Typography
          style={{ margin: '8px 0' }}
          color="textSecondary"
          align="right"
        >
          生命值（100 / 120）
        </Typography>
        <ManaBar variant="determinate" value={50} />
        <Typography
          style={{ marginTop: 8 }}
          color="textSecondary"
          align="right"
        >
          法力值（50 / 100）
        </Typography>
      </CardContent>
      <CardContent className={classes.actionBar}>
        <Badge badgeContent={4} color="primary" overlap="circle">
          <IconButton>
            <AttrIcon />
          </IconButton>
        </Badge>
        <IconButton>
          <BagIcon />
        </IconButton>
        <IconButton>
          <SkillIcon />
        </IconButton>
        <IconButton>
          <TaskIcon />
        </IconButton>
      </CardContent>
    </Card>
  )
}
