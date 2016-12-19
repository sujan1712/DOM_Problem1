 window.onload = function () {
      var button = document.getElementById("calc");      
      button.addEventListener("click", function (e) {
          console.log((document.getElementById("Percent").value).substr(0,2))
        document.getElementById("pOutput").innerHTML
      = 'you should tip $' +
       (parseFloat((document.getElementById("amt").value)) * 
       (document.getElementById("Percent").value).substr(0,2)* .01
       ).toFixed(2)
      })
 }