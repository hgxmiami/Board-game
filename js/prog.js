function dieRoll(){
    return Math.round(Math.random() * 11 + 1);

}

var bee = document.getElementById("red");
bee.onclick = function(){
    console.log(dieRoll());
    document.getElementById("toad").innerHTML=dieRoll();
};

$(".red").css("transform", "translateX(500px)");