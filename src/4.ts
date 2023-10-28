class Key{
    private signature = Math.random();
    getSignature() {
        return this.signature
    }
}

class Person{
    constructor(private key: Key) {}
    getKey() {
    return this.key
    }
}

abstract class House{
    protected door = false;
    private tenants: Person[] = [];

    constructor(protected key: Key) {}

    comeIn(person: Person) {
        if (this.door) {
            this.tenants.push(person) 
        }
    }

    getTenants() {
        return this.tenants
    }

    abstract openDoor(key: Key) 
}

class MyHouse extends House{
    openDoor(key: Key) {
        if (this.key.getSignature() === key.getSignature()) {
            this.door = true
        }
    }
}

export {};