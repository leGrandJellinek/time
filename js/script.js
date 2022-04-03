let sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    hourNumber = document.querySelector('.hours'),
    minuteNumber = document.querySelector('.minutes');

    
function clock() {
    let time = new Date();
    let seconds = time.getSeconds() * 6;
    let minutes = time.getMinutes() * 6;
    let hours = time.getHours() * 30;
    
    sec.style = `transform: rotate(${seconds}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    hour.style = `transform: rotate(${hours}deg)`;
    
    hourNumber.innerHTML = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
    minuteNumber.innerHTML = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    
    
    setTimeout(() => clock(),1000);
    
}
clock()



let links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');
    

for(let i = 0; i < links.length;i++) {
    links[i].addEventListener('click', function(event) {
        event.preventDefault()
        for(let x = 0; x < links.length;x++) {
            links[x].classList.remove('active');
            tabs[x].classList.remove('active');
        }
        links[i].classList.add('active');
        tabs[i].classList.add('active');
    })
}


/* Секундомер. */
let button = document.querySelector('.stopwatch__btn')
    ,znachok = document.querySelector('.tabsLink__span')
    ,minuts = document.querySelector('.stopwatch__minutes')
    ,hours = document.querySelector('.stopwatch__hours')
    ,second = document.querySelector('.stopwatch__seconds');
    let i = -1;
    let m = 0;
    let h = 0;
    let p;
    let lock;




    button.addEventListener('click', (() => {
        if(button.innerHTML == 'start'){
            stopWatch()
        }else if(button.innerHTML == 'STOP') {
            stopWatchStop()
        }else if(button.innerHTML == 'CLEAR'){
            clearStopWatch()
        }
    }))    

function stopWatch(){
    button.innerHTML = 'STOP';
        if(i < 60) {
            i++
            second.innerHTML = i;
           lock = setTimeout(() => stopWatch(), 1000)
            if(i == 60){
                i = 0;
                if(second.innerHTML == 60){
                    if(m < 60){
                        second.innerHTML = 0;
                        m++
                        minuts.innerHTML = m;
                    }
                }
                if(minuts.innerHTML == 60) {
                    if( h < 60) {
                        minuts.innerHTML = 0;
                        h++
                        hours.innerHTML = h;
                        m = 0;
                    }
                }
            }
        }
        znachok.classList.add('active')
}


function stopWatchStop(){
    button.innerHTML = 'CLEAR';
    clearTimeout(lock)
    znachok.classList.remove('active')
}


function clearStopWatch(){
    i = 0;
    m = 0;
    h = 0;
    second.innerHTML = 0;
    minuts.innerHTML = 0;
    hours.innerHTML = 0;
    button.innerHTML = 'start'
}
