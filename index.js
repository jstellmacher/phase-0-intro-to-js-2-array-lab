// Write your solution here!
//1) is assigned an initial value of ["Milo", "Otis", "Garfield"]
//function
const cats = [
"Milo",
"Otis",
"Garfield"
];
function destructivelyAppendCat(name){
    cats.push(name);
}
//push method adds elements to the end of an Array
function destructivelyPrependCat(name){
    cats.unshift(name);
}
//adds them to the beginning of the array
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
//pop removes last element of an array
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
//we learned unshift adds elements to beginning whereas shift and pop removes the first element in the array
function appendCat(name){
    return [...cats, name];
}
// inserts specified content at the end of the selected elements
function prependCat(name) {
    return [name, ...cats];
 }
//prepend will inserts a set of Node objects or string objects before the first child of the Element
function removeLastCat(name){
    return cats.slice(0, cats.length - 1);
}
//remove last cat nondestructively slice returns only a portion of the array
function removeFirstCat(){
    return cats.slice(1, cats.length);
}