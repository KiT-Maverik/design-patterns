class CarConveyor {
    assembleBody() {
        console.log('Body assembled');
    }

    setEngine() {
        console.log('Setting engine');
    }

    setInterior() {
        console.log('Working on interior');
    }

    paintCar() {
        console.log('Painting car');
    }

    setWheels() {
        console.log('Attaching wheels');
    }

    runTests() {
        console.log('Testing car');
    }

    setExterior() {
        console.log('Working on exterior');
    }
}

class carConveyorFacade {
    conveyor: CarConveyor;

    constructor(conveyor: CarConveyor) {
        this.conveyor = conveyor;
    }

    assembleCar() {
        this.conveyor.assembleBody();
        this.conveyor.setWheels();
        this.conveyor.setEngine();
        this.conveyor.setExterior();
        this.conveyor.paintCar();
        this.conveyor.setInterior();
        this.conveyor.runTests();
    }
}

// PROOF OF CONCEPT
const assembleLine = new carConveyorFacade(new CarConveyor());
assembleLine.assembleCar();
