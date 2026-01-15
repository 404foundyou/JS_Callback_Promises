// function sum(a,b){
//     console.log(a+b);
// }
// function subtract(a,b){
//     console.log(a-b);
// }
// function calculator(a,b , callback){
//     callback(a,b);

// }
// calculator(3,5,sum);
// calculator(9,5,subtract);

//Callback Hell
function getdata(id,getnext){
    setTimeout(() => {
        console.log("Data : ",id);
        if(getnext){
            getnext();
        }
    }, 2000);

};

console.log("getting data 1....");
getdata(1,()=>{
    console.log("getting data 2....");
    getdata(2,()=>{
        console.log("getting data 3....");
        getdata(3,()=>{
            console.log("getting data 4....");
            getdata(4,()=>{

            })
        })
    })
});
