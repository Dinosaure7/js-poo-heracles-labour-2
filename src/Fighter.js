const Shield = require("./Shield")
const Weapon = require("./Weapon");

const MAX_LIFE = 100;
const MIN_LIFE = 0;
const MIN_DAMAGE = 1;

    class Fighter {
        constructor(name, strength, dexterity, weapon = null, shield = null) {
            this.name = name;
            this.strength = strength;
            this.dexterity = dexterity;
            this.life = MAX_LIFE;
            this.weapon = weapon;
            this.shield = shield;
        }

        // Créé tout d'abord une méthode `getDamage()`
    getDamage() {
        if (this.weapon && this.weapon instanceof Weapon) {
            return this.weapon.displayProperty() + this.getRandomInt(this.strength);
        }
        return this.getRandomInt(this.strength);
    }

    getDefense() {
        if (this.shield && this.shield instanceof Shield) {
            return this.shield.displayProperty() + this.dexterity;
        }
        return this.dexterity;
    }


    // Launch a fight
    fight(defender) {
        const damages = Math.max(this.getDamage() - defender.getDefense(), MIN_DAMAGE);

        defender.updateLife(damages);
        console.log(damages);
    }


    // Generate a random value between 1 and max
    getRandomInt(max) {
        return MIN_DAMAGE + Math.floor(Math.random() * max);
    }

    displayLife() {
        return this.life;
    }

    updateLife(damages) {
        return (this.life = Math.max(this.life - damages, MIN_LIFE));
    }


    // Determine if a fighter is still alive
    isAlive() {
        return this.life;
    }
}

module.exports = Fighter;
