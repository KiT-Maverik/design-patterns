interface ICircleApi {
    getRadius: () => number;
}

// This API utilises imperial units
class CircleAPI implements ICircleApi {
    getRadius() {
        return 10; // <== endpoint returns inches
    }
}

// This class works with metric system
class Circle {
    static draw(radius: number) {
        console.log(`Fancy circle with ${radius}cm radius.`);
    }
}

class MetricDecorator implements ICircleApi {
    private coefficient = 2.5;
    private wrappee: ICircleApi;

    constructor(wrappee: ICircleApi) {
        this.wrappee = wrappee;
    }

    getRadius() {
        // Wa-la - inches converted to centimeters
        return this.wrappee.getRadius() * this.coefficient;
    }
}

// PROOF OF CONCEPT
const MetricAPI = new MetricDecorator(new CircleAPI);
Circle.draw(MetricAPI.getRadius());

// TODO: validate
