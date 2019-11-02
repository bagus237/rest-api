// let mahasiswa = {
//     Nama : "bagus",
//     Nim : "1512500941",
//     Email: "bagus237@gmail.com"
// }

// console.log(JSON.stringify(mahasiswa));

//AJAX
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }
// xhr.open('GET', 'coba.json', true);
// xhr.send();

//Jquery
$.getJSON('coba.json', function (data){
    console.log(data);

});