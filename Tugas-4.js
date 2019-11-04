var x = 180;
var y = 170;
var z = 175;

if (x > y) {
    if (x > z) {
        if (y > z) {
            console.log("X ,Y,Z");

        } else {
            console.log("X,Z,Y");

        }
    } else {
        console.log("Z,X,Y");

    }
} else {
    if (y > z) {
        if (x > z) {
            console.log("Y,X,Z");

        } else {
            console.log("Y,Z,X");

        }
    } else {
        console.log("Z,Y,X");

    }
}