import * as React from 'react'
import { Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '100%',
    minWidth: 275,
  },
})

export const MapCard = (): JSX.Element => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>MapCard</CardContent>
    </Card>
  )
}
