function kalkulator() {
    let angka = document.querySelectorAll('input');
    let i1= angka[0].value ? parseInt(angka[0].value) : 0; //angka pertama
    let i2= angka[1].value ? parseInt(angka[1].value) : 0; //angka kedua
    angka[2].value= i1 + i2 ;
}
let tombol = document.querySelector('button');
tombol.addEventListener('click', kalkulator);