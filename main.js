let display = document.getElementById('display');

        let hour = 0;
        let min = 0;
        let sec = 0;
        let interval;

        function start() {
            let start = document.getElementById('start');
            start.style.display = 'none'
            let pause = document.getElementById('pause')
            pause.style.display = 'inline-flex'
            interval = setInterval(() => {
                sec++
                if (sec == 60) {
                    min++
                    sec = 0
                    if (min == 60) {
                        hour++
                        min = 0
                    }
                }

                display.innerHTML = (hour < 10 ? '0' + hour : hour) + ':'
                    + (min < 10 ? '0' + min : min) + ':'
                    + (sec < 10 ? '0' + sec : sec)
            }, 1000)
        }

        function pause() {
            let pause = document.getElementById('pause')
            pause.style.display = 'none'
            let continuar = document.getElementById('continue')
            continuar.style.display = 'inline-flex'
            clearInterval(interval)
        }

        function continuar(){
            let continuar = document.getElementById('continue')
            continuar.style.display = 'none'
            let pause = document.getElementById('pause')
            pause.style.display = 'inline-flex'
            


            interval = setInterval(() => {
                sec++
                if (sec == 60) {
                    min++
                    sec = 0
                    if (min == 60) {
                        hour++
                        min = 0
                    }
                }

                display.innerHTML = (hour < 10 ? '0' + hour : hour) + ':'
                    + (min < 10 ? '0' + min : min) + ':'
                    + (sec < 10 ? '0' + sec : sec)
            }, 1000)

        }

        function stop() {
            clearInterval(interval)
            hour = 0;
            min = 0;
            sec = 0;
            display.innerHTML = '00:00:00'
            let start = document.getElementById('start');
            start.style.display = 'inline-flex'
            let pause = document.getElementById('pause')
            pause.style.display = 'none'
            let continuar = document.getElementById('continue')
            continuar.style.display = 'none'           

        }
