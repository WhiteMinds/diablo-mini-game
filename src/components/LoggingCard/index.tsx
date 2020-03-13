import * as React from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  List,
  ListItem,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

const useStyles = makeStyles({
  root: {
    width: '100%',
    minWidth: 275,
    height: '100%',
  },
})

export const LoggingCard = (): JSX.Element => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event: any): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  return (
    <Card className={classes.root}>
      <CardActions style={{ justifyContent: 'space-between' }}>
        <Button endIcon={<ArrowDropDownIcon />} onClick={handleClick}>
          全部信息
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>仅战斗信息</MenuItem>
          <MenuItem style={{ flexWrap: 'wrap' }} onClick={handleClose}>
            <Typography style={{ width: '100%' }}>聊天信息</Typography>
            <br />
            <Typography variant="caption" color="textSecondary">
              仅显示聊天信息
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>其他信息</MenuItem>
        </Menu>
        <Box>
          <FormControlLabel
            value="time"
            control={<Checkbox color="primary" />}
            label="显示时间戳"
          />
        </Box>
      </CardActions>
      <Divider />
      <CardContent>
        <List component="nav">
          <ListItem>
            <Typography variant="caption">WhiteMind 进入了游戏</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="caption">
              WhiteMind 进入地图 萝格营地
            </Typography>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}
