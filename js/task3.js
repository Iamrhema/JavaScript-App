// id of the the pcae the select tag is stored
let htmlList = document.getElementById("names");
    /* iterates 25 time sin each iteration an option button is created and 
    appeneded to as select tag and the number of the itteration posistion is prinyed to the option tag*/
        for(i= 1;i<26;i++){
             let listItem = document.createElement('option');
            listItem.innerHTML = i;
            htmlList.appendChild(listItem);
         
        }
 
 
 
//  gets the the id where the the answers will be printed
 var inputLabel = document.getElementById('inputLabel');
     
    function pushBtn(obj) {
         
        var pushed = obj.innerHTML;
         
        if (pushed == '=') {
            // Calculate
            inputLabel.innerHTML = eval(inputLabel.innerHTML);
             
        } else if (pushed == 'AC') {
            // All Clear
            inputLabel.innerHTML = '0';
             
        } else {
            if (inputLabel.innerHTML == '0') {
                inputLabel.innerHTML = pushed;
                 
            } else {
                inputLabel.innerHTML += pushed;   
            }
        }
    }

    // converter
    // Rand converter 
    function euroConverter(){
        // taking in user inputing and multiplying the m to their valuse
        document.converter.dollar.value = document.converter.rand.value * 14.130109;
        document.converter.pound.value = document.converter.rand.value *17.845401;
        document.converter.euro.value = document.converter.rand.value * 15.968650;
        }
     

    // code for counter to check counter 
    // start the count value at zeo
    var countClicks = 0;
    
    // counter function
    function counter(){
        // creating a spce to write on file
        var added = document.getElementById("resultant").innerHTML;
        // adds every button clicked
        added++;
        // writes the number of buttons clicked
        document.getElementById("resultant").innerHTML = added;
    
    }

/*The code here in the bottom is just to better my work and show my items or programs i have created in a more suitable 
 manner for the user to know what is what*/

// show counter and hide everything
function showCounter(){
    document.getElementById("countercontainer").style.display = "block";
    document.getElementById("calculatorbox").style.display = "none";
    document.getElementById("converter").style.display = "none";
    document.getElementById("dropDown").style.display = "none";
  
}

// show calculator and hide everything
function showCalculator(){
    document.getElementById("calculatorbox").style.display = "block";
    document.getElementById("countercontainer").style.display = "none";
    document.getElementById("converter").style.display = "none";
    document.getElementById("dropDown").style.display = "none";
  
}

// show converter and hide everything
function showConverter(){
    document.getElementById("converter").style.display = "block";
    document.getElementById("countercontainer").style.display = "none";
    document.getElementById("calculatorbox").style.display = "none";
    document.getElementById("dropDown").style.display = "none";
  
}

// show drop-down and hide everything
function showDropdown(){
    document.getElementById("dropDown").style.display = "block";
    document.getElementById("converter").style.display = "none";
    document.getElementById("countercontainer").style.display = "none";
    document.getElementById("calculatorbox").style.display = "none";
    
}

function hidework(){
    document.getElementById("dropDown").style.display = "none";
    document.getElementById("converter").style.display = "none";
    document.getElementById("countercontainer").style.display = "none";
    document.getElementById("calculatorbox").style.display = "none";   
}

