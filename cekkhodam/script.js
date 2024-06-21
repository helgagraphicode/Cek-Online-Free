function cekKhodam() {
    let nama = document.getElementById('nama').value;
    let khodam = generateKhodam();
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>${nama}, khodam Anda adalah: <strong>${khodam.nama}</strong></p><p>${khodam.penjelasan}</p>`;
    resultDiv.classList.remove('visible');
    setTimeout(() => resultDiv.classList.add('visible'), 100);
}
function generateKhodam() {
    const khodams = [
        { nama: 'Kucing Paranormal', penjelasan: 'Khodam kucing yang pandai memindahkan barang-barang kecil dalam rumah.' },
        { nama: 'Gajah Juggling', penjelasan: 'Khodam gajah yang mahir dalam seni sirkus, terutama juggling.' },
        { nama: 'Anjing Penyanyi', penjelasan: 'Khodam anjing yang memiliki suara emas dan sering menghibur dengan nyanyian.' },
        { nama: 'Burung Sakti', penjelasan: 'Khodam burung yang memiliki kekuatan magis dan bisa memanipulasi cuaca.' },
        { nama: 'Ikan Berbicara', penjelasan: 'Khodam ikan yang bisa berkomunikasi dengan manusia dan memberikan nasihat bijak.' },
        { nama: 'Ular Pelukis', penjelasan: 'Khodam ular yang memiliki bakat seni lukis dan sering membuat lukisan abstrak.' },
        { nama: 'Kuda Terbang', penjelasan: 'Khodam kuda yang memiliki kemampuan untuk terbang dan membawa penumpang.' },
        { nama: 'Harimau Sembunyi', penjelasan: 'Khodam harimau yang ahli dalam bersembunyi dan menemukan tempat persembunyian yang aman.' },
        { nama: 'Burung Hantu Konsultan', penjelasan: 'Khodam burung hantu yang memiliki kebijaksanaan dan sering memberikan saran kepada yang membutuhkan.' },
        { nama: 'Singa Bersinar', penjelasan: 'Khodam singa yang tubuhnya bersinar di kegelapan dan memberikan keberanian kepada yang melihatnya.' },
        { nama: 'Kura-kura Pelukis', penjelasan: 'Khodam kura-kura yang mahir dalam melukis dengan menggunakan cangkangnya sebagai kanvas.' },
        { nama: 'Kambing Tukang Masak', penjelasan: 'Khodam kambing yang ahli dalam memasak berbagai hidangan lezat dan sehat.' },
        { nama: 'Kecoa Juru Kunci', penjelasan: 'Khodam kecoa yang memiliki kemampuan untuk membuka kunci pintu dan membantu dalam pencarian barang yang hilang.' },
        { nama: 'Kelinci Pencari Harta', penjelasan: 'Khodam kelinci yang terampil dalam mencari harta tersembunyi dan harta karun yang terkubur.' },
        { nama: 'Kupu-kupu Magis', penjelasan: 'Khodam kupu-kupu yang memiliki kekuatan magis untuk menyembuhkan dan memberikan kebahagiaan kepada yang melihatnya.' },
        { nama: 'Kerbau Tukang Berkebun', penjelasan: 'Khodam kerbau yang ahli dalam berkebun dan merawat tanaman dengan penuh kasih sayang.' },
        { nama: 'Cicak Pelawak', penjelasan: 'Khodam cicak yang memiliki kemampuan untuk membuat orang tertawa dengan lelucon-leluconnya yang kocak.' },
        { nama: 'Kanguru Pemadam Kebakaran', penjelasan: 'Khodam kanguru yang ahli dalam memadamkan kebakaran dan menyelamatkan orang-orang dari bahaya.' },
        { nama: 'Pinguin Penyelam', penjelasan: 'Khodam pinguin yang mahir dalam menyelam dan mencari makanan di dalam air.' },
        { nama: 'Zebra Pencari Jalan', penjelasan: 'Khodam zebra yang pandai dalam menemukan jalan keluar dari situasi sulit dan buntu.' },
        { nama: 'Gajah Berbicara', penjelasan: 'Khodam gajah yang memiliki kemampuan untuk berbicara dengan manusia dan memberikan nasehat bijak.' },
        // Tambahkan entri khodam baru di sini
        { nama: 'Koala Pelukis', penjelasan: 'Khodam koala yang memiliki bakat melukis dan sering membuat lukisan pemandangan alam yang indah.' },
        { nama: 'Panda Ahli Teknologi', penjelasan: 'Khodam panda yang ahli dalam teknologi dan sering menciptakan inovasi-inovasi baru dalam dunia teknologi.' },
        { nama: 'Cendrawasih Berdansa', penjelasan: 'Khodam cendrawasih yang memiliki keahlian dalam menari tarian tradisional yang indah.' },
        { nama: 'Jerapah Pelukis', penjelasan: 'Khodam jerapah yang memiliki bakat dalam seni lukis dan sering membuat lukisan alam yang memukau.' },
        { nama: 'Siamang Penyanyi', penjelasan: 'Khodam siamang yang memiliki suara merdu dan sering menghibur dengan nyanyiannya.' }
    ];
    return khodams[Math.floor(Math.random() * khodams.length)];
}
