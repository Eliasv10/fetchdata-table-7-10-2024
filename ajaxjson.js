function change(){
    console.log("btn clicked");

// step1
var xhht =new XMLHttpRequest();
//step2
xhht.open("GET","data.json",true);
//steo3
xhht.send();
//step4
xhht.onreadystatechange= function(){
if(this.readyState == 4 && this.status==200){
    console.log(this.responseText)
    var data= JSON.parse(this.responseText)
    let val ="";
    for (let i = 0; i<data.length; i++) {
        val +=`<li>${data[i].name},${data[i].age}</li>`
        document.getElementById('tx1').innerHTML=val
        
    }
    
}
}
}


