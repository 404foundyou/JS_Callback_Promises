// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data ");
//             resolve(200);
//         },2000);
//     })
// }

// async function getweatherdata(){
//     await api(); //1st
//     await api(); //1st
// }

// getweatherdata();


function get_data(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`data : ${id}`);
            resolve("success");
        },2000);
    })
}

async function get_all_data() {
    console.log("getting data 1...")
    await get_data(1);
    console.log("getting data 2...")
    await get_data(2);
    console.log("getting data 3...")
    await get_data(3);
    console.log("getting data 4...")
    await get_data(4);
    console.log("getting data 5...")
    await get_data(5);
}
get_all_data();