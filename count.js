if(sessionStorage.getItem("count") != null){
    document.getElementById("count").innerHTML = sessionStorage.getItem("count");
}else{
    sessionStorage.setItem("count",10);
    document.getElementById("count").innerHTML = sessionStorage.getItem("count");
}

function reduceCount(){
   var count = sessionStorage.getItem("count");
   count--;
   sessionStorage.setItem("count",count);
   document.getElementById("count").innerHTML = sessionStorage.getItem("count");
   if(count === 0){
      document.getElementById("count1").disabled = true;
   }
}
