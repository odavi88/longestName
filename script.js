let name1 = "";
let name2 = "";
let name3 = "";

name1 = prompt("Give me a name...");
name2 = prompt("Give me another name...");
name3 = prompt("Give me one more name...");

if (name1.length > name2.length && name1.length > name3.length) { // name1 is the longest
    console.log(`${name1} has the longest name is.`);
} else if (name2.length > name1.length && name2.length > name3.length) { // name2 is the longest
    console.log(`${name2} has the longest name is.`);
} else if (name3.length > name1.length && name3.length > name2.length) { // name3 is the longest
    console.log(`${name3} has the longest name is.`);
} else if (name1.length === name2.length && name3.length < name1.length) { // name1 & name2 are the longest
    console.log(`${name1} and ${name2} are tied for the longest names.`);
} else if (name1.length === name3.length && name2.length < name1.length) { // name1 & name3 are the longest
    console.log(`${name1} and ${name3} are tied for the longest names.`);
} else if (name2.length === name3.length && name1.length < name2.length) { // name2 & name3 are the longest
    console.log(`${name2} and ${name3} are tied for the longest names.`);
} else if (name1.length === name2.length && name2.length === name3.length) { // name1, name2 and name3 are all the same size in length
    console.log(`${name1}, ${name2} and ${name3} are all the same in length.`);
} else {
    console.log("Not a valid input..."); // catch all for errors...
} 

