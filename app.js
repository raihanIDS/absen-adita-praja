if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('./sw.js').catch(err => console.log(err)); });
}

// 1. KONFIGURASI SUPABASE
const supabaseUrl = 'URL_SUPABASE_ANDA';
const supabaseKey = 'KEY_SUPABASE_ANDA';
supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// 2. DATA 57 AKUN
const databaseUsers = [
    { username: "admin_adita", password: "admin123", nama_lengkap: "Admin Sistem Web", role: "admin" },
    { username: "pradana_pa", password: "pramuka2026", nama_lengkap: "Kelvin Sutirta (Pradana Pa)", role: "admin" },
    { username: "pradana_pi", password: "pramuka2026", nama_lengkap: "Aurell Tatia (Pradana Pi)", role: "admin" },
    { username: "kerani_pa", password: "pramuka2026", nama_lengkap: "Moch Sigit (Kerani Pa)", role: "admin" },
    { username: "kerani_pi1", password: "pramuka2026", nama_lengkap: "Nabila Putri (Kerani Pi 1)", role: "admin" },
    { username: "kerani_pi2", password: "pramuka2026", nama_lengkap: "Selma Janiska (Kerani Pi 2)", role: "admin" },
    
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

// 3. INISIALISASI HALAMAN
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    if (path.includes('anggota.html') && (!userLogin || userLogin.role !== 'anggota')) { window.location.href = 'index.html'; return; }
    if (path.includes('admin.html') && (!userLogin || userLogin.role !== 'admin')) { window.location.href = 'index.html'; return; }
    if ((path.includes('index.html') || path.endsWith('/')) && userLogin) { window.location.href = userLogin.role === 'admin' ? 'admin.html' : 'anggota.html'; return; }

    if (document.getElementById('halaman-admin')) {
        document.getElementById('user-info').innerText = userLogin.nama_lengkap;
        muatPengaturanSanggar();
        document.getElementById('filter-tanggal').value = new Date().toISOString().split('T')[0];
        muatDataAbsensiHarianCloud();
    }
    
    if (document.getElementById('halaman-anggota')) {
        document.getElementById('user-info-top').innerText = userLogin.nama_lengkap;
        document.getElementById('welcome-nama').innerText = userLogin.nama_lengkap;
        document.getElementById('wm-nama').innerText = userLogin.nama_lengkap;
        document.getElementById('wm-nama-rapat').innerText = userLogin.nama_lengkap;
        ambilLokasiSekarang(); jalankanKamera(); jalankanJamLive(); muatRiwayatPribadi();
    }
});

// 4. MENU SIDEBAR & AUTENTIKASI
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar.style.left === '0px') { sidebar.style.left = '-260px'; overlay.style.display = 'none'; } 
    else { sidebar.style.left = '0px'; overlay.style.display = 'block'; }
}

function switchView(viewId) {
    document.querySelectorAll('.view-section').forEach(el => el.style.display = 'none');
    document.getElementById(viewId).style.display = 'block';
    if(document.getElementById('sidebar').style.left === '0px') toggleSidebar();
}

function prosesLogin(event) {
    event.preventDefault();
    const userFound = databaseUsers.find(u => u.username === document.getElementById('input-username').value && u.password === document.getElementById('input-password').value);
    if (userFound) { localStorage.setItem('userLogin', JSON.stringify(userFound)); window.location.href = userFound.role === 'admin' ? 'admin.html' : 'anggota.html'; } 
    else alert("Username atau Password salah!");
}
function logout() { localStorage.removeItem('userLogin'); window.location.href = 'index.html'; }

// 5. GPS & KAMERA
async function jalankanKamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
        const camKeg = document.getElementById('kamera-stream'); if(camKeg) camKeg.srcObject = stream;
        const camRap = document.getElementById('kamera-stream-rapat'); if(camRap) camRap.srcObject = stream;
    } catch (err) { alert("Izin kamera ditolak!"); }
}

function jalankanJamLive() {
    setInterval(() => {
        const skr = new Date();
        const strWaktu = skr.toLocaleString('id-ID');
        if(document.getElementById('wm-waktu')) document.getElementById('wm-waktu').innerText = strWaktu;
        if(document.getElementById('wm-waktu-rapat')) document.getElementById('wm-waktu-rapat').innerText = strWaktu;
        
        const jamSekarang = skr.getHours().toString().padStart(2, '0') + ":" + skr.getMinutes().toString().padStart(2, '0');
        const stWaktu = document.getElementById('status-waktu-alert');
        if (stWaktu) {
            if (jamSekarang >= jamBuka && jamSekarang <= jamTutup) { stWaktu.className = "alert alert-success"; stWaktu.innerHTML = `✅ Waktu Absen Buka (${jamBuka} - ${jamTutup})`; } 
            else { stWaktu.className = "alert alert-danger"; stWaktu.innerHTML = `⛔ Waktu Absen Tutup (Hanya buka: ${jamBuka} - ${jamTutup})`; }
        }
    }, 1000);
}

async function ambilLokasiSekarang() {
    await muatPengaturanSanggar();
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition((pos) => {
            currentLat = pos.coords.latitude; currentLng = pos.coords.longitude;
            const jarak = hitungJarak(currentLat, currentLng, sanggarLat, sanggarLng);
            if(document.getElementById('wm-jarak')) document.getElementById('wm-jarak').innerText = `Jarak: ${Math.round(jarak)}m`;
            const stGps = document.getElementById('status-gps-alert');
            if(stGps) {
                if (jarak <= maxRadius) { stGps.className = "alert alert-success"; stGps.innerHTML = `✅ GPS Sesuai. Jarak: ${Math.round(jarak)}m.`; } 
                else { stGps.className = "alert alert-danger"; stGps.innerHTML = `⛔ Jarak Jauh: ${Math.round(jarak)}m (Maks ${maxRadius}m).`; }
            }
        }, (err) => { if(document.getElementById('status-gps-alert')) document.getElementById('status-gps-alert').innerHTML = `⛔ GPS Gagal!`; }, { enableHighAccuracy: true });
    }
}

function hitungJarak(lat1, lon1, lat2, lon2) {
    const R = 6371e3, rad = Math.PI / 180;
    const a = Math.sin((lat2 - lat1)*rad/2)**2 + Math.cos(lat1*rad)*Math.cos(lat2*rad)*Math.sin((lon2 - lon1)*rad/2)**2;
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)));
}

// 6. KIRIM ABSEN KEGIATAN & RAPAT
async function simpanAbsenCloud() {
    if (!currentLat || !currentLng) { alert("Tunggu sinyal GPS!"); return; }
    const jarak = Math.round(hitungJarak(currentLat, currentLng, sanggarLat, sanggarLng));
    kirimKeDatabaseRPC(jarak <= maxRadius ? 'Hadir' : 'Di Luar Area', jarak, 'catat_absensi_geofencing', 'kamera-stream');
}
async function simpanIzinCloud() {
    const alasan = prompt("Masukkan alasan izin kegiatan:"); if (!alasan) return;
    let jrk = currentLat ? Math.round(hitungJarak(currentLat, currentLng, sanggarLat, sanggarLng)) : 0;
    kirimKeDatabaseRPC("Izin - " + alasan, jrk, 'catat_absensi_geofencing', 'kamera-stream');
}
async function simpanAbsenRapat() { kirimKeDatabaseRPC('Hadir', 0, 'catat_absensi_rapat', 'kamera-stream-rapat'); }
async function simpanIzinRapat() {
    const alasan = prompt("Masukkan alasan izin rapat:"); if (!alasan) return;
    kirimKeDatabaseRPC("Izin - " + alasan, 0, 'catat_absensi_rapat', 'kamera-stream-rapat');
}

async function kirimKeDatabaseRPC(statusTeks, jarakMeter, rpcName, camId) {
    const video = document.getElementById(camId);
    let fotoBase64 = "";
    if (video && video.videoWidth > 0) {
        const cvs = document.createElement('canvas'); cvs.width = 320; cvs.height = 240;
        cvs.getContext('2d').drawImage(video, 0, 0, cvs.width, cvs.height);
        fotoBase64 = cvs.toDataURL('image/jpeg', 0.6); 
    }
    try {
        const { data, error } = await supabase.rpc(rpcName, {
            p_username: userLogin.username, p_nama: userLogin.nama_lengkap, p_jarak: jarakMeter, p_status: statusTeks, p_foto: fotoBase64, p_tgl: new Date().toISOString().split('T')[0]
        });
        if (error) throw error; alert("Berhasil! " + data.message); muatRiwayatPribadi();
    } catch (err) { alert(err.message); }
}

async function muatRiwayatPribadi() {
    const { data } = await supabase.from('riwayat_absensi').select('*').eq('username', userLogin.username).order('waktu_absen', { ascending: false }).limit(5);
    const tbody = document.getElementById('isi-riwayat-pribadi');
    if (data && data.length > 0) tbody.innerHTML = data.map(a => `<tr><td>${new Date(a.waktu_absen).toLocaleString('id-ID')}</td><td>${a.status} <br> ${a.jarak_meter}m</td></tr>`).join('');
    else tbody.innerHTML = `<tr><td colspan="2">Belum ada riwayat.</td></tr>`;
}

// 7. FUNGSI ADMIN
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
        latitude: document.getElementById('cfg-lat').value, longitude: document.getElementById('cfg-lng').value, max_radius_meter: document.getElementById('cfg-radius').value, waktu_mulai: document.getElementById('cfg-jam-mulai').value + ':00', waktu_selesai: document.getElementById('cfg-jam-selesai').value + ':00'
    }).eq('id', 1);
    alert("Pengaturan Berhasil Disimpan!"); muatPengaturanSanggar();
}

async function muatDataAbsensiHarianCloud() {
    const tgl = document.getElementById('filter-tanggal').value; if (!tgl) return;
    const { data } = await supabase.from('riwayat_absensi').select('*').eq('tanggal_absen', tgl).order('waktu_absen', { ascending: true });
    const tbody = document.getElementById('isi-rekap-absen');
    if (data && data.length > 0) {
        tbody.innerHTML = data.map(a => {
            const foto = a.foto_base64 ? `<img src="${a.foto_base64}" width="40" style="border-radius:5px; cursor:pointer;" onclick="window.open('${a.foto_base64}')">` : '-';
            return `<tr><td>${new Date(a.waktu_absen).toLocaleTimeString('id-ID')}</td><td>${a.nama_lengkap}</td><td>${a.jarak_meter}m</td><td>${a.status}</td><td>${foto}</td></tr>`;
        }).join('');
    } else tbody.innerHTML = `<tr><td colspan="5" class="text-center">Kosong.</td></tr>`;
}

function exportExcel() {
    const table = document.getElementById("tabel-rekap");
    const wb = XLSX.utils.table_to_book(table, { sheet: "Absensi_Adita_Praja" });
    XLSX.writeFile(wb, `Rekap_Absensi_${document.getElementById('filter-tanggal').value}.xlsx`);
}
