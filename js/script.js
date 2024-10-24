document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const userInfo = document.querySelector(".user-info");

    const userName = prompt("Please enter your name:");
    document.getElementById("user-name").textContent = userName;

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !phone || !message) {
            alert("Semua bidang harus diisi!");
            return;
        }

        const userContent = `
            <p>Nama: ${name}</p>
            <p>Email: ${email}</p>
            <p>Nomor Telepon: ${phone}</p>
            <p>Pesan: ${message}</p>
        `;
        userInfo.innerHTML = userContent;

        form.reset();
    });
});

