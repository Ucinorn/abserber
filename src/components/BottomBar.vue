<template>
  <div class="w-100">
    <v-container class="fill-height">
      <div class="d-flex ">
        <v-btn dense class="mr-2" @click=" isRunnning ? stop(): start()">
          <v-icon :icon="tickIcons[tickCount]"></v-icon>
        </v-btn>
        <v-btn-toggle class="mr-2">
          <v-btn dense @click="start()">Start</v-btn>
          <v-btn dense @click="stop()">Stop</v-btn>
        </v-btn-toggle>
        <v-btn-toggle class="ml-auto">
          <v-btn dense @click="save()">Save</v-btn>
          <v-btn dense @click="load()">Load</v-btn>
        </v-btn-toggle>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, ref, reactive, inject, computed } from 'vue'
  const events = inject('events');   // Inject mitt event bus

  // the start stop of the main game loop is used
  // to initialise the game, and to pause progress
  // in intermediate states, such as when the player is
  // choosing the next step.
  import { constants, player, battle } from "@/js/store";

  const tickCount = ref(0)
  const tickIcons = [
      'mdi-clock-time-one-outline',
      'mdi-clock-time-two-outline',
      'mdi-clock-time-three-outline',
      'mdi-clock-time-four-outline',
      'mdi-clock-time-five-outline',
      'mdi-clock-time-six-outline',
      'mdi-clock-time-seven-outline',
      'mdi-clock-time-eight-outline',
      'mdi-clock-time-nine-outline',
      'mdi-clock-time-ten-outline',
      'mdi-clock-time-eleven-outline',
      'mdi-clock-time-twelve-outline',
  ]

  const save_key = 'Abserber'

  const save = () => {
    const { version } = constants
    const save = JSON.stringify({
      player,
      version
    })
    console.log('Saving...', save_key, save)
    localStorage.setItem(save_key, save )
  }

  const load = () => {
    stop()
    const loaded = localStorage.getItem(save_key)
    if (!loaded) {
      console.log('No Save Game data Loaded');
    }
    const decoded = JSON.parse(loaded)

    for ( const attKey in Object.keys(decoded)) {
      if ( attKey == 'player') {
        for ( const key in Object.keys(decoded.player)) {
          if ( key in player ) {
            console.log('Setting player attribute...', key, decoded[key])
            Object.assign( player, decoded[key])
          }
        }
      }
    }
  }

  const intervalIds= reactive({
    'main': '',
    'save': '',
  })

  const isRunning = computed( () => !!intervalIds.main )

  const tickInterval= 100 // 10 ticks per second
  const saveInterval=  1000 * 60 * 5 // save every 5 minites

  const stop = () => {
    for ( const key in intervalIds) {
      clearInterval(intervalIds[key]);
      intervalIds[key] = '';
    }
  }
  const tick = () => {
    tickCount.value =  tickCount.value == 11 ? 0 : tickCount.value + 1
    events.emit('tick')
  }

  const start = () => {
    if (intervalIds.main) {
      console.error("game already running");
      return;
    }
    intervalIds.main = setInterval(tick, tickInterval);
    intervalIds.save = setInterval(save, saveInterval);
  }



  onMounted( () => {
    load()
    start()
  })

</script>
