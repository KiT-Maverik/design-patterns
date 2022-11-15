class Airport {
    private runwayIsBusy: boolean;

    constructor() {
        this.runwayIsBusy = false;
    }

    isRunwayBusy(): boolean {
       return this.runwayIsBusy;
    }

    setRunwayStatus(isBusy: boolean) {
        this.runwayIsBusy = isBusy;
    }
}

class Dispatcher {
    private airport: Airport;

    constructor(airport: Airport) {
        this.airport = airport;
    }

    handleLandingRequest(plane: Plane) {
        if (this.airport.isRunwayBusy()) return false;

        this.airport.setRunwayStatus(true);
        plane.setStatus('Landing');

        setTimeout(() => {
            this.airport.setRunwayStatus(false);
            plane.setStatus('Parked');
        }, 5000);
    }
}

type TPlaneStatus = 'Flying' | 'Landing' | 'Parked';
class Plane {
    private status: TPlaneStatus = 'Flying';
    private readonly dispatcher: Dispatcher;

    constructor(dispatcher: Dispatcher) {
        this.dispatcher = dispatcher;
    }

    setStatus(status: TPlaneStatus) {
        this.status = status;
    }

    requestLanding() {
        this.dispatcher.handleLandingRequest(this);
    }
}
