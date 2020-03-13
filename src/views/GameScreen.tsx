import * as React from 'react'
import { Box } from '@material-ui/core'
import { PlayerCard } from '@/components/PlayerCard'
import { MapCard } from '@/components/MapCard'
import { LoggingCard } from '@/components/LoggingCard'

export const GameScreen = (): JSX.Element => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100vw"
      height="100vh"
      boxSizing="border-box"
      p={1}
    >
      <Box width={300}>
        <PlayerCard />
      </Box>

      <Box display="flex" flexGrow={1} height="100%" mt={1}>
        <Box height="100%">
          <MapCard />
        </Box>

        <Box height="100%" width="100%" ml={1}>
          <LoggingCard />
        </Box>
      </Box>
    </Box>
  )
}
