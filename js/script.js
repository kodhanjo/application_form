// akan
function Akan(){
  var day=document.getElementById("date").value;
  var month=document.getElementById("month").value;
  var year=document.getElementById("year").value;
  // var day=document.getElementById("day").value;
  if(day<1 || day>31)
  {
    alert("Enter valid date!");
  }
  else
  if(month<1 || month>12)
  {
    alert("Enter valid month!");
  }
  else
  if(year<1800 || year>2021)
  {
    alert("Enter valid year!");
  }
  else("Thank you!")
}

function myFunction(){
  var e = new Date(2001,8,26)
  var b = e.getDate();

  var maleAkan=["Kwasi", "Kwadwo","Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", ]
  var femaleAkan=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
// console.log(b)

}


