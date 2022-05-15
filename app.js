var x = 2;
var y = 4;

var z = x + y;

// gets user's full name
function userFullName( firstName, lastName ) {

    const fullName = `Mr ${firstName} ${lastName}`

    return fullName;
}


let myFullName = userFullName('Frank', 'Assafuah');

document.getElementById("username").innerHTML = myFullName;

