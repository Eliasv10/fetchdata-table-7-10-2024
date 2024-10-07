function change(){
    console.log("btn clicked");

// step1
var xhht =new XMLHttpRequest();
//step2
xhht.open("GET","https://jsonplaceholder.typicode.com/users",true);
//steo3
xhht.send();
//step4
xhht.onreadystatechange= function(){
if(this.readyState == 4 && this.status==200){
    console.log(this.responseText)
    var data= JSON.parse(this.responseText)
    let val ="";
    for (let i = 0; i<data.length; i++) {
        val +=`<tr><td>${data[i].name}</td>
        <td>${data[i].username}</td>
        <td>${data[i].address.city}</td></tr>`
        document.getElementById('txxx').innerHTML=val
        
    }

    
}
}
}


