var instructorWithLongestName =function(instructors){
  var longName="";
  var index =-1;
  var word;

for (var i=0;i<instructors.length;i++){
  var lengthOfName=instructors[i].name;
  if(longName.length<lengthOfName.length){
    longName=lengthOfName;
    //long1=instructors[i].name;
    index = longName.indexOf(longName[i]);
    word=instructors[index];
  }

}return word;
}

console.log(instructorWithLongestName([
{name: "Samuel", course: "iOS"},
{name: "Jeremiah", course: "Web"},
{name: "Ophilia", course: "Web"},
{name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
{name: "Matthew", course: "Web"},
{name: "David", course: "iOS"},
{name: "Domascus", course: "Web"}
]));