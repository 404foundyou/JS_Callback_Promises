// resolve and reject are callbacks provided by js


// let promise = new Promise((resolve , reject)=>{
//     console.log("I am a promise");
//     reject("Some error occured");
// })




// function getdata(dataid , getnext){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",dataid);
//             resolve("success");
//             if(getnext){
//                 getnext();
//             }
//         }, 3000);
//     })
// }


const getpromise = ()=>{
    return new Promise((resolve , reject)=>{
        console.log("I am a promise");
        reject("network error");
    });
}
let promise = getpromise();

promise.then((res)=>{
    console.log("promise is fulfilled",res);
})



promise.catch((err)=>{
    console.log("promise is rejected",err);
})