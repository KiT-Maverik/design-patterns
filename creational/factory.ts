// ====================================
// Single class production line factory
// ====================================

type TPoints = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type TCharacterTypes = 'Brawler' | 'Nomad' | 'Sniper' | 'Scientist';

class Character {
    strength: TPoints;
    perception: TPoints;
    endurance: TPoints;
    charisma: TPoints;
    intelligence: TPoints;
    agility: TPoints;
    luck: TPoints;

    constructor(
        strength: TPoints,
        perception: TPoints,
        endurance: TPoints,
        charisma: TPoints,
        intelligence: TPoints,
        agility: TPoints,
        luck: TPoints
    ) {
        this.strength = strength;
        this.perception = perception;
        this.endurance = endurance;
        this.charisma = charisma;
        this.intelligence = intelligence;
        this.agility = agility;
        this.luck = luck;
    }
}

class CharacterFactory {
    create(character: TCharacterTypes) {
        switch (character) {
            case 'Brawler': return new Character(10, 5, 8, 4, 4, 6, 5);
            case 'Nomad': return new Character(6, 10, 9, 6, 6, 7, 6);
            case 'Sniper': return new Character(5, 10, 8, 8, 8, 7, 7);
            case 'Scientist': return new Character(4, 8, 4, 6, 10, 4, 5);
        }
    }
}

// ====================================
// Multiple class production line factory
// ====================================

interface IVehicle {
    capacity: number;
    deliver: () => void;
}

class Truck implements IVehicle {
    capacity: number;

    constructor() {
        this.capacity = 10000;
    }

    deliver() {
        console.log(`Delivering ${this.capacity} kg by land`);
    }
}

class Boat implements IVehicle {
    capacity: number;

    constructor() {
        this.capacity = 50000;
    }

    deliver() {
        console.log(`Delivering ${this.capacity} kg by land`);
    }
}

type TDeliveryOptions = 'Land' | 'Sea';
class LogisticsFactory {
    deliver(type: TDeliveryOptions) {
        switch (type) {
            case 'Land': return new Truck();
            case 'Sea': return new Boat();
        }
    }
}


