class Person {
    constructor(fname, lname, age, job) {
        this.fname = fname
        this.lname = lname
        this.age = age
        this.job = job
    }

    getFullName () {
        return `${this.fname} ${this.lname}`
    }

    getAge () {
        return this.age
    }

    hasAccess () {
        if (this.age > 18) {
            console.log('Welcome');
            return true;
        }
        console.log('Sorry!');
        return false;
    }
}