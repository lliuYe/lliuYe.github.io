/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-05-27 11:16:37
 * @version $Id$
 */

var x = 1;
var y = 0;
var z = 0;
console.log(x);
console.log(y);
console.log(z);
function add(n){
	n = n + 1;
}
y = add(x);
console.log(y);
function add(n){
	n = n + 3;
}
z = add(x);
console.log(z);
console.log(x);