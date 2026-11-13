const supabaseUrl = 'https://xmvjtrlktkihutvmpskq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhtdmp0cmxrdGtpaHV0dm1wc2txIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQzMTU1MTAsImV4cCI6MjEwOTg5MTUxMH0.m9rD8UtrL4FrIRsBerdcROouZMK812pJjpoSvTBQEzk';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// ==========================================
// DATA 57 AKUN (Berdasarkan PDF Adita Praja)
// ==========================================
const databaseUsers = [
    // 1. Akun Otoritas (Pemantau) -> role: "admin"
    { username: "admin_adita", password: "admin123", nama_lengkap: "Admin Sistem Web", role: "admin" },
    { username: "pradana_pa", password: "pramuka2026", nama_lengkap: "Kelvin Sutirta (Pradana Pa)", role: "admin" },
    { username: "pradana_pi", password: "pramuka2026", nama_lengkap: "Aurell Tatia (Pradana Pi)", role: "admin" },
    { username: "kerani_pa", password: "pramuka2026", nama_lengkap: "Moch Sigit (Kerani Pa)", role: "admin" },
    { username: "kerani_pi1", password: "pramuka2026", nama_lengkap: "Nabila Putri (Kerani Pi 1)", role: "admin" },
    { username: "kerani_pi2", password: "pramuka2026", nama_lengkap: "Selma Janiska (Kerani Pi 2)", role: "admin" },

    // 2. Akun Pribadi Pengurus Harian -> role: "anggota"
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

    // 3. Akun Anggota & Seksi Bidang -> role: "anggota"
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

let userLogin = null;
let currentLat = null;
let currentLng = null;
let sanggarLat = 0;
let sanggarLng = 0;
let maxRadius = 50;
let jamInterval;

function prosesLogin(event) {
    event.preventDefault();
    const userIn = document.getElementById('input-username').value;
    const passIn = document.getElementById('input-password').value;

    const userFound = databaseUsers.find(u => u.username === userIn && u.password === passIn);

    if (userFound) {
        userLogin = userFound;
        document.getElementById('user-info').innerText = userFound.nama_lengkap;
        document.getElementById('navbar').style.display = 'flex';

        if (userFound.role === 'admin') {
            document.getElementById('nama-admin').innerText = userFound.nama_lengkap;
            tampilkanHalaman('halaman-admin');
            muatPengaturanSanggar();
        } else {
            document.getElementById('nama-anggota').innerText = userFound.nama_lengkap;
            document.getElementById('wm-nama').innerText = userFound.nama_lengkap;
            tampilkanHalaman('halaman-anggota');
            
            ambilLokasiSekarang();
            jalankanKamera();
            jalankanJamLive();
            muatRiwayatPribadi();
        }
    } else {
        alert("Username atau Password salah!");
    }
}

function logout() {
    userLogin = null;
    document.getElementById('navbar').style.display = 'none';
    document.getElementById('input-username').value = '';
    document.getElementById('input-password').value = '';
    
    const video = document.getElementById('kamera-stream');
    if (video && video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
    }
    clearInterval(jamInterval);
    tampilkanHalaman('halaman-login');
}

function tampilkanHalaman(idHalaman) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active-page'));
    document.getElementById(idHalaman).classList.add('active-page');
}

async function jalankanKamera() {
    const video = document.getElementById('kamera-stream');
    const teksKamera = document.getElementById('teks-kamera');
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
        video.srcObject = stream;
        if(teksKamera) teksKamera.style.display = 'none';
    } catch (err) {
        if(teksKamera) teksKamera.innerText = "[ Izin Kamera Ditolak ]";
    }
}

function jalankanJamLive() {
    jamInterval = setInterval(() => {
        const sekarang = new Date();
        const formatWaktu = sekarang.toLocaleString('id-ID', {
            day: 'numeric', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit', second: '2-digit'
        });
        const wmWaktu = document.getElementById('wm-waktu');
        if(wmWaktu) wmWaktu.innerText = formatWaktu;
    }, 1000);
}

async function ambilLokasiSekarang() {
    const statusGps = document.getElementById('status-gps-alert');
    await muatPengaturanSanggar();

    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
            (position) => {
                currentLat = position.coords.latitude;
                currentLng = position.coords.longitude;
                const jarak = hitungJarak(currentLat, currentLng, sanggarLat, sanggarLng);
                document.getElementById('wm-jarak').innerText = `Jarak: ${Math.round(jarak)} m`;

                if (jarak <= maxRadius) {
                    statusGps.className = "alert alert-success";
                    statusGps.innerHTML = `✅ GPS Sesuai. Jarak: ${Math.round(jarak)} Meter.`;
                } else {
                    statusGps.className = "alert alert-warning";
                    statusGps.innerHTML = `⚠️ Jarak terlalu jauh: ${Math.round(jarak)} Meter (Maks ${maxRadius}m).`;
                }
            },
            (error) => {
                statusGps.className = "alert alert-warning";
                statusGps.innerHTML = `⚠️ Sinyal GPS tidak ditemukan. Pastikan Izin Lokasi aktif.`;
            },
            { enableHighAccuracy: true }
        );
    }
}

function hitungJarak(lat1, lon1, lat2, lon2) {
    const R = 6371e3;
    const rad = Math.PI / 180;
    const dLat = (lat2 - lat1) * rad;
    const dLon = (lon2 - lon1) * rad;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

async function simpanAbsenCloud() {
    if (!currentLat || !currentLng) {
        alert("Tunggu Sinyal GPS / Izin lokasi belum aktif!");
        return;
    }

    const jarak = hitungJarak(currentLat, currentLng, sanggarLat, sanggarLng);
    const statusAbsen = jarak <= maxRadius ? 'Hadir' : 'Di Luar Area';

    const video = document.getElementById('kamera-stream');
    let fotoBase64 = "";
    
    if (video && video.videoWidth > 0) {
        const canvas = document.createElement('canvas');
        canvas.width = 320; 
        canvas.height = 240;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        fotoBase64 = canvas.toDataURL('image/jpeg', 0.6); 
    }

    const tanggalHariIni = new Date().toISOString().split('T')[0];

    const { error } = await supabase
        .from('riwayat_absensi')
        .insert([{
            username: userLogin.username,
            nama_lengkap: userLogin.nama_lengkap,
            jarak_meter: Math.round(jarak),
            status: statusAbsen,
            tanggal_absen: tanggalHariIni,
            foto_base64: fotoBase64
        }]);

    if (error) {
        alert("Gagal mengirim absensi ke server.");
    } else {
        alert("Berhasil! Absensi Anda tersimpan.");
        muatRiwayatPribadi();
    }
}

async function muatPengaturanSanggar() {
    const { data, error } = await supabase.from('setting_lokasi').select('*').eq('id', 1).single();
    if (data) {
        sanggarLat = data.latitude;
        sanggarLng = data.longitude;
        maxRadius = data.max_radius_meter;

        if (userLogin && userLogin.role === 'admin') {
            document.getElementById('cfg-lat').value = data.latitude;
            document.getElementById('cfg-lng').value = data.longitude;
            document.getElementById('cfg-radius').value = data.max_radius_meter;
            document.getElementById('pengaturan-radius-card').style.display = 'block';
        }
    }
}

async function simpanPengaturanRadiusCloud(event) {
    event.preventDefault();
    const lat = document.getElementById('cfg-lat').value;
    const lng = document.getElementById('cfg-lng').value;
    const rad = document.getElementById('cfg-radius').value;

    const { error } = await supabase.from('setting_lokasi').update({ latitude: lat, longitude: lng, max_radius_meter: rad }).eq('id', 1);
    
    if (!error) {
        alert("Pengaturan Sanggar Berhasil Diperbarui!");
        muatPengaturanSanggar();
    }
}

async function muatRiwayatPribadi() {
    const tbody = document.getElementById('isi-riwayat-pribadi');
    const { data } = await supabase
        .from('riwayat_absensi')
        .select('*')
        .eq('username', userLogin.username)
        .order('waktu_absen', { ascending: false })
        .limit(5);

    if (data && data.length > 0) {
        tbody.innerHTML = data.map(absen => {
            const waktu = new Date(absen.waktu_absen).toLocaleTimeString('id-ID');
            return `<tr>
                <td>${new Date(absen.waktu_absen).toLocaleDateString('id-ID')} <br> <small>${waktu}</small></td>
                <td><span class="badge">${absen.status}</span> <br> <small>${absen.jarak_meter} m</small></td>
            </tr>`;
        }).join('');
    } else {
        tbody.innerHTML = `<tr><td colspan="2" class="text-center">Belum ada riwayat absensi.</td></tr>`;
    }
}

async function muatDataAbsensiHarianCloud() {
    const tglPilih = document.getElementById('filter-tanggal').value;
    if (!tglPilih) return;

    const { data } = await supabase
        .from('riwayat_absensi')
        .select('*')
        .eq('tanggal_absen', tglPilih)
        .order('waktu_absen', { ascending: true });

    const tbody = document.getElementById('isi-rekap-absen');
    
    if (data && data.length > 0) {
        document.getElementById('total-hadir').innerText = data.filter(d => d.status === 'Hadir').length;
        
        tbody.innerHTML = data.map(absen => {
            const waktu = new Date(absen.waktu_absen).toLocaleTimeString('id-ID');
            const elemenFoto = absen.foto_base64 
                ? `<img src="${absen.foto_base64}" style="width: 50px; border-radius: 5px; cursor: pointer; border: 1px solid #ccc;" onclick="window.open('${absen.foto_base64}')" alt="Foto">` 
                : '<small style="color:red">Tidak Ada</small>';

            return `<tr>
                <td>${waktu}</td>
                <td><b>${absen.nama_lengkap}</b></td>
                <td>${absen.jarak_meter} m</td>
                <td><span class="badge">${absen.status}</span></td>
                <td>${elemenFoto}</td>
            </tr>`;
        }).join('');
    } else {
        document.getElementById('total-hadir').innerText = 0;
        tbody.innerHTML = `<tr><td colspan="5" class="text-center">Tidak ada absensi pada tanggal ini.</td></tr>`;
    }
}
