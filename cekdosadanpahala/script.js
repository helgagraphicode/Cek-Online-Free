function cekJumlah() {
    const name = document.getElementById('name').value;

    if (name.trim() === "") {
        alert("Masukkan nama terlebih dahulu!");
        return;
    }

    // Generate random numbers for pahala, dosa, and remaining life span
    const pahala = Math.floor(Math.random() * 1000) + 1;
    const dosa = Math.floor(Math.random() * 1000) + 1;
    const waktuHidup = Math.floor(Math.random() * 100) + 1; // assuming a max of 100 years

    // Display the results with animation
    const resultDiv = document.getElementById('result');
    const pahalaElement = document.getElementById('pahala');
    const dosaElement = document.getElementById('dosa');
    const waktuHidupElement = document.getElementById('waktuHidup');

    pahalaElement.textContent = `Jumlah Pahala: ${pahala}`;
    dosaElement.textContent = `Jumlah Dosa: ${dosa}`;
    waktuHidupElement.textContent = `Waktu Hidup Sisa: ${waktuHidup} tahun`;

    resultDiv.classList.remove('visible');
    setTimeout(() => resultDiv.classList.add('visible'), 100);
}
