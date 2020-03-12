import * as React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Box,
} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: 'fit-content',
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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
        <Typography className={classes.pos} color="textSecondary">
          15级（100 / 500）
        </Typography>
        <Typography color="textSecondary">
          <HealthBar variant="determinate" value={90} />
          <Box textAlign="right" my={1}>
            生命值（100 / 90）
          </Box>
          <ManaBar variant="determinate" value={50} />
          <Box textAlign="right" mt={1}>
            法力值（50 / 100）
          </Box>
        </Typography>
      </CardContent>
    </Card>
  )
}
