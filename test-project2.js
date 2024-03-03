"use strict";



(function () {
  // Result message for Problems 1-3
  var p1Message = "SUCCESS";
  var p2Message = "SUCCESS";
  var p3Message = "SUCCESS";

  // Keep track of all the var statements
  var varDeclared = ["varDeclared", "p1Message", "p2Message", "p3Message"];

  // Utility functions
  function arraysAreTheSame(a1, a2) {
    if (!Array.isArray(a1) || !Array.isArray(a2) || a1.length !== a2.length) {
      return false;
    }
    for (var i = 0; i < a1.length; i += 1) {
      if (a1[i] !== a2[i]) {
        return false;
      }
    }
    return true;
  }

  // ************************* Test makeMultiFilter *************************

  if (typeof makeMultiFilter !== "function") {
    console.error(
      "makeMultiFilter is not a function",
      typeof makeMultiFilter
    );
    p1Message = "FAILURE";
  } else {
    var originalArray = [1, 2, 3];
    var filterFunc = window.makeMultiFilter(originalArray);

    var secondArray = [1, 2, 3, 4];
    var filterFuncTwo = window.makeMultiFilter(secondArray);

    // Rest of the script...

  }

  // Rest of the script...

  // *** Test to see if the symbols we defined are in the global address space ***

  varDeclared.forEach(function (sym) {
    if (window[sym] !== undefined) {
      console.error("Found my symbol", sym, "in DOM");
      p3Message = "FAILURE";
    }
  });
  console.log("Test Problem 3:", p3Message);

  // Store the result back into the global space under the object name
  // Project2Results
  window.Project2Results = {
    p1Message: p1Message,
    p2Message: p2Message,
    p3Message: p3Message,
  };

  // Once the browser loads our companion HTML in test-project2.html we
  // update it with the results of our testing. This code will make more
  // sense after the next project.
  window.onload = function () {
    document.getElementById("p1").innerHTML = p1Message;
    document.getElementById("p2").innerHTML = p2Message;
    document.getElementById("p3").innerHTML = p3Message;
  };
})();
