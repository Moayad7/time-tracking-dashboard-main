var a = document.getElementById("work-h1")
var b= document.getElementById("work-span")

var c = document.getElementById("play-h1")
var d= document.getElementById("play-span")

var e = document.getElementById("study-h1")
var f= document.getElementById("study-span")

var g = document.getElementById("exc-h1")
var h= document.getElementById("exc-span")

var i = document.getElementById("social-h1")
var j= document.getElementById("social-span")

var k = document.getElementById("care-h1")
var l= document.getElementById("care-span")


function data_base(x){
    if (x==1){
        a.innerHTML = "5hrs";
        b.innerHTML = "Last Day - 7hrs";
        c.innerHTML = "1hr";
        d.innerHTML = "Last Day - 2hrs";
        e.innerHTML = "0hrs";
        f.innerHTML = "Last Day - 1hrs";
        g.innerHTML = "1hrs";
        h.innerHTML = "Last Day - 1hrs";
        i.innerHTML = "1hrs";
        j.innerHTML = "Last Day - 3hrs";
        k.innerHTML = "0hrs";
        l.innerHTML = "Last Day - 1hrs";
        document.getElementById("1").classList = "active";
        document.getElementById("2").classList = "non-active";
        document.getElementById("3").classList = "non-active";
    }
    if (x==2){
        a.innerHTML = "32hrs";
        b.innerHTML = "Last Week - 36hrs";
        c.innerHTML = "10hrs";
        d.innerHTML = "Last Week - 8hrs";
        e.innerHTML = "4hrs";
        f.innerHTML = "Last Week - 7hrs";
        g.innerHTML = "4hrs";
        h.innerHTML = "Last Week - 5hrs";
        i.innerHTML = "5hrs";
        j.innerHTML = "Last Week - 10hrs";
        k.innerHTML = "2hrs";
        l.innerHTML = "Last Week - 2hrs";
        document.getElementById("1").classList = "non-active";
        document.getElementById("2").classList = "active";
        document.getElementById("3").classList = "non-active";
    }
    if (x==3){
        a.innerHTML = "103hrs";
        b.innerHTML = "Last Month - 128hrs";
        c.innerHTML = "23hrs";
        d.innerHTML = "Last Month - 29hrs";
        e.innerHTML = "13hrs";
        f.innerHTML = "Last Month - 19hrs";
        g.innerHTML = "11hrs";
        h.innerHTML = "Last Month - 18hrs";
        i.innerHTML = "21hrs";
        j.innerHTML = "Last Month - 23hrs";
        k.innerHTML = "7hrs";
        l.innerHTML = "Last Month - 11hrs";
        document.getElementById("1").classList = "non-active";
        document.getElementById("2").classList = "non-active";
        document.getElementById("3").classList = "active";
    }
}
