class Weapon {
    constructor(name) {
        this.name = name;
        this.damage = 10;
    }
displayProperty() {
    return this.damage
}
}

module.exports =  Weapon;