
/*
* TASK: Remove smallest int from the array
*/

let arrays = [
  [67,5,8, 3, 2,15,10],
  [10,8,3,5],
  [300,10,100, 20000000]
];

const removeLowest = (a) => {
  const pos = a.indexOf(Math.min(...a));
  return a.slice(0,pos).concat(a.slice(pos+1));
};

arrays.forEach(a => console.log(removeLowest(a)));
