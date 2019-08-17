window.onload = function () {
    //楼层跳转
    function flor(leftnavName,florName,leftnavliName){
        let nav = document.querySelector(leftnavName)
        let boxs = document.querySelectorAll(florName)
        let navleft = document.querySelectorAll(leftnavliName)
        let arr = []
        boxs.forEach(function (item) {
            arr.push(item.offsetTop)
        })

        window.onscroll = function () {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            let value = boxs[0].offsetTop-300
            if (scrollTop >value) {
                nav.style.transform = "scale(1,1)"
            }else {
                nav.style.transform = "scale(0,0)"
            }

        //实现楼层
            let index = arr.findIndex((item)=>{
                if(scrollTop-500 < item){
                    return item
                }
            })

            navleft.forEach(function (item,i) {
                if (i == index) {
                    item.style.backgroundColor = "#EA5F8D"
                }else{
                    item.style.backgroundColor = ""
                }
            })
        }

        navleft.forEach(function (item, index) {
            item.onclick = function () {
                let ele =document.documentElement || document.body
                animate(ele,{scrollTop:arr[index]},500)
            }
        })
    }
    flor("leftnavName",".florName","leftnavliName")
    
}