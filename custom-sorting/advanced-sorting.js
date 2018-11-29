var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function (a, b) {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return 0;
  } else if (nameA > nameB) {
    return 2;
  } else if (a.age > b.age) {
    return -1;
  } else {
    return 1;
  }
})

console.log(students);


//Write a sorting function (sometimes called a custom comparator),
//that sorts the above array first by the name ascending alphabetically,
//and in cases where the names are equal sort by descending age.