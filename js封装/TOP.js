 // 置顶
    function TOP (topClassName){
        let Top = document.querySelector(topClassName)
        window.onscroll = function(){
            let scrollTop =document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTop >= 1000) {
                Top.style.display = "block"
            }else {
                Top.style.display = "none"
            }
        }
        Top.onclick = function () {
            let Tops = document.documentElement || document.body
            Tops.scrollTop = 0
            // animate(Tops,{scrollTop:0},1000)
            }
    }
   TOP("")