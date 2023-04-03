// all statuses
// no hard CC
// all statuses must stack
const statuses = {
  poison: {
    name: "Poison",
    description: "Deals damage over time.",
  },
  daze: {
    name: "Daze",
    description: "Reduces speed and dodge chance.",
  },
  disease: {
    name: "Disease",
    description: "Reduces all healing and regeneration.",
  },
  vuln: {
    name: "Vulnerable",
    description: "Reduces armour and damage resistances.",
  },
  silence: {
    name: "Silence",
    description: "Increased cooldowns for all skills and spells.",
  },
};

const attributes = {
  atk: {
    name: "attack",
    description:
      "Determines the amount of physical damage dealt by the character.",
    default: "",
  },
  speed: {
    name: "speed",
    description:
      "How quickly the character can move. The higher the number the better.",
    default: 1,
  },
  critChance: {
    name: "critical hit chance",
    description:
      "Determines the chance of dealing a critical hit, which deals extra damage.",
    default: 0,
  },
  regen: {
    name: "regeneration",
    description: "The amount per round at which the character recovers health.",
    default: 1,
  },
  degen: {
    name: "degeneration",
    description: "The amount per round at which the character loses health.",
    default: 0,
  },
  dodge: {
    name: "dodge",
    description: "Determines the chance of dodging an incoming attack.",
    default: 0,
  },
  defense: {
    name: "defense",
    description:
      "Reduces the amount of physical damage taken by the character.",
    default: 0,
  },
  dr: {
    name: "dr",
    description: "Reduces the amount of all damage taken by the character.",
    default: 0,
  },
  tenacity: {
    name: "tenacity",
    description:
      "Reduces the intensity of all negative status effects applied to the character.",
    default: "",
  },
  recovery: {
    name: "recovery",
    description:
      "Reduces the duration of all negative status effects applied to the character.",
    default: "",
  },
};

for (const key in statuses) {
  // dynamically add attributes for your chance to apply a status
  let s = statuses[key];
  attributes[`${key}_chance`] = {
    name: `Chance to ${s.name}`,
    description: `Chance to apply ${s.name} on hit. ${s.description}`,
    default: 0,
    max: 100,
  };
  // also add atts to resist said statuses
  attributes[`${key}_chance`] = {
    name: `Chance to resist ${s.name}`,
    description: `Chance to resist ${s.name} when it is applied. ${s.description}`,
    default: 0,
    max: 100,
  };
}

export default {
  attributes,
  statuses,
};
