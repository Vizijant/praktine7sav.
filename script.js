function sum(){
    var s1 = parseInt(document.getElementById("first").value);
    var s2 = parseInt(document.getElementById("second").value);
    var s3 = s1 + s2;
    var rez = document.getElementById("rez").innerText = s3;
  }
  document.getElementById("go").onclick = function() {
    sum();
  }
