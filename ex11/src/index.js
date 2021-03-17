function switchCase(letter) {
    // Write code below this line
    switch (letter) {
        case "a":
            animals = "antelope";
            break;

        case "b":
            animals = "bird";
            break;

        case "c":
            animals = "cat";
            break;
        default:
            animals = "stuff";
    }

    // Write code above this line
    return animals;
}

console.log(switchCase("a")); // Change this line
console.log(switchCase("b"));
console.log(switchCase("c"));
console.log(switchCase("d"));
console.log(switchCase(4));

module.exports = switchCase;