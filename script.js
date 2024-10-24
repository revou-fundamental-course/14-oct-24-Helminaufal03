document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const userInfo = document.querySelector(".user-info");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah form dari pengiriman default

        const name = document.getElementById("name").value;
        const dob = document.getElementById("dob").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById("message").value;

        const userContent = `
            <p>Nama: ${name}</p>
            <p>Tanggal Lahir: ${dob}</p>
            <p>Jenis Kelamin: ${gender === "male" ? "Laki-Laki" : "Perempuan"}</p>
            <p>Pesan: ${message}</p>
        `;

        userInfo.innerHTML = userContent;
    });
});
