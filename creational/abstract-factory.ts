type TSerialModels = 'pew' | 'meow' | 'lol';
class SerialCarsFactory {
    static produce(model: TSerialModels) {
        switch (model) {
            case 'pew': return {description: 'legendary truck'};
            case 'meow': return {description: 'legendary truck'};
            case 'lol': return {description: 'legendary truck'};
        }
    }
}

type TRacingModels = 'pew' | 'meow' | 'lol';
class RacingCarsFactory {
    static produce(model: TRacingModels) {
        switch (model) {
            case 'pew': return {description: 'legendary truck'};
            case 'meow': return {description: 'legendary truck'};
            case 'lol': return {description: 'legendary truck'};
        }
    }
}

type TTruckModels = 'pew' | 'meow' | 'lol';
class TrucksFactory {
    static produce(model: TTruckModels) {
        switch (model) {
            case 'pew': return {description: 'legendary truck'};
            case 'meow': return {description: 'legendary truck'};
            case 'lol': return {description: 'legendary truck'};
        }
    }
}

type TVehicleType = 'Serial' | 'Racing' | 'Truck';

// Abstract factory
class MercedesCorp {
    constructor (productionLine: TVehicleType) {
        switch (productionLine) {
            case 'Truck' : return TrucksFactory;
            case 'Serial' : return SerialCarsFactory;
            case 'Racing' : return RacingCarsFactory;
        }
    }
}

// TODO: get corresponding models and its description
// TODO: Verify if implementation is a valid pattern

// ==============================================

interface IFurnitureFactory {
    createChair: () => {label: string};
    createSofa: () => {label: string};
    createTable: () => {label: string};
}

class VictorianFactory implements IFurnitureFactory {
    private style: string = 'Victorian';

    createChair() { return {label: `${this.style} chair`}};
    createSofa() { return {label: `${this.style} sofa`}};
    createTable() { return {label: `${this.style} table`}};
}

class ModernFactory implements IFurnitureFactory {
    private style: string = 'Modern';

    createChair() { return {label: `${this.style} chair`}};
    createSofa() { return {label: `${this.style} sofa`}};
    createTable() { return {label: `${this.style} table`}};
}

class MinimalisticFactory implements IFurnitureFactory {
    private style: string = 'Minimalistic';

    createChair() { return {label: `${this.style} chair`}};
    createSofa() { return {label: `${this.style} sofa`}};
    createTable() { return {label: `${this.style} table`}};
}
