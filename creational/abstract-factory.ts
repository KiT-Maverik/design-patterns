type TSerialModels = 'EQE' | 'Maybach' | 'E class';
class SerialCarsFactory {
    static produce(model: TSerialModels) {
        switch (model) {
            case 'E class': return { description : 'Modest sedan' };
            case 'EQE': return { description : 'Electric sedan' };
            case 'Maybach': return { description : 'Luxury car' };
        }
    }
}

type TRacingModels = 'Silver Arrow' | 'C9' | 'AMG';
class RacingCarsFactory {
    static produce(model: TRacingModels) {
        switch (model) {
            case 'AMG': return { description : 'GT2 class racing car' };
            case 'C9': return { description : 'Le Mans 1989 winner' };
            case 'Silver Arrow': return { description : 'Legendary classic racing bolid' };
        }
    }
}

type TTruckModels = 'Unimog' | 'Arocs' | 'Atego';
class TrucksFactory {
    static produce(model: TTruckModels) {
        switch (model) {
            case 'Arocs': return { description : 'Long range heavy cargo transporter' };
            case 'Atego': return { description : 'Mid-weight truck' };
            case 'Unimog': return { description : 'Universal modular platform' };
        }
    }
}

type TVehicleType = 'Serial' | 'Racing' | 'Truck';

// Abstract factory
class MercedesCorp {
    constructor(productionLine: TVehicleType) {
        switch (productionLine) {
            case 'Truck': return TrucksFactory;
            case 'Serial': return SerialCarsFactory;
            case 'Racing': return RacingCarsFactory;
        }
    }
}

// TODO: Verify if implementation is a valid pattern

// ==============================================

// Abstract factory
interface IFurnitureFactory {
    createChair: () => { label: string };
    createSofa: () => { label: string };
    createTable: () => { label: string };
}

class VictorianFactory implements IFurnitureFactory {
    private style = 'Victorian';

    createChair() { return { label : `${this.style} chair` }; }
    createSofa() { return { label : `${this.style} sofa` }; }
    createTable() { return { label : `${this.style} table` }; }
}

class ModernFactory implements IFurnitureFactory {
    private style = 'Modern';

    createChair() { return { label : `${this.style} chair` }; }
    createSofa() { return { label : `${this.style} sofa` }; }
    createTable() { return { label : `${this.style} table` }; }
}

class MinimalisticFactory implements IFurnitureFactory {
    private style = 'Minimalistic';

    createChair() { return { label : `${this.style} chair` }; }
    createSofa() { return { label : `${this.style} sofa` }; }
    createTable() { return { label : `${this.style} table` }; }
}
