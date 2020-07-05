function Person (name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.isHuman = true;

Person.prototype.shout = function (text = 'hey') {
    console.log(text);
    return text;
}

function Student (name, surname, grade) {
    Person.call(this, name, surname);
    this.grade = grade;
}

Student.prototype = new Person ();
Student.prototype.constructore = Student;

Student.prototype.getLikvid = function () {
    console.log('Oops!');
    return new Error('Please, start learning!');
}
