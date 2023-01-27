import { reactive } from 'vue'

export const constants = reactive({
  version: 1,
})

const basePlayer = {
  name: 'Nobody',
  hp: 0,
  atb: 0,
  atts: {
    max_hp: 5,
    atk: 1,
    spd: 1000,
  }
}

export const player = reactive(basePlayer)

