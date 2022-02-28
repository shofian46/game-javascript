/** @format */

function getPilihanKomputer() {
    const comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    // menentukan rules
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return comp == 'orang' ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return comp == 'gajah' ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return comp == 'orang' ? 'KALAH!' : 'MENANG';
}

const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click', function() {
    const pilihanComputer = getPilihanKomputer();
    const pilihanPlayer = pGajah.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

const pOrang = document.querySelector('.orang');
pOrang.addEventListener('click', function() {
    const pilihanComputer = getPilihanKomputer();
    const pilihanPlayer = pOrang.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

const pSemut = document.querySelector('.semut');
pSemut.addEventListener('click', function() {
    const pilihanComputer = getPilihanKomputer();
    const pilihanPlayer = pSemut.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});
// var tanya = true;
// while (tanya) {
//     // menangkap pilihan player
//     var p = prompt('pilih : gajah, semut, orang');

//     // menangkap pilihan computer
//     // membangkitkan bilangan random

//     // tampilkan hasilnya
//     alert('Kamu memilih : ' + p + ' dan Komputer memilih ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

//     tanya = confirm('Mau main lagi?');
// }

// alert('Terimakasih telah bermain');