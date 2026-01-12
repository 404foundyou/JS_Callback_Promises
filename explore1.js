function sayHello(){
    console.log("I would like to say Hello");
}

setTimeout(function (){
    sayHello();
},3000);

for(let i = 0 ; i < 10 ; i++){
    console.log(i);
}
function add(a,b){
    console.log(`sum : ${a+b}`);
}
setTimeout(function(){
    add(4,8);
},4000)

for(let i = 0 ; i < 5 ; i++){
    console.log(i);
}