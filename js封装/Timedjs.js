function Time(hoursClassName,minClassName,secClassName){
        let hours = document.querySelector(hoursClassName)
        let min = document.querySelector(minClassName)
        let sec = document.querySelector(secClassName)
        function runtime() {
            let date = new Date();
            let now = date.getTime();
            let str="2019/8/17 18:00:00";
            let endDate = new Date(str);
            let end = endDate.getTime();
            let leftTime = end-now;
            let h,m,s;
            if (leftTime >= 0) {
                h = Math.floor(leftTime/1000/60/60%24)
                m = Math.floor(leftTime/1000/60%60)
                s = Math.floor(leftTime/1000%60)
            }
            hours.innerHTML = h
            min.innerHTML = m
            sec.innerHTML = s
            setTimeout(runtime,500)
        }
        setTimeout(runtime)
    }
    Time("","","")