import { reactive } from "vue";

export const constants = reactive({
  version: 1,
  maxEnemies: 1,
  attNames: {
    max_hp: "Max HP",
    atk: "Attack",
    spd: "Speed",
  },
});

export const player = reactive({
  name: "Nobody",
  hp: 5,
  atb: 0, // goes from 1 to 100
  atts: {
    max_hp: 5,
    atk: 1,
    spd: 1000, // speed
  },
});
