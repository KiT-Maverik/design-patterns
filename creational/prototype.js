const defaults = {
    interior: 'leather',
    type: 'sedan',
    color: 'Midnight Saphire',
    paintJob: 'none',
}

class RollsRoycePrototype {
    constructor(interior, type, color, paintJob) {
        this.interior = interior;

        this.type = type;

        this.color = color;
        this.paintJob = paintJob;
    }

    produce() {
        return new RollsRoycePrototype(this.interior, this.type, this.color, this.paintJob);
    }
}

// Basic model
const rollsRoyceBasic = new RollsRoycePrototype(...defaults);

// Special delivery for mr.Bond
const jamesBondRoyce = rollsRoyceBasic.produce();
jamesBondRoyce.color = 'British race';
jamesBondRoyce.interior = 'Minimalistic';

// Rapper custom car
const rapperRoyce = rollsRoyceBasic.produce();
jamesBondRoyce.color = 'Pimp pink';
jamesBondRoyce.interior = 'Fur';
jamesBondRoyce.paintJob = 'Flashy stuff';

