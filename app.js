if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('./sw.js').catch(err => console.log(err)); });
}

const supabaseUrl = 'https://xmvjtrlktkihutvmpskq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhtdmp0cmxrdGtpaHV0dm1wc2txIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQzMTU1MTAsImV4cCI6MjEwOTg5MTUxMH0.m9rD8UtrL4FrIRsBerdcROouZMK812pJjpoSvTBQEzk';
supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// ==========================================
// DATA 57 AKUN (Berdasarkan PDF Adita Praja)
// ==========================================
const databaseUsers = [
    // 1. Akun Otoritas (6 Akun)
    { username: "admin_adita", password: "admin123", nama_lengkap: "Admin Sistem Web", role: "admin" },
    { username: "pradana_pa", password: "pramuka2026", nama_lengkap: "Kelvin Sutirta (Pradana Pa)", role: "admin" },
    { username: "pradana_pi", password: "pramuka2026", nama_lengkap: "Aurell Tatia (Pradana Pi)", role: "admin" },
    { username: "kerani_pa", password: "pramuka2026", nama_lengkap: "Moch Sigit (Kerani Pa)", role: "admin" },
    { username: "kerani_pi1", password: "pramuka2026", nama_lengkap: "Nabila Putri (Kerani Pi 1)", role: "admin" },
    { username: "kerani_pi2", password: "pramuka2026", nama_lengkap: "Selma Janiska (Kerani Pi 2)", role: "admin" },
    
    // 2. Akun Pribadi Pengurus Harian (12 Akun)
    { username: "kelvin_sutirta", password: "aditapraja", nama_lengkap: "Kelvin Sutirta Augusto W.", role: "anggota" },
    { username: "aurell_tatia", password: "aditapraja", nama_lengkap: "Aurell Tatia Diva Melody", role: "anggota" },
    { username: "moch_sigit", password: "aditapraja", nama_lengkap: "Moch Sigit Permadi", role: "anggota" },
    { username: "nabila_putri", password: "aditapraja", nama_lengkap: "Nabila Putri Refilia", role: "anggota" },
    { username: "selma_janiska", password: "aditapraja", nama_lengkap: "Selma Janiska Putri", role: "anggota" },
    { username: "m_rayhan", password: "aditapraja", nama_lengkap: "M. Rayhan Kautsar Adirafa", role: "anggota" },
    { username: "isma_gita", password: "aditapraja", nama_lengkap: "Isma Gita Aulia", role: "anggota" },
    { username: "zahra_naila", password: "aditapraja", nama_lengkap: "Zahra Naila Windri", role: "anggota" },
    { username: "amira_asyabilla", password: "aditapraja", nama_lengkap: "Amira Asyabilla Ramadhani", role: "anggota" },
    { username: "fradita_aulya", password: "aditapraja", nama_lengkap: "Fradita Aulya", role: "anggota" },
    { username: "fatich_faiklil", password: "aditapraja", nama_lengkap: "Fatich Faiklil Ramadhani", role: "anggota" },
    { username: "galuh_lyandhini", password: "aditapraja", nama_lengkap: "Galuh Lyandhini", role: "anggota" },

    // 3. Akun Anggota & Seksi Bidang (39 Akun)
    { username: "tri_cahya", password: "aditapraja", nama_lengkap: "Tri Cahya Mustika", role: "anggota" },
    { username: "nadia_octavia", password: "aditapraja", nama_lengkap: "Nadia Octavia", role: "anggota" },
    { username: "khoirotul_aini", password: "aditapraja", nama_lengkap: "Khoirotul Aini", role: "anggota" },
    { username: "wahyu_oktavia", password: "aditapraja", nama_lengkap: "Wahyu Oktavia", role: "anggota" },
    { username: "nanda_ayu", password: "aditapraja", nama_lengkap: "Nanda Ayu Pratiwi", role: "anggota" },
    { username: "juwita_rendrawati", password: "aditapraja", nama_lengkap: "Juwita Rendrawati", role: "anggota" },
    { username: "rahma_nur", password: "aditapraja", nama_lengkap: "Rahma Nur Aini Ajizah", role: "anggota" },
    { username: "zahra_aura", password: "aditapraja", nama_lengkap: "Zahra Aura Ma'wa", role: "anggota" },
    { username: "aliffa_aulia", password: "aditapraja", nama_lengkap: "Aliffa Aulia Putri", role: "anggota" },
    { username: "dwi_fatma", password: "aditapraja", nama_lengkap: "Dwi Fatma Yanti", role: "anggota" },
    { username: "siti_fatimah", password: "aditapraja", nama_lengkap: "Siti Fatimah", role: "anggota" },
    { username: "felina_septiana", password: "aditapraja", nama_lengkap: "Felina Septiana", role: "anggota" },
    { username: "nayla_priatika", password: "aditapraja", nama_lengkap: "Nayla Priatika", role: "anggota" },
    { username: "pritha_artha", password: "aditapraja", nama_lengkap: "Pritha Artha Dyah V.", role: "anggota" },
    { username: "yulia_ayuning", password: "aditapraja", nama_lengkap: "Yulia Ayuning Rahmawati", role: "anggota" },
    { username: "nurul_qomariyah", password: "aditapraja", nama_lengkap: "Nurul Qomariyah", role: "anggota" },
    { username: "shalsabilla_safra", password: "aditapraja", nama_lengkap: "Shalsabilla Safra Adzro", role: "anggota" },
    { username: "aulia_nawal", password: "aditapraja", nama_lengkap: "Aulia Nawal Najwa M.", role: "anggota" },
    { username: "cherin_azrillia", password: "aditapraja", nama_lengkap: "Cherin Azrillia A. A.", role: "anggota" },
    { username: "shafa_nabila", password: "aditapraja", nama_lengkap: "Shafa Nabila Eka Putri", role: "anggota" },
    { username: "carissa_dianita", password: "aditapraja", nama_lengkap: "Carissa Dianita Agiesta", role: "anggota" },
    { username: "tata_novita", password: "aditapraja", nama_lengkap: "Tata Novita Sari", role: "anggota" },
    { username: "putri_zahrotus", password: "aditapraja", nama_lengkap: "Putri Zahrotus Syifa", role: "anggota" },
    { username: "jenian_renata", password: "aditapraja", nama_lengkap: "Jenian Renata Setyowati", role: "anggota" },
    { username: "dinafi_ardillah", password: "aditapraja", nama_lengkap: "Dinafi Ardillah", role: "anggota" },
    { username: "shafina_rafeylah", password: "aditapraja", nama_lengkap: "Shafina Rafeylah R.", role: "anggota" },
    { username: "khoirotun_nisa", password: "aditapraja", nama_lengkap: "Khoirotun Nisa Putri", role: "anggota" },
    { username: "sri_dwiyanti", password: "aditapraja", nama_lengkap: "Sri Dwiyanti Agustin", role: "anggota" },
    { username: "sastadiva_lailatul", password: "aditapraja", nama_lengkap: "Sastadiva Lailatul S.", role: "anggota" },
    { username: "cintya_putri", password: "aditapraja", nama_lengkap: "Cintya Putri Rahayu", role: "anggota" },
    { username: "nana_wahyuni", password: "aditapraja", nama_lengkap: "Nana Wahyuni Rahayu", role: "anggota" },
    { username: "anisa_amelia", password: "aditapraja", nama_lengkap: "Anisa Amelia", role: "anggota" },
    { username: "rohmatul_azizah", password: "aditapraja", nama_lengkap: "Rohmatul Azizah", role: "anggota" },
    { username: "zakiya_azzahra", password: "aditapraja", nama_lengkap: "Zakiya Azzahra", role: "anggota" },
    { username: "fika_ramadhani", password: "aditapraja", nama_lengkap: "Fika Ramadhani", role: "anggota" },
    { username: "putri_meila", password: "aditapraja", nama_lengkap: "Putri Meila Fazsa", role: "anggota" },
    { username: "wayne_ditya", password: "aditapraja", nama_lengkap: "Wayne Ditya Pratiwi", role: "anggota" },
    { username: "raras_ngesti", password: "aditapraja", nama_lengkap: "Raras Ngesti Arena", role: "anggota" },
    { username: "maulida_citra", password: "aditapraja", nama_lengkap: "Maulida Citra Dwi P.", role: "anggota" }
];

let userLogin = JSON.parse(localStorage.getItem('userLogin'));
let currentLat = null, currentLng = null, sanggarLat = 0, sanggarLng = 0;
let maxRadius = 50, jamBuka = "00:00", jamTutup = "23:59";
let jamInterval, html5QrcodeScanner = null, grafikChart = null;
let currentAccuracy = 0; 

// ==========================================
// SISTEM ROUTING & INISIALISASI HALAMAN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    if (path.includes('anggota.html') && (!userLogin || userLogin.role !== 'anggota')) { window.location.href = 'index.html'; return; }
    if (path.includes('admin.html') && (!userLogin || userLogin.role !== 'admin')) { window.location.href = 'index.html'; return; }
    
    if ((path.includes('index.html') || path.endsWith('/')) && userLogin) {
        if (userLogin.role === 'admin') { window.location.href = 'admin.html'; } 
        else { window.location.href = 'anggota.html'; }
        return;
    }

    if (document.getElementById('halaman-admin')) {
        document.getElementById('nama-admin').innerText = userLogin.nama_lengkap;
        document.getElementById('user-info').innerText = userLogin.nama_lengkap;
        muatPengaturanSanggar();
        document.getElementById('filter-tanggal').value = new Date().toISOString().split('T')[0];
        muatDataAbsensiHarianCloud();
    }
    
    if (document.getElementById('halaman-anggota')) {
        document.getElementById('nama-anggota').innerText = userLogin.nama_lengkap;
        document.getElementById('wm-nama').innerText = userLogin.nama_lengkap;
        document.getElementById('user-info').innerText = userLogin.nama_lengkap;
        ambilLokasiSekarang();
        jalankanKamera();
        jalankanJamLive();
        muatRiwayatPribadi();
    }
});

function prosesLogin(event) {
    event.preventDefault();
    const userIn = document.getElementById('input-username').value;
    const passIn = document.getElementById('input-password').value;
    const userFound = databaseUsers.find(u => u.username === userIn && u.password === passIn);

    if (userFound) {
        localStorage.setItem('userLogin', JSON.stringify(userFound));
        if (userFound.role === 'admin') window.location.href = 'admin.html';
        else window.location.href = 'anggota.html';
    } else {
        alert("Username atau Password salah!");
    }
}

function logout() {
    localStorage.removeItem('userLogin');
    window.location.href = 'index.html';
}

// ==========================================
// FUNGSI KAMERA & WAKTU (ANGGOTA)
// ==========================================
async function jalankanKamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
        document.getElementById('kamera-stream').srcObject = stream;
        document.getElementById('teks-kamera').style.display = 'none';
    } catch (err) {
        document.getElementById('teks-kamera').innerText = "[ Izin Kamera Ditolak ]";
    }
}

function jalankanJamLive() {
    jamInterval = setInterval(() => {
        const skr = new Date();
        document.getElementById('wm-waktu').innerText = skr.toLocaleString('id-ID', {day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'});
        
        const jamSekarang = skr.getHours().toString().padStart(2, '0') + ":" + skr.getMinutes().toString().padStart(2, '0');
        const stWaktu = document.getElementById('status-waktu-alert'), btnAbsen = document.getElementById('btn-rekam-absen');

        if (jamSekarang >= jamBuka && jamSekarang <= jamTutup) {
            stWaktu.className = "alert alert-success"; stWaktu.innerHTML = `✅ Waktu Absen Buka (${jamBuka} - ${jamTutup})`;
            btnAbsen.disabled = false; btnAbsen.style.opacity = "1";
        } else {
            stWaktu.className = "alert alert-danger"; stWaktu.innerHTML = `⛔ Waktu Absen Tutup (Hanya buka: ${jamBuka} - ${jamTutup})`;
            btnAbsen.disabled = true; btnAbsen.style.opacity = "0.5";
        }
    }, 1000);
}

// ==========================================
// PENDETEKSI GPS & KIRIM ABSEN
// ==========================================
async function ambilLokasiSekarang() {
    const stGps = document.getElementById('status-gps-alert');
    await muatPengaturanSanggar();
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
            (pos) => {
                currentLat = pos.coords.latitude; currentLng = pos.coords.longitude;
                currentAccuracy = pos.coords.accuracy; 
                const jarak = hitungJarak(currentLat, currentLng, sanggarLat, sanggarLng);
                document.getElementById('wm-jarak').innerText = `Jarak: ${Math.round(jarak)}m`;

                if (currentAccuracy > 100) {
                    stGps.className = "alert alert-warning";
                    stGps.innerHTML = `⚠️ Sinyal GPS Lemah (Meleset ${Math.round(currentAccuracy)}m). Tolong cari area terbuka!`;
                } else if (jarak <= maxRadius) {
                    stGps.className = "alert alert-success";
                    stGps.innerHTML = `✅ GPS Sesuai. Jarak: ${Math.round(jarak)} Meter.`;
                } else {
                    stGps.className = "alert alert-danger";
                    stGps.innerHTML = `⛔ Jarak Terlalu Jauh: ${Math.round(jarak)} Meter (Maks ${maxRadius}m).`;
                }
            },
            (err) => { stGps.className = "alert alert-danger"; stGps.innerHTML = `⛔ GPS Gagal! Pastikan Izin Lokasi aktif.`; },
            { enableHighAccuracy: true, maximumAge: 0 } 
        );
    }
}

function hitungJarak(lat1, lon1, lat2, lon2) {
    const R = 6371e3, rad = Math.PI / 180;
    const a = Math.sin((lat2 - lat1)*rad/2)**2 + Math.cos(lat1*rad) * Math.cos(lat2*rad) * Math.sin((lon2 - lon1)*rad/2)**2;
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)));
}

async function simpanAbsenCloud() {
    if (!currentLat || !currentLng) { alert("Sinyal GPS belum didapat!"); return; }
    if (currentAccuracy > 100) { alert(`Akurasi GPS Anda terlalu buruk (Meleset ${Math.round(currentAccuracy)} meter). Pindah ke tempat terbuka agar absen valid.`); return; }
    
    const skr = new Date();
    const jamSkr = skr.getHours().toString().padStart(2, '0') + ":" + skr.getMinutes().toString().padStart(2, '0');
    if (jamSkr < jamBuka || jamSkr > jamTutup) { alert("Sedang bukan jam absen!"); return; }

    const jarak = hitungJarak(currentLat, currentLng, sanggarLat, sanggarLng);
    const statusAbsen = jarak <= maxRadius ? 'Hadir' : 'Di Luar Area';

    kirimKeDatabase(statusAbsen, Math.round(jarak));
}

async function simpanIzinCloud() {
    const alasan = prompt("Masukkan alasan izin (contoh: Sakit, Keluarga):");
    if (!alasan || alasan.trim() === "") return;
    let jrk = 0; if (currentLat && currentLng) jrk = Math.round(hitungJarak(currentLat, currentLng, sanggarLat, sanggarLng));
    kirimKeDatabase("Izin - " + alasan.trim(), jrk);
}

async function kirimKeDatabase(statusTeks, jarakMeter) {
    const video = document.getElementById('kamera-stream');
    let fotoBase64 = "";
    if (video && video.videoWidth > 0) {
        const cvs = document.createElement('canvas');
        cvs.width = 320; cvs.height = 240;
        cvs.getContext('2d').drawImage(video, 0, 0, cvs.width, cvs.height);
        fotoBase64 = cvs.toDataURL('image/jpeg', 0.6); 
    }

    const { error } = await supabase.from('riwayat_absensi').insert([{
        username: userLogin.username, nama_lengkap: userLogin.nama_lengkap,
        jarak_meter: jarakMeter, status: statusTeks,
        tanggal_absen: new Date().toISOString().split('T')[0], foto_base64: fotoBase64
    }]);

    if (error) alert("Gagal mengirim data!"); 
    else { alert("Berhasil! Data absensi Anda tersimpan."); muatRiwayatPribadi(); }
}

// ==========================================
// FITUR QR CODE
// ==========================================
function tampilkanQRAdmin() {
    const tglHariIni = new Date().toISOString().split('T')[0];
    const kodeRahasia = "ADITA_PRAJA_" + tglHariIni;
    QRCode.toCanvas(document.getElementById('qr-canvas'), kodeRahasia, function (error) {
        if (error) console.error(error);
        document.getElementById('qr-admin-container').style.display = 'block';
    });
}
function bukaScannerQR() {
    document.getElementById('qr-reader-container').style.display = 'block';
    if(!html5QrcodeScanner) {
        html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: {width: 250, height: 250} }, false);
        html5QrcodeScanner.render((decodedText, decodedResult) => {
            const tglHariIni = new Date().toISOString().split('T')[0];
            if (decodedText === "ADITA_PRAJA_" + tglHariIni) {
                tutupScannerQR();
                alert("QR Code Valid! Memproses Absensi Cadangan...");
                kirimKeDatabase("Hadir (QR Code)", 0);
            } else {
                alert("QR Code Kadaluarsa atau Tidak Valid!");
            }
        }, (err) => {});
    }
}
function tutupScannerQR() {
    if(html5QrcodeScanner) { html5QrcodeScanner.clear(); html5QrcodeScanner = null; }
    document.getElementById('qr-reader-container').style.display = 'none';
}

// ==========================================
// FITUR ADMIN (PENGATURAN & EXCEL)
// ==========================================
async function muatPengaturanSanggar() {
    const { data } = await supabase.from('setting_lokasi').select('*').eq('id', 1).single();
    if (data) {
        sanggarLat = data.latitude; sanggarLng = data.longitude; maxRadius = data.max_radius_meter;
        jamBuka = data.waktu_mulai ? data.waktu_mulai.substring(0,5) : "00:00";
        jamTutup = data.waktu_selesai ? data.waktu_selesai.substring(0,5) : "23:59";
        if (document.getElementById('halaman-admin')) {
            document.getElementById('cfg-lat').value = data.latitude; document.getElementById('cfg-lng').value = data.longitude;
            document.getElementById('cfg-radius').value = data.max_radius_meter;
            document.getElementById('cfg-jam-mulai').value = jamBuka; document.getElementById('cfg-jam-selesai').value = jamTutup;
        }
    }
}

async function simpanPengaturanRadiusCloud(e) {
    e.preventDefault();
    await supabase.from('setting_lokasi').update({ 
        latitude: document.getElementById('cfg-lat').value, longitude: document.getElementById('cfg-lng').value, 
        max_radius_meter: document.getElementById('cfg-radius').value, waktu_mulai: document.getElementById('cfg-jam-mulai').value, waktu_selesai: document.getElementById('cfg-jam-selesai').value
    }).eq('id', 1);
    alert("Pengaturan Tersimpan!"); muatPengaturanSanggar();
}

async function muatRiwayatPribadi() {
    const { data } = await supabase.from('riwayat_absensi').select('*').eq('username', userLogin.username).order('waktu_absen', { ascending: false }).limit(5);
    const tbody = document.getElementById('isi-riwayat-pribadi');
    if (data && data.length > 0) {
        tbody.innerHTML = data.map(a => `<tr><td>${new Date(a.waktu_absen).toLocaleDateString('id-ID')} <br> <small>${new Date(a.waktu_absen).toLocaleTimeString('id-ID')}</small></td><td><span class="badge">${a.status}</span> <br> <small>${a.jarak_meter} m</small></td></tr>`).join('');
    } else tbody.innerHTML = `<tr><td colspan="2" class="text-center">Belum ada data.</td></tr>`;
}

async function muatDataAbsensiHarianCloud() {
    const tgl = document.getElementById('filter-tanggal').value; if (!tgl) return;
    const { data } = await supabase.from('riwayat_absensi').select('*').eq('tanggal_absen', tgl).order('waktu_absen', { ascending: true });
    
    const tbody = document.getElementById('isi-rekap-absen');
    let totalHadir = 0, totalIzin = 0, totalLuar = 0;

    if (data && data.length > 0) {
        tbody.innerHTML = data.map(a => {
            if (a.status.includes('Hadir')) totalHadir++;
            else if (a.status.includes('Izin')) totalIzin++;
            else totalLuar++;

            const foto = a.foto_base64 ? `<img src="${a.foto_base64}" width="40" style="border-radius:5px;cursor:pointer;" onclick="window.open('${a.foto_base64}')">` : '-';
            return `<tr><td>${new Date(a.waktu_absen).toLocaleTimeString('id-ID')}</td><td><b>${a.nama_lengkap}</b></td><td>${a.jarak_meter}m</td><td><span class="badge">${a.status}</span></td><td>${foto}</td></tr>`;
        }).join('');
    } else tbody.innerHTML = `<tr><td colspan="5" class="text-center">Kosong.</td></tr>`;
    
    if (grafikChart) grafikChart.destroy();
    grafikChart = new Chart(document.getElementById('chart-kehadiran').getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Hadir', 'Izin / Sakit', 'Di Luar Area / Gagal'],
            datasets: [{ data: [totalHadir, totalIzin, totalLuar], backgroundColor: ['#2E8B57', '#F57F17', '#D32F2F'] }]
        },
        options: { plugins: { legend: { position: 'bottom' } } }
    });
}

function exportExcel() {
    const table = document.getElementById("tabel-rekap");
    const wb = XLSX.utils.table_to_book(table, { sheet: "Absensi_Adita_Praja" });
    XLSX.writeFile(wb, `Rekap_Absensi_${document.getElementById('filter-tanggal').value}.xlsx`);
}
