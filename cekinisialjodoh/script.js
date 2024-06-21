function cekInisial() {
    let nama = document.getElementById('nama').value;
    let inisial = generateInisial();
    document.getElementById('result').innerHTML = `<p>${nama}, inisial jodoh Anda adalah: <strong>${inisial}</strong></p>`;
    document.getElementById('result').classList.add('visible');
}

function generateInisial() {
    const huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return huruf.charAt(Math.floor(Math.random() * huruf.length));
}
