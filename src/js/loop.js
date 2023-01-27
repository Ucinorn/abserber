
// the start stop of the main game loop is used
// to initialise the game, and to pause progress
// in intermediate states, such as when the player is
// choosing the next step.

import { constants, player } from '@/store'

export const intervals = {
  intervalIds: {},
  tickInterval: 100, // 10 ticks per second
  saveInterval: 1000 * 60 * 5, // save every 5 minites
  start() {
    if ( 'main' in this.intervalIds ) {
      console.error('game already running')
      return
    }
    this.intervalIds.main  = setInterval( this.tick(), this.tickInterval )
    this.intervalIds.save  = setInterval( this.save(), this.saveInterval )
  },
  stop() {
    for ( key in this.intervalIds ) {
      clearInterval( this.intervalIds[key])
    }
  },
  tick() {
    // do all tick logic here
  },
}

const save_key = 'Abserber'

export const save = () => {
  const { version } = constants
  const save = JSON.stringify({
    player,
    version
  })
  console.log('Saving...')
  localStorage.setItem(save_key, save )
}

export const load = () => {
  intervals.stop()
  const loaded = localStorage.getItem(save_key)
  if (loaded == null) {
    console.log('No Save Game data Loaded');
    isReturnStatement
  }
  console.log('Loading...')
  for ( key in Object.keys(loaded)) {
    if ( key in store ) {
      Object.assign( store, loaded[key])
    }
  }
}
