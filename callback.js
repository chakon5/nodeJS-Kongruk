//Program Download File

const url1="kong.dev/file1.json"
const url2="shqwnn.dev/file2.json"
const url3="shqwnn.dev/file3.json"
const url4="shqwnn.dev/file4.json"
const url5="shqwnn.dev/file5.json"

function downloading(url,callback){
    console.log(`กำลังโหลดไฟล์จาก ${url}`)
    setTimeout(()=>{
        callback(url)
    },3000)
}

downloading(url1,function(result){
    console.log(`ดาวน์โหลด ${result} เรียบร้อยแล้ว!!`)
    downloading(url2,function(result){
        console.log(`ดาวน์โหลด ${result} เรียบร้อยแล้ว!!`)
        downloading(url3,function(result){
            console.log(`ดาวน์โหลด ${result} เรียบร้อยแล้ว!!`)
        })
    })
})