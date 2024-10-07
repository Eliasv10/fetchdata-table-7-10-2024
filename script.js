function change(){
    console.log("btn clicked");

// step1
var xhht =new XMLHttpRequest();
//step2
xhht.open("GET","data.txt",true);
//steo3
xhht.send();
//step4
xhht.onreadystatechange= function(){
if(this.readyState == 4 && this.status==200){
    console.log(this.responseText)
    document.getElementById('txt1').innerText=this.responseText
}
}
}
