function shuffle(array) {
var currentIndex = array.length, temporaryValue, randomIndex;

// While there remain elements to shuffle...
while (0 !== currentIndex) {

  // Pick a remaining element...
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;

  // And swap it with the current element.
  temporaryValue = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temporaryValue;
}

return array;
}

function get_Name(){
    var name=window.prompt("Enter thine name");
    return name;
}

function add_numbers(array){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        var j=i+1;
        var iD='btn'+j;
        var n=document.getElementById(iD);
        n.textContent=array[i];
    }
}
function clicked(id){
    var y=parseInt(document.getElementById(id).textContent);
    arr2.push(y);
    document.getElementById(id).style.backgroundColor="grey";
    document.getElementById(id).style.Color="black";
    x+=1;
    Compare(x);
}
function reshuffle(){
    // arr2=[];
    // for (let i = 0; i < 9; i++) {
    //     var j=i+1;
    //     var iD='btn'+j;
    //     document.getElementById(iD).style.backgroundColor="black";
    //     document.getElementById(iD).style.Color="white";

    // }
    intime=timer();
    Object.keys(window.localStorage).forEach((keys)=>{
        
    });
    location.reload();
    
}
function Compare(x){
    if(arr2[x-1]!=x){
        reshuffle();
    }
    if(x==9){
    var t=timer()-intime;
    var f=0,t2;
    Object.keys(window.localStorage).forEach((keys)=>{
        if(f==1){
            window.localStorage.setItem(keys,t2);
            t2=window.localStorage.getItem(keys);

        }
        if(window.localStorage.getItem(keys)>s){
            window.localStorage.setItem(keys,s);
            f=1;
            t2=window.localStorage.getItem(keys);
        }
        
    });
    var s="";
    s=s+Math.floor(t/60000)+":"+Math.floor(t/1000)+":"+t%1000;
    alert("You did it in "+s);
    }
}

function timer(){
    let now=new Date();
    return now.getTime();
}   

function ls(){
    var l=window.localStorage;
    for(let i=0;i<5;i++)
    l.setItem(i+1,10000000);
}

var arr2=[];
arr3=[1,2,3,4,5,6,7,8,9];
arr=shuffle(arr3)
add_numbers(arr);
var x=0;
var intime=timer();