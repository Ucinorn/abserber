import { reactive } from 'vue'

export const store = reactive({
  version: 1,
  player: {
    hp: 0,
    atb: 0,
    atts: {
      max_hp: 5,
      atk: 1,
      spd: 1000,
    }
  }
})

