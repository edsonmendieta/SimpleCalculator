window.onload = function() {
  //do work

// GLOBAL ARRAYS ----------------------------------------------------

//individuals
var empty = [];

//totals
var calc = [];

//-------------------------------------------------------------------

//REFERENCE VARIABLES -----------------------------------------------

// includes divide symbol after 'TOP Numbers' code.
var ops = ["+", "-", "*"];

var dot = '.';

var dotReg = /\./;

//------------------------------------------------------------------

// TOP Numbers-----------------------------------------------
var theNode = document.getElementById('divide').innerHTML;

// adds divide symbol to 'ops' array
ops.push(theNode);

// var textnode = document.createTextNode(theNode);
//
// document.getElementById('topSpan').appendChild(textnode);4
//------------------------------------------------------------

                     // NUMBERS 1 - 9

var oneNine = document.getElementsByClassName('nonZero');

//ATTACHES EVENT LISTENER TO EACH NUMBER
for (var i = 0; i < oneNine.length; i++) {

    oneNine[i].addEventListener('click', function() {

        //WHEN BUTTON IS CLICKED...

        //variables ------------------------------------------
        var topOp = "no";

        var textNode = document.createTextNode(this.innerHTML);

        var textNode2 = document.createTextNode(this.innerHTML);
        //-----------------------------------------------------

        // pushes # to 'empty' array
        empty.push(this.innerHTML);

        // TOP-DISPLAY FUNCTIONALITY---------------------------

        // checks for op in top-display
        for (var e = 0; e < ops.length; e++) {

            if(ops[e] == document.getElementById('topSpan').innerHTML) {

                topOp = "yes";
            }
        }

        // CLEARS and ADDS # to top-display IF OP NOT in top-display
        if (topOp == 'yes') {
            // clears top-display
            document.getElementById('topSpan').innerHTML = '';
            // adds # to top-display
            document.getElementById('topSpan').appendChild(textNode);
        }

        else {
            // adds # to top-display
            document.getElementById('topSpan').appendChild(textNode);
        }
        //-----------------------------------------------------------

        // BOTTOM-DISPLAY FUNCTIONALITY -----------------------------

        // adds # to bottom-display
        document.getElementById('bottomSpan').appendChild(textNode2);

        //-----------------------------------------------------------

    }); // END OF CURRENT ELEMENT EVENT LISTENER FUNCTION

} // END OF EVENT LISTENER ATTACHING LOOP

//-------------------------------------------------------------------------

                    // '.' BUTTON

//ATTACHES EVENT LISTENER '.'
document.getElementById('dot').addEventListener('click', function() {

    //WHEN BUTTON IS CLICKED...

    // if dot NOT in 'empty' array...
    if (empty.join('').match(dotReg) === null) {

        // pushes dot to 'empty' array
        empty.push(dot);

        //**************
    }

});
//-------------------------------------------------------------------------

var chain = 2 + 2 + 5 - 2 * 3 - 3 / 3;


var status = 'ready';


// var calc = [2, "add", 2, "add", 5, "minus", 2, "times", 3, "minus", 3, "divide",  3];

var operations = {

    add: function(a, b) {
        return a + b;
    },

    minus: function(a, b) {
        return a - b;
    },

    times: function(a, b) {
        return a * b;
    },

    divide: function(a, b) {
        return a / b;
    }
}

var two = 2;

var five = 5;

//--------------------------------------
function compute(num1, operator, num2) { // computes 2 numbers

    // status = "no";

    // REMOVES operator & both numbers used
    calc.shift(calc[0]);
    calc.shift(calc[1]);
    calc.shift(calc[2]);

    // ADDS result to FRONT of "calc" array
    calc.unshift(operations[operator](num1, num2));

    // status = "ready";
}
//---------------------------------------

if (calc.length == 3) {

    console.log(operations[calc[1]](calc[0], calc[2]));
}


else if (calc.length > 3) {

    while (calc.length > 1) {

        // if (status == "ready") {

            // PASSES two numbers & operator to be computed
            compute(calc[0], calc[1], calc[2]);
        // }
    }
}

console.log(calc);






};
