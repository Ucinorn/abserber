class MultiplierSystem {
  constructor() {
    this.multipliers = [];
  }

  setMultiplier(validations, multiplier) {
    this.multipliers.push({
      validations,
      multiplier,
    });
  }

  applyMultipliers(obj) {
    let result = {};

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let value = obj[key];
        let multiplier = 1;

        for (let i = 0; i < this.multipliers.length; i++) {
          let m = this.multipliers[i];
          let match = true;

          for (let j = 0; j < m.validations.length; j++) {
            let v = m.validations[j];
            let attrValue = obj[v.attribute];

            switch (v.comparator) {
              case ">":
                match = attrValue > v.value;
                break;
              case ">=":
                match = attrValue >= v.value;
                break;
              case "<":
                match = attrValue < v.value;
                break;
              case "<=":
                match = attrValue <= v.value;
                break;
              case "==":
                match = attrValue == v.value;
                break;
              case "===":
                match = attrValue === v.value;
                break;
              case "regex":
                match = new RegExp(v.value).test(attrValue);
                break;
            }

            if (!match) {
              break;
            }
          }

          if (match) {
            multiplier *= m.multiplier;
          }
        }

        result[key] = value * multiplier;
      }
    }

    return result;
  }
}

/*

let system = new MultiplierSystem();

// Set multipliers using validation sets
system.setMultiplier([
  { comparator: '>', attribute: 'damage', value: 5 },
  { comparator: 'regex', attribute: 'name', value: /^S/ }
], 1.5);

system.setMultiplier([
  { comparator: '>=', attribute: 'weight', value: 10 },
  { comparator: '<=', attribute: 'weight', value: 20 }
], 2);

// Apply multipliers to an object
let obj = {
  name: 'Sword',
  damage: 10,
  weight: 15
};

let result = system.applyMultipliers(obj);

console.log(result);
// Output: { name: 'Sword', damage: 15, weight: 30 }

*/
