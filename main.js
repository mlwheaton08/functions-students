const createStudent = (name, grade) => {
    return {
        name: name,
        grade: grade
    }
}

const addMathGrade = (student) => {
    student.math = 'B';
}

const addHistoryGrade = (student) => {
    student.history = 'C';
}

const addScienceGrade = (student) => {
    student.science = 'A';
}

let bill = createStudent('Bill', 4);
addMathGrade(bill);
addHistoryGrade(bill);
addScienceGrade(bill);
console.log(bill);