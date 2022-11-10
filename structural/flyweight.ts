interface IColor {
    B: number;
    G: number;
    R: number;
}

interface IPalette {
    readonly [key: string]: IColor;
}

const storage: IPalette = {
    britishRacingGreen : { R : 0, G : 66, B : 37 },
    luckyOrange : { R : 255, G : 155, B : 73 },
    mountainLakeBlue : { R : 133, G : 212, B : 212 },
    outrageousOrange : { R : 255, G : 110, B : 74 },
};
