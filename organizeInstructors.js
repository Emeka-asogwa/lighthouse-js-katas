const organizeInstructors = (instructors) => {
  let obj = {};
  instructors.forEach((value) => {
    let courseName = value.course;
    if (courseName in obj) {
      obj[courseName].push(value.name);
    } else {
      obj[courseName] = [value.name];
    }
  });
  return obj;
}




console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));