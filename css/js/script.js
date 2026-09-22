const tanggal = document.getElementById("tanggal");

if (tanggal) {

    const hari = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
    ];

    const bulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
    ];

    const sekarang = new Date();

    tanggal.innerHTML =
        hari[sekarang.getDay()] +
        ", " +
        sekarang.getDate() +
        " " +
        bulan[sekarang.getMonth()] +
        " " +
        sekarang.getFullYear();
}


function toggleMenu() {

    const nav =
        document.getElementById("navLinks");

    if (nav) {

        nav.classList.toggle("show");

    }

}