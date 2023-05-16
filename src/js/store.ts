// types

type Status = {
  name: string;
  description: string;
  icon: string;
}

type Attribute = {
  name: string;
  description: string;
  default?: number;
  icon: string;
  prefix_icon?: string;
  negative?: boolean;
  max?: number;
}

export type { Status, Attribute };

// JS

import { reactive } from "vue";

const statuses = {
  poison: {
    name: "Poison",
    description: "Deals damage over time.",
    icon: "mdi-flask",
  },
  daze: {
    name: "Daze",
    description: "Reduces speed and dodge chance.",
    icon: "mdi-head-sync-outline",
  },
  disease: {
    name: "Disease",
    description: "Reduces all healing and regeneration.",
    icon: "mdi-virus",
  },
  vuln: {
    name: "Vulnerable",
    description: "Reduces armour and damage resistances.",
    icon: "mdi-image-broken-variant",
  },
  silence: {
    name: "Silence",
    description: "Increased cooldowns for all skills and spells. ",
    icon: "mdi-music-note-off",
  },
} as { [key: string]: Status };

const attributes = {
  hp: {
    name: "Health",
    description:
      "Determines the amount of physical damage you can take.",
    default: 0,
    icon: "mdi-medication",
  },
  atk: {
    name: "attack",
    description:
      "Determines the amount of physical damage dealt by the character.",
    default: 0,
    icon: "mdi-sword",
  },
  speed: {
    name: "speed",
    description:
      "How quickly the character can move. The higher the number the better.",
    default: 1,
    icon: "mdi-speedometer",
  },
  crit: {
    name: "critical hit chance",
    description:
      "Determines the chance of dealing a critical hit, which deals extra damage.",
    default: 0,
    icon: "mdi-bullseye-arrow",
  },
  regen: {
    name: "regeneration",
    description: "The amount per round at which the character recovers health.",
    default: 1000,
    icon: "mdi-heart-pulse",
  },
  degen: {
    name: "degeneration",
    description: "The amount per round at which the character loses health.",
    default: 0,
    negative: true,
    icon: "mdi-heart-broken",
  },
  lifesteal: {
    name: "lifesteal",
    description: "Heal a percentage of the damage dealt.",
    default: 0,
    icon: "mdi-heart-plus-outline",
  },
  dodge: {
    name: "dodge",
    description: "Determines the chance of dodging an incoming attack.",
    default: 0,
    icon: "mdi-run-fast",
  },
  def: {
    name: "defense",
    description:
      "Reduces the amount of physical damage taken by the character.",
    default: 0,
    icon: "mdi-shield-half-full",
  },
  dr: {
    name: "dr",
    description: "Reduces the amount of all damage taken by the character.",
    default: 0,
    icon: "mdi-security",
  },
  thorn: {
    name: "thorns",
    description: "Returns a percentage of damage to the attacker when hit.",
    default: 0,
    icon: "mdi-leaf-maple",
  },
} as { [key: string]: Attribute };

for (const key in statuses) {
  // dynamically add attributes for your chance to apply a status
  let s = statuses[key];
  attributes[`${key}_chance`] = {
    name: `Chance to ${s.name}`,
    description: `Chance to apply ${s.name} on hit. ${s.description}`,
    default: 0,
    max: 100,
    prefix_icon: "mdi-sword",
    icon: s.icon,
  };
  // also add atts to resist said statuses
  attributes[`${key}_chance`] = {
    name: `Chance to resist ${s.name}`,
    description: `Chance to resist ${s.name} when it is applied. ${s.description}`,
    default: 0,
    max: 100,
    prefix_icon: "mdi-shield",
    icon: s.icon,
  };
}

export const constants = reactive({
  version: 1,
  maxEnemies: 1,
  attNames: {
    max_hp: "Max HP",
    atk: "Attack",
    spd: "Speed",
  },
  attributes,
  statuses,
});

export const player = reactive({
  name: "Nobody",
  atb: 0, // goes from 1 to 100
  atts: {
    hp: 5,
    max_hp: 5,
    atk: 1,
    spd: 1000, // speed
  },
});

export const battle = reactive([])
