class Person {
    constructor(key, name, title, boss) {
        window.console.log('New Person Added');
        this.key = key;
        this.name = name;
        this.title = title;
        this.boss = boss;
    }

    get isLeaf() {
        if (this.reports.length > 0) {
            return false;
        }
        return true;
    }

    set reports(people) {
        this._reports = people;
    }

    get reports() {
        return this._reports;
    }

    key = null;
    name = null;
    title = null;
    boss = null;
    _reports = [];
}

export default class Tree {
    constructor() {
        window.console.log('New Tree Created');
        this._root = this.addPerson(
            'Kevin Hill',
            'Chief Lightning Officer',
            -1
        );
    }

    _root = null;
    _key = 0;
    _people = [];
    _generatedOrg = null;

    addPerson(name, title, boss) {
        const person = new Person(this._key, name, title, boss);
        this._people.push(person);

        this._key++;
        return person;
    }

    getPersonByKey(key) {
        return this._people.find(person => person.key === key);
    }

    getPersonByName(searchName) {
        window.console.log(searchName);
        window.console.log(this._people.length);
        let person = this._people.filter(p => p.name === searchName);
        window.console.log('getPersonByName: ' + JSON.stringify(person));
        return person;
    }

    getReportsByKey(key) {
        return this._people.filter(person => person.boss === key);
    }

    generateTree(key, people) {
        let branch = this.getPersonByKey(key);

        branch.reports = this.getReportsByKey(key);
        branch.reports.forEach(person => this.generateTree(person.key, people));
    }

    get root() {
        return this._root;
    }

    get people() {
        return this._people;
    }
}
