import * as React from 'react'
import {
  Card,
  CardContent,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core'
import ForumIcon from '@material-ui/icons/Forum'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '100%',
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
})

export const MapCard = (): JSX.Element => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (_: any, newValue: number): void => {
    setValue(newValue)
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          萝格营地
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          区域等级：0
        </Typography>
        <Divider />
        <Tabs
          value={value}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="友善（1）" />
          <Tab label="敌意（0）" />
        </Tabs>
        <Divider />
        <List component="nav">
          {value === 0 ? (
            <ListItem>
              <ListItemText primary="阿卡拉" secondary="盲人修女" />
              <IconButton edge="end" style={{ marginRight: 8 }}>
                <ForumIcon />
              </IconButton>
              <IconButton edge="end">
                <MenuIcon />
              </IconButton>
            </ListItem>
          ) : null}
        </List>
      </CardContent>
    </Card>
  )
}
