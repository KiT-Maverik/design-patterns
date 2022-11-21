abstract class Command {
     execute() {}
}

class Save extends Command {
    execute() { console.log('Save operation executed.'); }
}

class Edit extends Command {
    execute() { console.log('Edit operation initiated.'); }
}

class Delete extends Command {
    execute() { console.log('Delete procedure initiated.'); }
}

class Button {
    private readonly command: Command;

    constructor(command: Command) {
        this.command = command;
    }

    click() { this.command.execute(); }
}

// PROOF OF CONCEPT
const saveButton = new Button(new Save());
const editButton = new Button(new Edit());
const deleteButton = new Button(new Delete());

saveButton.click();
editButton.click();
deleteButton.click();
