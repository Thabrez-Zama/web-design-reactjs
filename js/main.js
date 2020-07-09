function loadjson(file,callback) {
 var xhr = new XMLHttpRequest();
 xhr.overrideMimeType("application/json");
 xhr.open("GET",file,true);
 xhr.onreadystatechange=function(){
  if(xhr.readyState === 4 && xhr.status == "200"){
   callback(xhr.responseText);
  }
 };
 xhr.send(null);
}

loadjson("data.json",function(text){
 var data = JSON.parse(text); // serialised data
 console.log(data);
 basic(data.details);
})
function basic(det){
var child1 = document.getElementById("child1");
console.log(det)
 var name = document.createElement("h4");
 name.textContent=det.name;
 child1.appendChild(name);

 // var email = document.createElement("a");
 // email.href="mailto:tabbu@gmail.com",
 // email.textContent=det.email;
 // child1.appendChild(email);

 // var number = document.createElement("h4");
 // number.textContent=det.number;
 // child1.appendChild(number);

 // var address = document.createElement("h2");
 // address1.textContent="Address";
 // child1.appendChild(address);

 // child1.appendChild(document.createElement("hr"));

 // var address1 = document.createElement("p");
 // address1.textContent=det.Address;
 // child1.appendChild(address1);




 //  var image = document.createElement("img");
 // image.src="single_user.png";
 // child1.appendChild(image);

}
