(function (){
  var name=["John","Emma","Monica","Chandler","Ross","Phoebe","Rachel","joe"];

for(var i = 0;i<name.length;i++){
  var first=name[i].charAt(0).toLowerCase();
  
  if(first==="j"){
    console.log("Goodbye "+name[i]);
  }
  else{
    console.log("Hello "+name[i]);
  }
}
})();