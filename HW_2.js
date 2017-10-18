// task_1
function getMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    console.log(max);
}
getMax(array = [97, 2, 71, 53, 17])
getMax(array = [97, 2, 71, 99, 17])

// task_2

let a = "", i, j;
for (i = 0; i < 8; i++) {
  for (j = 0; j < 8; j++) {
    if (i % 2 === j % 2) {
      a += "B ";
    }
    if ( i % 2 !== j % 2) {
      a += "W ";
    }

 }
     a += "\n";
}
console.log(a);

// task_3 

let student1 = {
    name: "John",
    status: "part-time",
    st_name() {
        console.log(this.name);
   }
};

let student2 = {
    name: "James",
    status: "full-time",
    st_name() {
        console.log(this.name);
    }
};

student2.st_name.call(student1);
