'use strict'

class List {
    constructor(container) {
        this.container = container;
        this.prepareListStructure();
    }

    prepareListStructure() {
        const ul = document.createElement("ul");
        this.container.appendChild(ul);
    }
}

class Task {
    constructor(taskContainer) {
        this.taskContainer = taskContainer;
        
    }
}

class App {
    constructor(appContainer) {
        new List(appContainer) ;
    }
}

new App(document.getElementById("app"));

// repo na gicie, zainicjować i wysłać link, wrzucić na gita
