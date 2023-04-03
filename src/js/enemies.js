import constants from "./constants.js";
const { attributes } = constants;

const basic = {
  slime: {
    name: "Blue Slime",
    description:
      "A basic slime found in all starting areas. Easy but boring to kill.",
    hp: 6,
    atts: {
      atk: 0.5,
    },
    gives: {
      hp: 0.5,
    },
  },
  rat: {
    name: "Harmless Rat",
    description: "Rats just minding their own business.",
    hp: 2,
    atts: {
      atk: 3,
      speed: 2000,
    },
    gives: {
      atk: 0.1,
      hp: -0.1,
    },
    abilities: ["Pack Hunter"],
  },
  bat: {
    name: "Tiny Bat",
    description: "Pretty spooky but folds like wet paper.",
    hp: 5,
    atts: {
      atk: 1,
      speed: 4000,
      lifesteal: 0.5, // 50% lifesteal
    },
    gives: {
      speed: 1,
      atk: 0.1,
      hp: -1,
    },
  },
  wolf: {
    name: "Mangy Wolf",
    description:
      "This wolf has seen better days, but can still put up a fight.",
    hp: 7,
    atts: {
      atk: 2,
      speed: 400,
      critChance: 0.1,
    },
    blooded: {
      critChance: 0.5,
      speed: 2000,
    },
    gives: {
      atk: 0.25,
      critChance: 0.001,
    },
  },
};

const intermediate = {
  tree: {
    name: "Ent",
    description:
      "A (mostly) harmless walking tree. Can be hard to kill, but persistence will pay off",
    hp: 30,
    atts: {
      atk: 10,
      dr: 1,
      regen: 0.005, // recovers 5 % of hp each turn
      speed: 200,
    },
    gives: {
      hp: 1,
      regen: 0.0001, // recovers .1 % of hp each turn
    },
  },
  mozzie: {
    name: "Oversized Mosquito",
    description:
      "Nothing worse than a buzzing bloodsucker. Leave it long enough and it will wear you down.",
    hp: 5,
    atts: {
      atk: 1,
      dodge: 0.5,
      speed: 6000,
      poisonChance: 0.05, // 5 % chance to poison
    },
    gives: {
      speed: 5,
      dodge: 0.01,
    },
  },
};

const enemies = {
  basic,
  intermediate,
};

// do a sanity

export default enemies;
