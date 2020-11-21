var myTimer;
   function clock() {
     myTimer = setInterval(myClock, 1000);
     var c = 300;

     function myClock() {
       document.getElementById("demo").innerHTML = --c;
       if (c == 0) {
         clearInterval(myTimer);
         alert("Reached zero");
       }
     }
   }

function chgButton() {
    document.getElementsByClassName("stbtn")[0].innerHTML = "Restart Timer";
}

function chgButton2() {
    document.getElementsByClassName("stbtn")[0].innerHTML = "Start Timer";
}


function changeLangEN() {
    document.getElementById("langChange").innerHTML = "A Pomodoro Timer for Language Learners";
}

function changeLangES() {
    document.getElementById("langChange").innerHTML = "Un temporizador Pomodoro para estudiantes de idiomas";
}

function changeLangJP() {
    document.getElementById("langChange").innerHTML = "言語学習者のためのポモドーロタイマー";
}
function changeLangKR() {
       document.getElementById("langChange").innerHTML = "언어 학습자를위한 포모 도로 타이머";
}

function changeLangCH() {
    document.getElementById("langChange").innerHTML = "面向語言學習者的番茄鐘";
}

function changeLangWH() {
    document.getElementById("langChange").innerHTML = "Amserydd Pomodoro ar gyfer Dysgwyr Iaith";
}

function changeLangHI() {
    document.getElementById("langChange").innerHTML = "भाषा सीखने वालों के लिए एक पोमोडोरो टाइमर";
}

function changeLangRU() {
    document.getElementById("langChange").innerHTML = "Таймер Pomodoro для изучающих язык";
}