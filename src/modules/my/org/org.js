import { LightningElement, track } from 'lwc';
import Tree from 'my/tree';
import { peopleData } from 'my/data';

export default class Org extends LightningElement {
    constructor() {
        super();
        window.console.log(peopleData);
        this.people = peopleData;
        let tree = new Tree();

        if (peopleData.length) {
            peopleData.forEach(person =>
                tree.addPerson(
                    person.key,
                    person.name,
                    person.title,
                    person.parent
                )
            );
            tree.generateOrg(1, tree.people);
            this.peeps = tree._generatedOrg;
        }
    }

    @track people;

    tree(key) {
        return this.people.find(
            person => person.key === key || person.parent === key
        );
    }

    get fullTree() {
        return this.tree(1);
    }
}
