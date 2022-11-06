Allows to copy object without diving deep into their realisation

diff from factory
    you have basic class implementation
    you clone objects using it
    you can change clones for particular tasks

example
    BMW should use factory. limited models, mass production
    Rolls-royce should use prototype. custom cars, infinite interior and exterior combinations

```js
// Basic model
    class RollsRoycePrototype {
        constructor(interior, type, color, paintJob) {
            this.interior = interior;
            
            this.type = type;
            
            this.color = color;
            this.paintJob = paintjob;
        }
        
        produce() {
            return new RollsRoycePrototype(this.interior, this.type, this.color, this.paintJob);
        }
}
```
