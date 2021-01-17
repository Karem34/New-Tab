// Javascript
let dark_mode = localStorage.getItem('dark_mode')
console.log(dark_mode)
let checkBox = document.getElementById("checkbox");

if (dark_mode === 'on') {
    document.querySelectorAll('*').forEach(x=>x.classList.add('dark-mode'))
    checkBox.checked = true
}
    document.getElementById("checkbox").addEventListener("click", darkMode);
    
    function darkMode() {

    if (checkBox.checked == true){
        document.querySelectorAll('*').forEach(x=>x.classList.add('dark-mode'))
        if (dark_mode !== 'on'){
            localStorage.setItem('dark_mode', 'on')
        }
        
    } else {
        document.querySelectorAll('*').forEach(x=>x.classList.remove('dark-mode'))
        localStorage.setItem('dark_mode', null)

    }
  }
  


function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s;
    document.getElementById("clock").innerText = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

