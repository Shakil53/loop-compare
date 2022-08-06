const student = {
    color: "yellow",
    hold: "water",
    price: 60,
    isClean: true,
}


/* 
type of loop - for

for(let i = 0; i<10; i++){};
for(const num of numbers){}; uses of array
for(const prob in student){}; uses of object


*/
for (const prop in student) {
    console.log(student[prop]);
}