//TODO: make tree parse method assuming simple JSON data
// { key: 1, name: 'Stella Payne Diaz', title: 'CEO' },
// { key: 2, name: 'Luke Warm', title: 'VP Marketing/Sales', parent: 1 },
class Person {
    constructor(key, name, title, boss) {
        this.key = key;
        this.name = name;
        this.title = title;
        this.boss = boss;
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
    _key = 0;
    _people = [];
    _generatedOrg = null;

    addPerson(key, name, title, boss) {
        const person = new Person(key, name, title, boss);
        this._people.push(person);
    }

    getPersonByKey(key) {
        return this._people.find(person => person.key === key);
    }

    getReportsByKey(key) {
        return this._people.filter(person => person.boss === key);
    }

    generateReports(key, people) {
        let branch = this.getPersonByKey(key);
        branch.reports = this.getReportsByKey(key);
        branch.reports.forEach(person =>
            this.generateReports(person.key, people)
        );
    }

    addDirectReportsToPerson(person) {
        person.reports = this.people.filter(p => p.boss === person.key);
        if (person.reports.length) {
            person.reports.forEach(report =>
                this.addDirectReportsToPerson(report)
            );
        }
    }

    generateOrg(key, people) {
        this._generatedOrg = [];

        let anchor = people.find(person => person.key === key);
        this._generatedOrg.push(anchor);
        let filteredPeople = this.people.filter(p => p.key === anchor.key);
        this.generateReports(anchor.key, filteredPeople);

        if (anchor.reports.length) {
            anchor.reports.forEach(person =>
                this.addDirectReportsToPerson(person)
            );
        }
    }

    get people() {
        return this._people;
    }
}

// Array filter a person.
