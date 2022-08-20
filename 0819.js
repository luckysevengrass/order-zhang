
var select = ["麥當勞", "蔡家", "悟饕", "自煮", "梁社漢", "八方雲集","7-11","王記","燒臘" ];
function pickClick(){
    var foodIndex = Math.floor(Math.random()*select.length);

    let resultElement = document.querySelector("#result")
    resultElement.innerHTML = select[foodIndex]
    // document.write()
}

