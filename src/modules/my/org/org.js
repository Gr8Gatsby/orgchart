import { LightningElement, track } from 'lwc';
import Tree from 'my/tree';
//TODO: make data external import
export default class Org extends LightningElement {
    constructor() {
        super();

        let tree = new Tree();
        tree.addPerson('Ryan Hill', 'Services', 0);
        tree.addPerson('Jason Hill', 'Sales', 0);
        tree.addPerson('Aaron Hill', 'Marketing', 0);
        let ryanHill = tree.getPersonByName('Ryan Hill');
        if (ryanHill.length === 1) {
            tree.addPerson('Walter Hill', 'Success', ryanHill[0].key);
        }

        let walterHill = tree.getPersonByName('Walter Hill');
        if (walterHill.length === 1) {
            tree.addPerson('Norman Hill', 'Success', walterHill[0].key);
        }

        tree.generateOrg(0, tree.people);
        this.peeps = tree._generatedOrg;
    }

    @track peeps;
    @track people = [
        { key: 1, name: 'Stella Payne Diaz', title: 'CEO' },
        { key: 2, name: 'Luke Warm', title: 'VP Marketing/Sales', parent: 1 },
        { key: 3, name: 'Meg Meehan Hoffa', title: 'Sales', parent: 2 },
        { key: 4, name: 'Peggy Flaming', title: 'VP Engineering', parent: 1 },
        { key: 5, name: 'Saul Wellingood', title: 'Manufacturing', parent: 4 },
        { key: 6, name: 'Al Ligori', title: 'Marketing', parent: 2 },
        { key: 7, name: 'Dot Stubadd', title: 'Sales Rep', parent: 3 },
        { key: 8, name: 'Les Ismore', title: 'Project Mgr', parent: 5 },
        { key: 9, name: 'April Lynn Parris', title: 'Events Mgr', parent: 6 },
        { key: 10, name: 'Xavier Breath', title: 'Engineering', parent: 4 },
        { key: 11, name: 'Anita Hammer', title: 'Process', parent: 5 },
        { key: 12, name: 'Billy Aiken', title: 'Software', parent: 10 },
        { key: 13, name: 'Stan Wellback', title: 'Testing', parent: 10 },
        { key: 14, name: 'Marge Innovera', title: 'Hardware', parent: 10 },
        { key: 15, name: 'Evan Elpus', title: 'Quality', parent: 5 },
        { key: 16, name: 'Lotta B. Essen', title: 'Sales Rep', parent: 3 },
        { key: 17, name: 'Kevin Hill', title: 'Product Manager', parent: 1 }
    ];

    tree(key) {
        return this.people.find(
            person => person.key === key || person.parent === key
        );
    }

    get fullTree() {
        return this.tree(1);
    }
}
