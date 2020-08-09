class Student {
  constructor(name) {
    this.name = name;
  }

  study() {
    console.log(`${this.name} studies`);
  }
}

// teacher class inheriting properties of students class
class Teacher extends Student {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  teach() {
    console.log(`${this.name} teaches ${this.subject}`);
  }
}

// const ankur = new Student("Ankur");
// ankur.study();

const mosh = new Teacher("Mosh", "Programming");
mosh.teach();
