
var msc=$("#Usc").text();
var csc=$("#Csc").text();
msc=Number(msc);
csc=Number(csc);

function compMov(){
    var ar=["rock", "paper", "scissors"];
    var n=Math.random()*(ar.length-1);
    n=Math.round(n);
    return ar[n];
}

$("#rock").click(function(){
    var str=compMov();
    $("#1").attr("src","img/rock3.png");

    if(str==="scissors"){
        $("#2").attr("src","img/scissors2.png");
        $("#result").text("Congratulations you wins !!");
        msc++;
        $("#Usc").text(msc);

    }else if(str==="rock"){
        $("#2").attr("src","img/rock3.png");
        $("#result").text("Match Tied !!");

    }else{
        $("#2").attr("src","img/paper1.png");
        $("#result").text("Computer wins !!");
        csc++;
        $("#Csc").text(csc);
    }
});

$("#paper").click(function(){
    var str=compMov();
    $("#1").attr("src","img/paper1.png");

    if(str==="rock"){
        $("#2").attr("src","img/rock3.png");
        $("#result").text("Congratulations you wins !!");
        msc++;
        $("#Usc").text(msc);

    }else if(str==="paper"){
        $("#2").attr("src","img/paper1.png");
        $("#result").text("Match Tied !!");

    }else{
        $("#2").attr("src","img/scissors2.png");
        $("#result").text("Computer wins !!");
        csc++;
        $("#Csc").text(csc);
    }
});

$("#scissors").click(function(){
    var str=compMov();
    $("#1").attr("src","img/scissors2.png");

    if(str==="paper"){
        $("#2").attr("src","img/paper1.png");
        $("#result").text("Congratulations you wins !!");
        msc++;
        $("#Usc").text(msc);

    }else if(str==="scissors"){
        $("#2").attr("src","img/scissors2.png");
        $("#result").text("Match Tied !!");

    }else{
        $("#2").attr("src","img/rock3.png");
        $("#result").text("Computer wins !!");
        csc++;
        $("#Csc").text(csc);
    }
});
