Memento is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation.

### Pattern elements
* The Originator class can produce snapshots of its own state, as well as restore its state from snapshots when needed.
* The Memento is a value object that acts as a snapshot of the originator’s state. It’s a common practice to make the memento immutable and pass it the data only once, via the constructor.
* The Caretaker knows not only “when” and “why” to capture the originator’s state, but also when the state should be restored.
