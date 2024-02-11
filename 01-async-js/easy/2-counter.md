## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


function count(n){
    console.log(n);
    setTimeout(()=>count(n+1),1000);
}
count(1);



































































(Hint: setTimeout)