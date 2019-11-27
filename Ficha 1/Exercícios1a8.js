//Ex 1
alert('Olá JavaScript!');

//Ex 2 a.
let admin;
let name;
name = 'John';
admin = name;
alert(admin);

//Ex 2 b.
let planet = 'Earth';
let currentUser = 'Nuno';

//Ex 3 a. , b.
const BIRTHDAY = '18.04.1982 '; // maiúsculas? Sim
const AGE = someCode (BIRTHDAY); //maiúsculas? Não

//Ex 4
let name = "Ilya";
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya

//Ex 5 a.
"" + 1 + 0; //1
"" - 1 + 0; //-1
true + false; //true
6 / "3"; //2
"2" * "3"; //6
4 + 5 + "px"; //9px
"$" + 4 + 5; //$45
"4" - 2; //2
"4px" - 2; //NaN
7 / 0; //Infinity
" -9 " + 5; //-9 5
" -9 " - 5; //-14
null + 1; //1
undefined + 1; //NaN

//Ex 6 a.
let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1

//Ex 6 b.
let a = 2;
let x = 1 + (a *= 2); // 1 + (4) = 5

//Ex 7
alert('* Nuno *');

//Ex 8
5 > 4; //True
"apple" > "pineapple"; //False
"2" > "12"; //False
undefined == null; //True
undefined === null; //False
null == "\n0\n"; //False
null === +"\n0\n"; //False