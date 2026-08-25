const savedTheme= localStorage.getItem('theme');

if (savedTheme === 'dark'){
    document.documentElement.setAttribute ('data-theme', 'dark');
}

const darkbtn = document.getElementById('dark');

darkbtn.addEventListener('click', () => {
    console.log('yea');
    const currentTheme = document.documentElement.getAttribute ('data-theme');
    let targetTheme= 'light';

    if (currentTheme === 'dark'){
    document.documentElement.removeAttribute ('data-theme');
     targetTheme= 'light';
    } else{
    document.documentElement.setAttribute ('data-theme', 'dark');
     targetTheme= 'dark';
    }

    localStorage.setItem('theme', targetTheme);
});

pupils = document.querySelectorAll('.eye');

document.addEventListener('mousemove', function(e){
    console.log("Kursor di X:", e.clientX, "Y:", e.clientY);

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    pupils.forEach(function(pupil) {
        const rect = pupil.getBoundingClientRect();

        const eyeCenter_X = rect.left + (rect.width / 2);
        const eyeCenter_Y = rect.top + (rect.height / 2);

        const angle = Math.atan2(mouseY - eyeCenter_Y, mouseX - eyeCenter_X);
        const batasGerak = 12;
        
        const moveX = Math.cos(angle) * batasGerak;
        const moveY = Math.sin(angle) * batasGerak;

        pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// 1. Ambil elemen input nominal
const inputNominal = document.getElementById('nominal');

inputNominal.addEventListener('input', function(e) {
    let nilai = e.target.value;

    nilai = nilai.replace(/[^0-9]/g, '');

    if (nilai !== '') {
        e.target.value = new Intl.NumberFormat('id-ID').format(nilai);
    } else {
        e.target.value = '';
    }
});

let simpananpemasukan = 0;
let simpananpengeluaran = 0;

const btncatat = document.getElementById('catat');
const aktifitas = document.getElementById('aktifitas');
const nominal = document.getElementById('nominal');
const jenis = document.getElementById('jenis');
const totalmasuk = document.getElementById('totalmasuk');
const totalkeluar = document.getElementById('totalkeluar');

btncatat.addEventListener('click', function(){
    console.log("catat");
    let namaAktifitas = aktifitas.value;
    let isiNominal = nominal.value;
    let angkaBersih = isiNominal.replace(/[^0-9]/g, '');
    let angkaNominal = parseInt(angkaBersih);
    let jenisp = jenis.value;

    if (isNaN(nominal) || namaAktifitas === '' || jenis === 'pilih'){
        alert("mohon diisi semua");
        return;
    }
});