Turns a request into a stand-alone object that contains all information about the request.
This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.

> Command class - `command` pattern element. Encapsulates all command details.

### Pattern Structure
* The `Sender` class (aka invoker) is responsible for initiating requests.
* `Concrete Commands` implement various kinds of requests.
* The `Receiver` class contains some business logic. 

