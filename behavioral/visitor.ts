const parties = ['Democrat', 'Republican'] as const;
type TParty = typeof parties[number];

class Elections {
    private readonly results: { [key in TParty]: number };

    constructor() {
        this.results = {
            Democrat : 0,
            Republican : 0,
        };
    }

    getResults() {
        const democrats = this.results.Democrat;
        const republicans = this.results.Republican;

        console.log(`Democrats: ${democrats}. Republicans: ${republicans}.`);
        if (democrats === republicans) {
            console.log('It\'s a draw!');

            return;
        }
        console.log(`${(democrats > republicans) ? 'Democrats' : 'Republicans'} have won!`);
    }

    addVoice(party: TParty) {
        this.results[party]++;
    }
}

class Citizen {
    private readonly party: TParty;

    constructor() {
        this.party = parties[Math.round(Math.random())];
    }

    accept(visitor: Conductor) {
        visitor.vote(this.party);
    }
}

class Conductor {
    private readonly elections: Elections;

    constructor(elections: Elections) {
        this.elections = elections;
    }

    vote(party: TParty) {
        this.elections.addVoice(party);
    }
}

// PROOF OF CONCEPT

function conductElections() {
    const elections = new Elections();
    const visitor = new Conductor(elections);

    for (let i = 0; i < 100; i++) {
        new Citizen().accept(visitor);
    }

    elections.getResults();
}

conductElections();

