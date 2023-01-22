let names=document.getElementById("myName");
let girilenAd=prompt("please your name enter")

names.innerText=(`${girilenAd}`)
    function time (){
        const date=new Date().toLocaleString("tr-TR");
        document.getElementById("myClock").innerHTML=date}

//     let Name = prompt("Lütfen isminizi giriniz.")
// let myName = document.querySelector("#myName")

// if (Name.length) {
//     myName.innerHTML= (Name);
// } else {
//     alert("Lütfen adınızı giriniz")
// }


// function tarihSaat () {
//     const date = new Date().toLocaleString('tr-TR');
//     document.getElementById("myClock").innerHTML = date
// }
//     setInterval(tarihSaat , 1000)

// let day = document.querySelector("#day")
// var tarih = new Date();
// var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    
// day.innerHTML = (gunler[tarih.getDay()]);