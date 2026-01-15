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


// const getpromise = ()=>{
//     return new Promise((resolve , reject)=>{
//         console.log("I am a promise");
//         reject("network error");
//     });
// }
// let promise = getpromise();

// promise.then((res)=>{
//     console.log("promise is fulfilled",res);
// })



// // promise.catch((err)=>{
// //     console.log("promise is rejected",err);
// // })

// function asyncfunction1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         }, 3000);
//     })
// }

// function asyncfunction2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("fulfilled");
//         }, 3000);
//     })
// }


// // The below code is example of promise chaining
// console.log("fetching data1....");
// let p1 = asyncfunction1();
// p1.then((res)=>{
//     console.log(res);
//     console.log("fetching data2....");
//     let p2 = asyncfunction2();
//     p2.then((res)=>{
//         console.log(res);
//     })

// })

function getdata(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`data = ${id}`);
            resolve("successfully fetched data");
        }, 2000);
    })
}

// console.log("fetching data 1.....");
// getdata(1).then((res)=>{
//     console.log(res);
//     console.log("fetching data 2....");
//     getdata(2).then((res)=>{
//         console.log(res);
//     })
// })

//Method 2 promise chaining

console.log("getting data...");
getdata(12).then(()=>{
    return getdata(24);
}).then(()=>{
    return getdata(45);
}).then((res)=>{
    console.log(res);
})