//CallBack Function

function calculate(x,y,callback) {
    console.log("กำลังคำนวณ...")
    setTimeout(()=> {
        const sum = x+y
        callback(sum)
    },3000)
}

// function display(result) {
//     console.log(`ผลบวก = ${result}`)
// }

// //Function callback
// calculate(200,50,display)

//ลดรูป function callback ตัด Display ทิ้ง
calculate(200,50,function(result){
    console.log(`ผลบวก = ${result}`)
})

