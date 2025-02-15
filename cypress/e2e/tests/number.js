function exampleFunction() {
    if (true) {
        let varVariable = "I'm a var variable";
    }
    console.log("inside",varVariable); // "I'm a var variable" - accessible here
}

exampleFunction();
console.log("outside",varVariable); // "I'm a var variable" - accessible globally
