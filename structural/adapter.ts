type TEUVoltage = 220;
type TUSVoltage = 110;

class USSocket {
    get110v(): TUSVoltage {
        return 110;
    }
}

class Lamp {
    turnOn(power: TEUVoltage) {
        console.log('Click!');
    }
}

class voltageAdapter {
    powerSupply: USSocket;

    constructor(powerSupply: USSocket) {
        this.powerSupply = powerSupply;
    }

    getVoltage(): TEUVoltage {
        return this.powerSupply.get110v() * 2 as TEUVoltage;
    }
}

// PROOF OF CONCEPT
const lamp = new Lamp();
const socket = new voltageAdapter(new USSocket);

lamp.turnOn(socket.getVoltage());
