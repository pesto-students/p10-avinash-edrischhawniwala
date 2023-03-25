// Example For Bind
function Example1() {
    return this.userName + ' is a good Human being!';
}
console.log(Example1()); // Output: undefined is a good Human being!
var bindedExample101 = Example1.bind({userName: 'Sonu sood'});
console.log(bindedExample101());

global.userName = 'A. P. J. Abdul Kalam';
var bindedExample102 = Example1.bind();
console.log(bindedExample102());


// Example For Call
function Example2(name1, name2) {
    console.log(`Its example 2 to demonstrate call by ${name1} to ${name2}`);   
}
var bindedExample201 = Example2.bind(null, 'Edris');

bindedExample201.call(null, 'Avinash');

// Example For Apply
function Example3(name1, name2) {
    console.log(`Its example 3 to demonstrate apply by ${name1} to ${name2}`); 
}

Example3.apply(null, ['Edris', 'Avinash']);