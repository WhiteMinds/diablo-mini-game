import * as React from 'react'
import { Box, Grid } from '@material-ui/core'
import { PlayerCard } from '@/components/PlayerCard'
import { MapCard } from '@/components/MapCard'
import { LoggingCard } from '@/components/LoggingCard'

export const GameScreen = (): JSX.Element => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Box m={1}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <PlayerCard />
          </Grid>

          <Grid container item spacing={2}>
            <Grid item xs>
              <MapCard />
            </Grid>
            <Grid item xs>
              <LoggingCard />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
