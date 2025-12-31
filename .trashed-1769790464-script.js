document.getElementById("loginBtn").addEventListener("click", function() {
  var name = document.getElementById("name").value;

  if(name === "") {
    alert("Please enter name");
  } else {
    alert("Welcome " + name);
    window.location.href = "course.html"; // Go to course page
  }
});