function dieRoll(){
    return Math.round(Math.random() * 11 + 1);

}

var bee = document.getElementById("btn");
bee.onclick = function(){
    console.log(dieRoll());
    document.getElementById("btn").innerHTML=dieRoll();
};

$(".red").css("transform", "translateX(500px)");