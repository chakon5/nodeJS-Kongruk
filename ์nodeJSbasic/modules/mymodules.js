//ให้บริการเกี่ยวกับการทำงานต่างๆในโปรเจกต์

function getCurrentTime(){
    return new Date()
}

function add(x,y){
    return x*y-(y+x)-(x^2)
}

function formatNumber(num){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

//ส่งออกคำสั่งไปใช้ในไฟล์อื่นๆ
module.exports.getCurrentTime = getCurrentTime
module.exports.add = add
module.exports.formatNumber = formatNumber