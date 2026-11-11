// ==========================================
// KONFIGURASI KONEKSI DATABASE SUPABASE
// ==========================================
// GANTI DENGAN URL & KEY DARI DASHBOARD SUPABASE ANDA
const SUPABASE_URL = 'https://xyzabcdefg.supabase.co'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6...'; 
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// DAFTAR 57 AKUN
const databaseUsers = [
    { username: "admin_adita", password: "admin123", role: "Pemantau", namaLengkap: "Admin Sistem Web" },
    { username: "pradana_pa", password: "pramuka2026", role: "Pemantau", namaLengkap: "Kelvin Sutirta (Pemantau)" },
    { username: "pradana_pi", password: "pramuka2026", role: "Pemantau", namaLengkap: "Aurell Tatia (Pemantau)" },
    { username: "kelvin_sutirta", password: "aditapraja", role: "Anggota", namaLengkap: "Kelvin Sutirta Augusto W." },
    { username: "aurell_tatia", password: "aditapraja", role: "Anggota", namaLengkap: "Aurell Tatia Diva Melody" },
    { username: "tri_cahya", password: "aditapraja", role: "Anggota", namaLengkap: "Tri Cahya Mustika" }
    // ... (Tambahkan daftar akun lengkap di sini)
];

let geofenceCloud = { lat: -8.167852, lng: 112.698943, maxRadiusMeter: 50 };
let koordinatRealUser = null;
let watchGpsId = null;

window.onload = function() {
    muatPengaturanLokasiDariCloud();
    cekSesiTersimpan();
    setInterval(updateJamKamera, 1000); 
};

// BACA SETTINGAN LOKASI DARI DATABASE CLOUD
async function muatPengaturanLokasiDariCloud() {
    const { data, error } = await supabase
        .from('setting_lokasi')
        .select('*')
        .eq('id', 1)
        .single();

    if (data) {
        geofenceCloud = {
            lat: parseFloat(data.latitude),
            lng: parseFloat(data.longitude),
            maxRadiusMeter: parseInt(data.max_radius_meter)
        };
        document.getElementById("cfg-lat").value = geofenceCloud.lat;
        document.getElementById("cfg-lng").value = geofenceCloud.lng;
        document.getElementById("cfg-radius").value = geofenceCloud.maxRadiusMeter;
    }
}

// SIMPAN SETTINGAN LOKASI BARU KE DATABASE CLOUD
async function simpanPengaturanRadiusCloud(event) {
    event.preventDefault();
    const lat = parseFloat(document.getElementById("cfg-lat").value);
    const lng = parseFloat(document.getElementById("cfg-lng").value);
    const radius = parseInt(document.getElementById("cfg-radius").value);

    const { error } = await supabase
        .from('setting_lokasi')
        .update({ latitude: lat, longitude: lng, max_radius_meter: radius })
        .eq('id', 1);

    if (error) {
        alert("❌ Gagal menyimpan ke Database Cloud: " + error.message);
    } else {
        alert("✅ Pengaturan Lokasi Sanggar BERHASIL disimpan ke Server Cloud!");
        muatPengaturanLokasiDariCloud();
    }
}

// SIMPAN DATA ABSENSI KE DATABASE CLOUD
async function simpanAbsenCloud() {
    if(!koordinatRealUser) {
        alert("Sistem belum memperoleh GPS Anda. Pastikan Izin Lokasi diizinkan.");
        return;
    }

    const jarakMeter = hitungJarakMeter(koordinatRealUser.lat, koordinatRealUser.lng, geofenceCloud.lat, geofenceCloud.lng);

    if (jarakMeter > geofenceCloud.maxRadiusMeter) {
        alert(`❌ ABSEN DITOLAK!\nJarak Anda ${jarakMeter}m dari Sanggar (Maks: ${geofenceCloud.maxRadiusMeter}m).`);
        return;
    }

    const akunSesi = JSON.parse(localStorage.getItem("sesiPramuka"));

    const { error } = await supabase
        .from('riwayat_absensi')
        .insert([
            {
                username: akunSesi.username,
                nama_lengkap: akunSesi.namaLengkap,
                jarak_meter: jarakMeter,
                status: 'Hadir (GPS Valid)'
            }
        ]);

    if (error) {
        alert("Gagal mengirim ke Server: " + error.message);
    } else {
        alert(`📸 ABSENSI SUCCESS!\nData berhasil masuk ke Server Cloud pada jarak ${jarakMeter}m.`);
        muatRiwayatPribadiCloud();
    }
}

// BACA ABSENSI ANGGOTA PRIBADI DARI CLOUD
async function muatRiwayatPribadiCloud() {
    const akunSesi = JSON.parse(localStorage.getItem("sesiPramuka"));
    const tbody = document.getElementById("isi-riwayat-pribadi");
    tbody.innerHTML = "<tr><td colspan='2'>Memuat data dari cloud...</td></tr>";

    const { data, error } = await supabase
        .from('riwayat_absensi')
        .select('*')
        .eq('username', akunSesi.username)
        .order('waktu_absen', { ascending: false });

    tbody.innerHTML = "";
    if(!data || data.length === 0) {
        tbody.innerHTML = "<tr><td colspan='2' style='text-align:center;'>Belum ada data absensi di cloud.</td></tr>";
        return;
    }

    data.forEach(absen => {
        const w = new Date(absen.waktu_absen).toLocaleString("id-ID");
        tbody.innerHTML += `<tr><td>${w} WIB</td><td><span class="badge">${absen.status} (${absen.jarak_meter}m)</span></td></tr>`;
    });
}

// BACA ABSENSI SELURUH ANGGOTA (REKAP ADMIN) DARI CLOUD
async function muatDataAbsensiHarianCloud() {
    const tglDipilih = document.getElementById("filter-tanggal").value;
    const tbody = document.getElementById("isi-rekap-absen");
    tbody.innerHTML = "<tr><td colspan='4'>Memuat data server...</td></tr>";

    const { data, error } = await supabase
        .from('riwayat_absensi')
        .select('*')
        .eq('tanggal_absen', tglDipilih)
        .order('waktu_absen', { ascending: false });

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

// FUNGSI UTILITAS GPS & SISTEM LOGIN
function hitungJarakMeter(lat1, lon1, lat2, lon2) {
    const R = 6371e3; const rad = Math.PI / 180;
    const dLat = (lat2 - lat1) * rad; const dLon = (lon2 - lon1) * rad;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLon/2) * Math.sin(dLon/2);
    return Math.round(R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)))); 
}

function mulaiLacakGPS() {
    const alertBox = document.getElementById("status-gps-alert");
    if (navigator.geolocation) {
        watchGpsId = navigator.geolocation.watchPosition(
            (pos) => {
                koordinatRealUser = { lat: pos.coords.latitude, lng: pos.coords.longitude };
                const jrk = hitungJarakMeter(koordinatRealUser.lat, koordinatRealUser.lng, geofenceCloud.lat, geofenceCloud.lng);
                document.getElementById("wm-jarak").innerText = `Jarak: ${jrk}m`;
                if(jrk <= geofenceCloud.maxRadiusMeter) {
                    alertBox.innerHTML = `✅ <b>LOKASI SESUAI:</b> Jarak ${jrk} meter dari Sanggar.`; alertBox.style.backgroundColor = "#c8e6c9";
                } else {
                    alertBox.innerHTML = `❌ <b>DI LUAR JANGKAUAN:</b> Jarak ${jrk} meter (Maks: ${geofenceCloud.maxRadiusMeter}m).`; alertBox.style.backgroundColor = "#ffccbc";
                }
            },
            (err) => { alertBox.innerHTML = "⚠️ Sinyal GPS tidak ditemukan atau Akses ditolak."; }
        );
    }
}

function prosesLogin(e) {
    e.preventDefault();
    const u = document.getElementById("input-username").value.toLowerCase();
    const p = document.getElementById("input-password").value;
    const user = databaseUsers.find(x => x.username === u && x.password === p);
    if(user) { localStorage.setItem("sesiPramuka", JSON.stringify(user)); cekSesiTersimpan(); } 
    else { alert("Username/Password Salah!"); }
}

function logout() { localStorage.removeItem("sesiPramuka"); if(watchGpsId) navigator.geolocation.clearWatch(watchGpsId); cekSesiTersimpan(); }

function cekSesiTersimpan() {
    const s = localStorage.getItem("sesiPramuka");
    document.getElementById("halaman-login").classList.remove("active-page");
    document.getElementById("halaman-anggota").classList.remove("active-page");
    document.getElementById("halaman-admin").classList.remove("active-page");
    document.getElementById("navbar").style.display = "none";
    document.getElementById("pengaturan-radius-card").style.display = "none";

    if(!s) { document.getElementById("halaman-login").classList.add("active-page"); }
    else {
        const user = JSON.parse(s);
        document.getElementById("navbar").style.display = "flex";
        document.getElementById("user-info").innerText = user.namaLengkap;
        if(user.role === "Pemantau") {
            document.getElementById("halaman-admin").classList.add("active-page");
            document.getElementById("nama-admin").innerText = user.namaLengkap;
            if(user.username === "admin_adita" || user.username === "pradana_pa" || user.username === "pradana_pi") {
                document.getElementById("pengaturan-radius-card").style.display = "block";
            }
            const today = new Date().toISOString().split('T')[0];
            document.getElementById("filter-tanggal").value = today;
            muatDataAbsensiHarianCloud();
        } else {
            document.getElementById("halaman-anggota").classList.add("active-page");
            document.getElementById("nama-anggota").innerText = user.namaLengkap;
            document.getElementById("wm-nama").innerText = user.namaLengkap;
            mulaiLacakGPS();
            muatRiwayatPribadiCloud();
        }
    }
}

function updateJamKamera() {
    const elem = document.getElementById("wm-waktu");
    if(elem) elem.innerText = new Date().toLocaleString("id-ID") + " WIB";
}
