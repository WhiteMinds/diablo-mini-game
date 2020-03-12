import 'react-hot-loader'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { css } from 'astroturf'
import { PlayerCard } from '@/components/PlayerCard'

function renderApp(): void {
  ReactDOM.render(
    <div>
      <PlayerCard />
    </div>,
    document.getElementById('app')!,
  )
}

renderApp()
;(module as any).hot.accept(renderApp)

css`
  h1 {
    font-size: 32px;
  }
`
