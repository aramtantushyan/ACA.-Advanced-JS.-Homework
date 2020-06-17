class Person {
    constructor (firstName, lastName, gender, age) {
        this._fName = firstName
        this._lName = lastName
        this._gender = gender
        this._age = age
    }
    get firstName () {
        return this._fName;
    }
    get lastName () {
        return this._lName;
    }
    get gender () {
        return this._gender;
    }
    get age () {
        return this._age;
    }
    set firstName (name) {
        this._fName = name;
    }
    set lastName (surename) {
        this._lName = surename; 
    }
    set gender (gender) {
        this._gender = gender;
    }
    set age (age) {
        this._age = age;
    }
    toString () {
        return `This person's name is ${this._fName} ${this._lName}`
    }
}

class Student extends Person {
    constructor (firstName, lastName, gender, age, program, year, fee) {
        super (firstName, lastName, gender, age)
        this._fName = firstName
        this._lName = lastName
        this._gender = gender
        this._age = age
        this._program = [...program]
        this._year = year
        this._fee = fee
    }
    get program () {
        return this._program;
    }
    get year () {
        return this._year;
    }
    get fee () {
        return this._fee;
    }
    set program (program) {
        for (let i of program) {
            this._program.push(i);
        }
    }
    set fee (fee) {
        this._fee = fee;
    }
    passExam (programName, grade) {
        this._program.push({['programName']:programName, ['grade']: grade})
        let sumGrade = 0;
        for (let i of this._program) {
            sumGrade += i.grade;
        }
        if (sumGrade > 50) {
            this._year++;
        }
    }
    toString() {
        return `${this._fName} is a student`;
    }
}