// Mengambil nilai dari input HTML
const namaLengkap = document.getElementById("name").value;
const email = document.getElementById("email").value;
const web = document.getElementById("p_web");
const seo = document.getElementById("p_seo");
const submit = document.getElementById("kirim_konsultasi");
const detail = document.getElementById("detail_project").value;

let project = [];

// Menambahkan event listener untuk klik pada elemen web
web.addEventListener("click", (e) => {
  // Menambahkan proyek ke dalam array project
  project.push("Web Development");
});

// Menambahkan event listener untuk klik pada elemen seo
seo.addEventListener("click", (e) => {
  // Menambahkan proyek ke dalam array project
  project.push("SEO");
});

// Membuat URL API WhatsApp dengan parameter yang diperlukan
const baseUrl = "https://wa.me/";
const phone = "62895348479595"; // Ganti dengan nomor telepon Anda
const text = `Halo, saya ${namaLengkap}. Saya tertarik dengan layanan ${project.join(
  ", "
)}. Email saya ${email}.`;

submit.addEventListener("click", () => {
  const whatsappUrl = `${baseUrl}/${phone}?text=${encodeURIComponent(`Halo RezaWP, saya ${namaLengkap}.
  Saya tertarik dengan layanan ${project.join(", ")}.
  Email saya ${email}.
  
  Detail Project : ${detail}`)}`;
  //   console.log(
  //     `Halo RezaWP, saya ${namaLengkap}.
  // Saya tertarik dengan layanan ${project.join(", ")}.
  // Email saya ${email}.`
  //   );
  //   console.log("nama", namaLengkap);
  //   console.log(whatsappUrl);
  window.open(whatsappUrl);
});
// Menggabungkan semua parameter dan membuka jendela baru untuk mengirim pesan di WhatsApp
