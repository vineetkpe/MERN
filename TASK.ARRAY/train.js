let names = ["Amit", "Neha", "Kiran", "Sunita", "Raj"];
let ages = [25, 17, 65, 34, 70];
let seats = ["12", "13", "14", "15", "16"];
let genders = ["M", "F", "M", "F", "M"];

let out = document.getElementById("out");

function showList(){
  out.innerText = "";
  for(let i=0;i<names.length;i++){
    out.innerText += "Passenger: " + names[i] + " | Age: " + ages[i] + " | Seat: " + seats[i] + " | Gender: " + genders[i] + "\n";
  }
}

function showSenior(){
  let s = ages.filter(a=>a>=60);
  out.innerText = "Senior Citizens: " + s.join(", ");
}

function showUpper(){
  let u = names.map(n=>n.toUpperCase());
  out.innerText = "Uppercase Names: " + u.join(", ");
}

function showTotal(){
  let t = ages.reduce((a,b)=>a+b,0);
  out.innerText = "Total Age: " + t;
}

function showTotalRev(){
  let t = ages.reduceRight((a,b)=>a+b,0);
  out.innerText = "Total Age Reverse: " + t;
}

function checkAdult(){
  let c = ages.every(a=>a>=18);
  out.innerText = "All Adults: " + c;
}

function checkMinor(){
  let c = ages.some(a=>a<18);
  out.innerText = "Any Minor: " + c;
}

function convertSeats(){
  let strSeats = "12,13,14,15";
  let arrSeats = Array.from(strSeats.split(","), Number);
  out.innerText = "Seat Numbers: " + arrSeats.join(", ");
}

function addExtra(){
  let e = [...names, "Rahul", "Sita"];
  out.innerText = "With Extra: " + e.join(", ");
}

function separate(){
  let [f,...r] = names;
  out.innerText = "First: " + f + "\nRest: " + r.join(", ");
}
