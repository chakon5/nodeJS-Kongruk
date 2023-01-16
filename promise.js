//Create Promise

const connect = true //Check connecting to Internet
const url1 = "shqwnn.dev/file1.json"
const url2 = "shqwnn.dev/file2.json"
const url3 = "shqwnn.dev/file3.json"
const url4 = "shqwnn.dev/file4.json"
const url5 = "shqwnn.dev/file5.json"

function downloading(url){
    return new Promise(function(resolve,reject){
        console.log(`กำลังโหลดไฟล์จาก ${url}`)
        setTimeout(()=>{
            if(connect){
                resolve(`โหลด ${url} เรียบร้อย`)
            }else{
                reject('เกิดข้อผิดพลาด')
            }
        },3000)
    })
}

//**Async & Await */

async function start(){
    console.log(await downloading(url1))
    console.log(await downloading(url2))
    console.log(await downloading(url3))
}

start()

// api ภาพสินค้า (backend) -> frontend (แสดงภาพในเว็ป)

// api (promise) -> (pending) -> รอข้อมูลมาครบ (await) -> แสดงผลภาพ

// loading .... -> แสดงภาพ

//Promise Hell

// downloading(url1).then(function(result){
//     console.log(result)
//     downloading(url2).then(function(result){
//         console.log(result)
//         downloading(url3).then(function(result){
//             console.log(result)
//         })
//     })
// })


//Promise Then
// downloading(url1).
// then(function(result){
//     console.log(result)
//     return downloading(url2)
// }).then(function(result){
//     console.log(result)
//     return downloading(url3)
// }).then(function(result){
//     console.log(result)
// })

