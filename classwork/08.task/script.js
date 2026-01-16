let stu1 = {
    id: 1,
    name: "Fadile",
    surname: "Kerimli",
    email: "fadile@gmail.com",
    age: 20
};
let stu2 = {
    id: 2,
    name: "Ali",
    surname: "Memmedov",
    email: "ali@yahoo.com",
    age: 18
};
let stu3 = {
    id: 3,
    name: "Leyla",
    surname: "Huseynova",
    email: "leyla@mail.az",
    age: 22
};
let students = [stu1, stu2, stu3];


const search = (str, students) => {
    return students.filter(student =>
        student.name.toLowerCase().includes(str.toLowerCase()) ||
        student.surname.toLowerCase().includes(str.toLowerCase())
    );
}
console.log(search("A", students));
