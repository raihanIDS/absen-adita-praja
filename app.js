// ==========================================
// 1. KONFIGURASI DATABASE SUPABASE
// ==========================================
// GANTI DENGAN URL & KEY DARI DASHBOARD SUPABASE ANDA
const SUPABASE_URL = 'https://xmvjtrlktkihutvmpskq.supabase.co'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhtdmp0cmxrdGtpaHV0dm1wc2txIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQzMTU1MTAsImV4cCI6MjEwOTg5MTUxMH0.m9rD8UtrL4FrIRsBerdcROouZMK812pJjpoSvTBQEzk'; 
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ==========================================
// 2. DATABASE PENGGUNA LOKAL (57 AKUN)
// ==========================================
const databaseUsers = [
    // --- AKUN PEMANTAU ---
    { username: "admin_adita", password: "admin123", role: "Pemantau", namaLengkap: "Admin Sistem Web" },
    { username: "pradana_pa", password: "pramuka2026", role: "Pemantau", namaLengkap: "Kelvin Sutirta (Pradana Pa)" },
    { username: "pradana_pi", password: "pramuka2026", role: "Pemantau", namaLengkap: "Aurell Tatia (Pradana Pi)" },
    { username: "kerani_pa", password: "pramuka2026", role: "Pemantau", namaLengkap: "Moch Sigit (Kerani Pa)" },
    { username: "kerani_pi1", password: "pramuka2026", role: "Pemantau", namaLengkap: "Nabila Putri (Kerani Pi 1)" },
    { username: "kerani_pi2", password: "pramuka2026", role: "Pemantau", namaLengkap: "Selma Janiska (Kerani Pi 2)" },

    // --- PENGURUS HARIAN (AKSES ABSEN) ---
    { username: "kelvin_sutirta", password: "aditapraja", role: "Anggota", namaLengkap: "Kelvin Sutirta Augusto W." },
    { username: "aurell_tatia", password: "aditapraja", role: "Anggota", namaLengkap: "Aurell Tatia Diva Melody" },
    { username: "moch_sigit", password: "aditapraja", role: "Anggota", namaLengkap: "Moch Sigit Permadi" },
    { username: "nabila_putri", password: "aditapraja", role: "Anggota", namaLengkap: "Nabila Putri Refilia" },
    { username: "selma_janiska", password: "aditapraja", role: "Anggota", namaLengkap: "Selma Janiska Putri" },
    { username: "m_rayhan", password: "aditapraja", role: "Anggota", namaLengkap: "M. Rayhan Kautsar Adirafa" },
    { username: "isma_gita", password: "aditapraja", role: "Anggota", namaLengkap: "Isma Gita Aulia" },
    { username: "zahra_naila", password: "aditapraja", role: "Anggota", namaLengkap: "Zahra Naila Windri" },
    { username: "amira_asyabilla", password: "aditapraja", role: "Anggota", namaLengkap: "Amira Asyabilla Ramadhani" },
    { username: "fradita_aulya", password: "aditapraja", role: "Anggota", namaLengkap: "Fradita Aulya" },
    { username: "fatich_faiklil", password: "aditapraja", role: "Anggota", namaLengkap: "Fatich Faiklil Ramadhani" },
    { username: "galuh_lyandhini", password: "aditapraja", role: "Anggota", namaLengkap: "Galuh Lyandhini" },

    // --- ANGGOTA SEKBID ---
    { username: "tri_cahya", password: "aditapraja", role: "Anggota", namaLengkap: "Tri Cahya Mustika" },
    { username: "nadia_octavia", password: "aditapraja", role: "Anggota", namaLengkap: "Nadia Octavia" },
    { username: "khoirotul_aini", password: "aditapraja", role: "Anggota", namaLengkap: "Khoirotul Aini" },
    { username: "wahyu_oktavia", password: "aditapraja", role: "Anggota", namaLengkap: "Wahyu Oktavia" },
    { username: "nanda_ayu", password: "aditapraja", role: "Anggota", namaLengkap: "Nanda Ayu Pratiwi" },
    { username: "juwita_rendrawati", password: "aditapraja", role: "Anggota", namaLengkap: "Juwita Rendrawati" },
    { username: "rahma_nur", password: "aditapraja", role: "Anggota", namaLengkap: "Rahma Nur Aini Ajizah" },
    { username: "zahra_aura", password: "aditapraja", role: "Anggota", namaLengkap: "Zahra Aura Ma'wa" },
    { username: "aliffa_aulia", password: "aditapraja", role: "Anggota", namaLengkap: "Aliffa Aulia Putri" },
    { username: "dwi_fatma", password: "aditapraja", role: "Anggota", namaLengkap: "Dwi Fatma Yanti" },
    { username: "siti_fatimah", password: "aditapraja", role: "Anggota", namaLengkap: "Siti Fatimah" },
    { username: "felina_septiana", password: "aditapraja", role: "Anggota", namaLengkap: "Felina Septiana" },
    { username: "nayla_priatika", password: "aditapraja", role: "Anggota", namaLengkap: "Nayla Priatika" },
    { username: "pritha_artha", password: "aditapraja", role: "Anggota", namaLengkap: "Pritha Artha Dyah V." },
    { username: "yulia_ayuning", password: "aditapraja", role: "Anggota", namaLengkap: "Yulia Ayuning Rahmawati" },
    { username: "nurul_qomariyah", password: "aditapraja", role: "Anggota", namaLengkap: "Nurul Qomariyah" },
    { username: "shalsabilla_safra", password: "aditapraja", role: "Anggota", namaLengkap: "Shalsabilla Safra Adzro" },
    { username: "aulia_nawal", password: "aditapraja", role: "Anggota", namaLengkap: "Aulia Nawal Najwa M." },
    { username: "cherin_azrillia", password: "aditapraja", role: "Anggota", namaLengkap: "Cherin Azrillia A. A." },
    { username: "shafa_nabila", password: "aditapraja", role: "Anggota", namaLengkap: "Shafa Nabila Eka Putri" },
    { username: "carissa_dianita", password: "aditapraja", role: "Anggota", namaLengkap: "Carissa Dianita Agiesta" },
    { username: "tata_novita", password: "aditapraja", role: "Anggota", namaLengkap: "Tata Novita Sari" },
    { username: "putri_zahrotus", password: "aditapraja", role: "Anggota", namaLengkap: "Putri Zahrotus Syifa" },
    { username: "jenian_renata", password: "aditapraja", role: "Anggota", namaLengkap: "Jenian Renata Setyowati" },
    { username: "dinafi_ardillah", password: "aditapraja", role: "Anggota", namaLengkap: "Dinafi Ardillah" },
    { username: "shafina_rafeylah", password: "aditapraja", role: "Anggota", namaLengkap: "Shafina Rafeylah R." },
    { username: "khoirotun_nisa", password: "aditapraja", role: "Anggota", namaLengkap: "Khoirotun Nisa Putri" },
    { username: "sri_dwiyanti", password: "aditapraja", role: "Anggota", namaLengkap: "Sri Dwiyanti Agustin" },
    { username: "sastadiva_lailatul", password: "aditapraja", role: "Anggota", namaLengkap: "Sastadiva Lailatul S." },
    { username: "cintya_putri", password: "aditapraja", role: "Anggota", namaLengkap: "Cintya Putri Rahayu" },
    { username: "nana_wahyuni", password: "aditapraja", role: "Anggota", namaLengkap: "Nana Wahyuni Rahayu" },
    { username: "anisa_amelia", password: "aditapraja", role: "Anggota", namaLengkap: "Anisa Amelia" },
    { username: "rohmatul_azizah", password: "aditapraja", role: "Anggota", namaLengkap: "Rohmatul Azizah" },
    { username: "zakiya_azzahra", password: "aditapraja", role: "Anggota", namaLengkap: "Zakiya Azzahra" },
    { username: "fika_ramadhani", password: "aditapraja", role: "Anggota", namaLengkap: "Fika Ramadhani" },
    { username: "putri_meila", password: "aditapraja", role: "Anggota", namaLengkap: "Putri Meila Fazsa" },
    { username: "wayne_ditya", password: "aditapraja", role: "Anggota", namaLengkap: "Wayne Ditya Pratiwi" },
    { username: "raras_ngesti", password: "aditapraja", role: "Anggota", namaLengkap: "Raras Ngesti Arena" },
    { username: "maulida_citra", password: "aditapraja", role: "Anggota", namaLengkap: "Maulida Citra Dwi P." }
];

// ==========================================
// 3. VARIABEL GLOBAL SISTEM
// ==========================================
let geofenceCloud = { lat: -8.167852, lng: 112.698943, maxRadiusMeter: 50 }; // Default (SMKN 1 Turen)
let koordinatRealUser = null;
let watchGpsId = null;

// ==========================================
// 4. INIT SAAT HALAMAN DIMUAT
// ==========================================
window.onload = function() {
    muatPengaturanLokasiDariCloud();
    cekSesiTersimpan();
    setInterval(updateJamKamera, 1000); 
};

// ==========================================
// 5. FUNGSI DATABASE (SUPABASE)
// ==========================================

// Membaca pengaturan lokasi sanggar dari database
async function muatPengaturanLokasiDariCloud() {
    try {
        const { data, error } = await supabase.from('setting_lokasi').select('*').eq('id', 1).single();
        if (data) {
            geofenceCloud = {
                lat: parseFloat(data.latitude),
                lng: parseFloat(data.longitude),
                maxRadiusMeter: parseInt(data.max_radius_meter)
            };
            if(document.getElementById("cfg-lat")) document.getElementById("cfg-lat").value = geofenceCloud.lat;
            if(document.getElementById("cfg-lng")) document.getElementById("cfg-lng").value = geofenceCloud.lng;
            if(document.getElementById("cfg-radius")) document.getElementById("cfg-radius").value = geofenceCloud.maxRadiusMeter;
        }
    } catch (e) {
        console.error("Gagal memuat setting lokasi:", e);
    }
}

// Menyimpan perubahan lokasi sanggar ke database (Khusus Pradana/Admin)
async function simpanPengaturanRadiusCloud(event) {
    event.preventDefault();
    const lat = parseFloat(document.getElementById("cfg-lat").value);
    const lng = parseFloat(document.getElementById("cfg-lng").value);
    const radius = parseInt(document.getElementById("cfg-radius").value);

    const { error } = await supabase.from('setting_lokasi').update({ latitude: lat, longitude: lng, max_radius_meter: radius }).eq('id', 1);

    if (error) {
        alert("❌ Gagal menyimpan ke Database Cloud: " + error.message);
    } else {
        alert("✅ Pengaturan Lokasi Sanggar BERHASIL disimpan ke Server Cloud!");
        muatPengaturanLokasiDariCloud();
    }
}

// Mengirim data absensi anggota ke database
async function simpanAbsenCloud() {
    if(!koordinatRealUser) {
        alert("Sistem belum memperoleh GPS Anda. Pastikan Izin Lokasi diizinkan pada browser/HP Anda.");
        return;
    }

    const jarakMeter = hitungJarakMeter(koordinatRealUser.lat, koordinatRealUser.lng, geofenceCloud.lat, geofenceCloud.lng);

    if (jarakMeter > geofenceCloud.maxRadiusMeter) {
        alert(`❌ ABSEN DITOLAK!\nJarak Anda ${jarakMeter}m dari Sanggar (Maksimal batas yang diizinkan: ${geofenceCloud.maxRadiusMeter}m).`);
        return;
    }

    const akunSesi = JSON.parse(localStorage.getItem("sesiPramuka"));
    if(!akunSesi) return;

    const { error } = await supabase.from('riwayat_absensi').insert([{
        username: akunSesi.username,
        nama_lengkap: akunSesi.namaLengkap,
        jarak_meter: jarakMeter,
        status: 'Hadir (GPS Valid)'
    }]);

    if (error) {
        alert("Gagal mengirim ke Server: " + error.message);
    } else {
        alert(`📸 ABSENSI SUCCESS!\nData berhasil masuk ke Server Cloud pada jarak ${jarakMeter}m.`);
        muatRiwayatPribadiCloud();
    }
}

// Memuat riwayat absensi pribadi (Dashboard Anggota)
async function muatRiwayatPribadiCloud() {
    const akunSesi = JSON.parse(localStorage.getItem("sesiPramuka"));
    const tbody = document.getElementById("isi-riwayat-pribadi");
    if(!tbody || !akunSesi) return;

    tbody.innerHTML = "<tr><td colspan='2'>Memuat data dari server cloud...</td></tr>";

    const { data, error } = await supabase.from('riwayat_absensi').select('*').eq('username', akunSesi.username).order('waktu_absen', { ascending: false });

    tbody.innerHTML = "";
    if(!data || data.length === 0) {
        tbody.innerHTML = "<tr><td colspan='2' style='text-align:center;'>Belum ada data absensi.</td></tr>";
        return;
    }

    data.forEach(absen => {
        const w = new Date(absen.waktu_absen).toLocaleString("id-ID");
        tbody.innerHTML += `<tr><td>${w} WIB</td><td><span class="badge">${absen.status} (${absen.jarak_meter}m)</span></td></tr>`;
    });
}

// Memuat rekap absen semua anggota (Dashboard Admin/Pemantau)
async function muatDataAbsensiHarianCloud() {
    const tglDipilih = document.getElementById("filter-tanggal").value;
    const tbody = document.getElementById("isi-rekap-absen");
    if(!tbody) return;

    tbody.innerHTML = "<tr><td colspan='4'>Memuat data server...</td></tr>";

    const { data, error } = await supabase.from('riwayat_absensi').select('*').eq('tanggal_absen', tglDipilih).order('waktu_absen', { ascending: false });

    tbody.innerHTML = "";
    document.getElementById("total-hadir").innerText = data ? data.length : 0;

    if(!data || data.length === 0) {
        tbody.innerHTML = "<tr><td colspan='4' style='text-align:center;'>Tidak ada data absensi pada tanggal ini.</td></tr>";
        return;
    }

    data.forEach(absen => {
        const jam = new Date(absen.waktu_absen).toLocaleTimeString("id-ID");
        tbody.innerHTML += `<tr><td><b>${jam}</b></td><td>${absen.nama_lengkap}</td><td>${absen.jarak_meter}m</td><td><span class="badge">${absen.status}</span></td></tr>`;
    });
}

// ==========================================
// 6. FUNGSI UTILITAS GPS & GEOFENCING
// ==========================================
function hitungJarakMeter(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Radius Bumi dalam meter
    const rad = Math.PI / 180;
    const dLat = (lat2 - lat1) * rad;
    const dLon = (lon2 - lon1) * rad;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLon/2) * Math.sin(dLon/2);
    return Math.round(R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)))); 
}

function mulaiLacakGPS() {
    const alertBox = document.getElementById("status-gps-alert");
    const labelJarak = document.getElementById("wm-jarak");
    
    if (navigator.geolocation) {
        watchGpsId = navigator.geolocation.watchPosition(
            (pos) => {
                koordinatRealUser = { lat: pos.coords.latitude, lng: pos.coords.longitude };
                const jrk = hitungJarakMeter(koordinatRealUser.lat, koordinatRealUser.lng, geofenceCloud.lat, geofenceCloud.lng);
                if(labelJarak) labelJarak.innerText = `Jarak: ${jrk}m`;
                
                if(jrk <= geofenceCloud.maxRadiusMeter) {
                    alertBox.innerHTML = `✅ <b>LOKASI SESUAI:</b> Jarak ${jrk} meter dari Sanggar.`; 
                    alertBox.style.backgroundColor = "#c8e6c9";
                    alertBox.style.color = "#1b5e20";
                } else {
                    alertBox.innerHTML = `❌ <b>DI LUAR JANGKAUAN:</b> Jarak ${jrk} meter (Maks: ${geofenceCloud.maxRadiusMeter}m).`; 
                    alertBox.style.backgroundColor = "#ffccbc";
                    alertBox.style.color = "#b71c1c";
                }
            },
            (err) => { 
                alertBox.innerHTML = "⚠️ Sinyal GPS tidak ditemukan. Pastikan GPS HP aktif dan izinkan browser mengakses lokasi."; 
                alertBox.style.backgroundColor = "#fff9c4";
            },
            { enableHighAccuracy: true, maximumAge: 0, timeout: 10000 }
        );
    } else {
        alertBox.innerHTML = "Browser Anda tidak mendukung fitur GPS.";
    }
}

// ==========================================
// 7. FUNGSI AUTENTIKASI (LOGIN/LOGOUT)
// ==========================================
function prosesLogin(e) {
    e.preventDefault();
    const u = document.getElementById("input-username").value.toLowerCase().trim();
    const p = document.getElementById("input-password").value.trim();
    
    const user = databaseUsers.find(x => x.username === u && x.password === p);
    if(user) { 
        localStorage.setItem("sesiPramuka", JSON.stringify(user)); 
        cekSesiTersimpan(); 
    } else { 
        alert("Username atau Password Salah! Periksa kembali penulisan huruf besar/kecil."); 
    }
}

function logout() { 
    localStorage.removeItem("sesiPramuka"); 
    if(watchGpsId) navigator.geolocation.clearWatch(watchGpsId); 
    cekSesiTersimpan(); 
    
    // Reset form login
    document.getElementById("input-username").value = "";
    document.getElementById("input-password").value = "";
}

function cekSesiTersimpan() {
    const s = localStorage.getItem("sesiPramuka");
    
    // Sembunyikan semua halaman terlebih dahulu
    document.getElementById("halaman-login").classList.remove("active-page");
    document.getElementById("halaman-anggota").classList.remove("active-page");
    document.getElementById("halaman-admin").classList.remove("active-page");
    document.getElementById("navbar").style.display = "none";
    
    if(document.getElementById("pengaturan-radius-card")) {
        document.getElementById("pengaturan-radius-card").style.display = "none";
    }

    if(!s) { 
        // Jika belum login
        document.getElementById("halaman-login").classList.add("active-page"); 
    } else {
        // Jika sudah login
        const user = JSON.parse(s);
        document.getElementById("navbar").style.display = "flex";
        document.getElementById("user-info").innerText = user.namaLengkap;

        if(user.role === "Pemantau") {
            document.getElementById("halaman-admin").classList.add("active-page");
            document.getElementById("nama-admin").innerText = user.namaLengkap;
            
            // Otoritas khusus Admin dan Pradana untuk ubah radius
            if(user.username === "admin_adita" || user.username === "pradana_pa" || user.username === "pradana_pi") {
                document.getElementById("pengaturan-radius-card").style.display = "block";
            }
            
            // Set tanggal hari ini & muat data
            const today = new Date().toLocaleString("en-CA", {timeZone: "Asia/Jakarta"}).split(',')[0];
            document.getElementById("filter-tanggal").value = today;
            muatDataAbsensiHarianCloud();
            
        } else {
            // Dashboard Anggota (Bisa absen)
            document.getElementById("halaman-anggota").classList.add("active-page");
            document.getElementById("nama-anggota").innerText = user.namaLengkap;
            if(document.getElementById("wm-nama")) document.getElementById("wm-nama").innerText = user.namaLengkap;
            
            mulaiLacakGPS();
            muatRiwayatPribadiCloud();
        }
    }
}

// ==========================================
// 8. FUNGSI UI / TAMPILAN
// ==========================================
function updateJamKamera() {
    const elem = document.getElementById("wm-waktu");
    if(elem) elem.innerText = new Date().toLocaleString("id-ID") + " WIB";
}
