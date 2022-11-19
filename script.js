function compute()
{
    // clear any previous result
    var result = document.getElementById("result");
    result.innerHTML = "";
    // get the principal amount for verification and calculating interest
    var principalElement = document.getElementById("principal");
    var principal = principalElement.value;
    // only need to check for numeric value since the form has number restriction
    if (principal <= 0) {
        alert("Enter a positive number for prinicpal amount.");
        principalElement.focus();
        // don't execute the rest of the function if there is an alert
        return;
    }
    // compute interest
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    // format the result programmatically
    var depositText = document.createTextNode("If you deposit ");
    var principalMark = document.createElement("mark");
    principalMark.textContent = principal;
    var interestRateText = document.createTextNode("at an interest rate of ");
    var rateMark = document.createElement("mark");
    rateMark.textContent = rate + "%";
    var amountText = document.createTextNode("you will receive an amount of ");
    var amountMark = document.createElement("mark");
    amountMark.textContent = interest;
    var yearText = document.createTextNode("in the year ");
    var yearMark = document.createElement("mark");
    yearMark.textContent = year;
    // insert the interset result elements into the DOM
    result.appendChild(depositText);
    result.appendChild(principalMark);
    result.appendChild(document.createTextNode(","));
    result.appendChild(document.createElement("br"));
    result.appendChild(interestRateText);
    result.appendChild(rateMark);
    result.appendChild(document.createTextNode(","));
    result.appendChild(document.createElement("br"));
    result.appendChild(amountText);
    result.appendChild(amountMark);
    result.appendChild(document.createTextNode(","));
    result.appendChild(document.createElement("br"));
    result.appendChild(yearText);
    result.appendChild(yearMark);
    result.appendChild(document.createTextNode("."));
    result.appendChild(document.createElement("br"));
}

// updates the displayed interest rate when the slider is moved
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        