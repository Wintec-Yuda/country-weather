# 🌍 Dashboard Cuaca Dunia

Dashboard Cuaca Dunia sederhana menggunakan **Vue 3**, **TypeScript**, **Pinia** dan **Tailwind CSS**. Proyek ini mengambil data dari **REST Countries API** dan **Open-Meteo API** untuk menampilkan lokasi negara dan informasi cuaca.

---

## 📌 Fitur Utama

- 🔎 Filter negara berdasarkan region
- 🔍 Pencarian negara berdasarkan nama
- 📊 Statistik Global:
  - Total Negara
  - Total Region  
  - Total Populasi
  - Total Bahasa
- 🌤️ Menampilkan informasi cuaca per negara (suhu, kecepatan angin, arah angin, waktu)
- 🗺️ Menampilkan Google Maps & Street Maps
- 📱 Antarmuka responsif + tombol **Scroll to Top**
- 🚀 Pemuatan cepat dengan Vite + Tailwind
- ✅ Manajemen state menggunakan Pinia
- ✅ Type-safe dengan TypeScript

---

## 📂 Struktur Proyek

```
src/
├── api/                  # Logika pengambilan data API dan setting intrerceptor
├── components/           # Komponen domain (terkait fitur spesifik)
│   └── ui/               # Komponen UI yang dapat digunakan ulang (Base Button, Search Input, dll)
│   └── layout/           # Komponen layout utama (Header, Footer)
├── layouts/              # Layout (Dashboard Layout)
├── stores/               # Pinia Stores (countryStore, weatherStore)
├── types/                # Definisi tipe TypeScript
├── utils/                # Utilitas pembantu (formatting)
├── pages/                # Halaman utama seperti HomePage.vue
├── App.vue               # Komponen utama
├── main.ts               # Titik masuk aplikasi
```

---

## 🚀 Cara Install & Jalankan

### 1. Clone Repository
```bash
git clone https://gitlab.com/Wintec-Yuda/country-weather.git
cd country-weather
```

### 2. Install Dependency
```bash
npm install
```

### 3. Jalankan Development Server
```bash
npm run dev
```

Buka di browser:
```
http://localhost:5173
```

### 4. Akses Online
Proyek ini dapat diakses secara online melalui link berikut: [https://www.country-weather-six.vercel.app](country-weather-six.vercel.app)

---

## 🔧 Tech Stack
- Vue 3 (composite API) + TypeScript
- Pinia (Manajemen State)
- Tailwind CSS (Styling)
- Axios (HTTP Client)
- Vite (Build Tool)

---

## 🌤️ API Eksternal yang Digunakan
- **REST Countries API**: Data negara
- **Open-Meteo API**: Data cuaca

---

## 🤝 Kontribusi
Pull Request, Issue, dan Feedback sangat dihargai. Silakan buat PR atau buka issue di repositori ini.

---

## 📄 Lisensi
MIT License © 2025 oleh **Mochamad Yuda Trinurais**