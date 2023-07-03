/*Object Destructuring1
 // 8
 // 1846
*/ 

/* Object Destructuring 2
{YearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
*/

/* Array Destructuring 2
// Raindrops on roses
// Whiskers on kittens
// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]
*/

/* Array Destructing 3

[ 10, 30, 20]
*/

var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;

  const {a,b} = obj.numbers;

  var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

[arr[0], arr[1]] = [arr[1], arr[0]]

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})