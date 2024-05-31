class Shield {
    constructor(name) {
        this.name = name;
        this.protection = 10;
    }
    displayProperty() {
        return this.protection
    }
}

module.exports =  Shield;