type TInteriorOptions = 'Leather' | 'Fur' | 'Minimalistic';
type TBodyTypes = 'Sedan' | 'Cabriolet';
type TColorOptions = 'Midnight Sapphire' | 'British Racing Green' | 'Unusual Pink';
type TDecals = string;

type TRollsRoyceOptions = [TInteriorOptions, TBodyTypes, TColorOptions, TDecals?];

const defaults: TRollsRoyceOptions = [
    'Leather', 'Sedan', 'British Racing Green',
];

class RollsRoycePrototype {
    interior: TInteriorOptions;
    body: TBodyTypes;
    color: TColorOptions;
    decals?: TDecals;

    constructor(interior: TInteriorOptions, body: TBodyTypes, color: TColorOptions, decals?: string) {
        this.interior = interior;

        this.body = body;

        this.color = color;
        this.decals = decals;
    }

    produce() {
        return new RollsRoycePrototype(this.interior, this.body, this.color, this.decals);
    }
}

// Basic model
const rollsRoyceBasic = new RollsRoycePrototype(...defaults);

// Special delivery for mr. Bond
const jamesBondRoyce = rollsRoyceBasic.produce();
jamesBondRoyce.color = 'British Racing Green';
jamesBondRoyce.interior = 'Minimalistic';

// Rapper custom car
const rapperRoyce = rollsRoyceBasic.produce();
jamesBondRoyce.body = 'Cabriolet';
jamesBondRoyce.color = 'Unusual Pink';
jamesBondRoyce.decals = 'Flashy stuff';
jamesBondRoyce.interior = 'Fur';

