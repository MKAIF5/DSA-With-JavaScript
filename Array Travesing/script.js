// Array Travesing

const data = [42, 56, 52, 2, 54, 3, 7, 67, 3, 10, 0, 97];

// for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);
// };

function element() {

    const input = document.getElementById("inp").value;
    if (input < data.length && input >= 0) {

        alert(data[input])
    }
    else {
        alert("Please Enter 12 Less Then Value")
    }

};

// Task - Values Pe Alert Dikhay : Completed