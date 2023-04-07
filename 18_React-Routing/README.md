### (18) React Routing
#### Router
Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA (Single Page Application)

#### MPA VS SPA

#### MPA (Multi Page Application)
MPA (Multi Page Application) merupakan jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru.

Keunggulan:
1. SEO Website lebih mudah dioptimasi
2. Memudahkan untuk mengubah halaman tertentu untuk setiap kebutuhan yang berbeda
3. Menggunakan tools analisi seperti Google analytics yang dapat terintegrasi langsung dengan website

Kekurangan:
1. Kecepatan download website lebih lama
2. Kita perlu mengintegrasikan antara Front-end dan Back-end
3. Lebih sering membutuhkan maintenance dan update
4. Mungkin akan lebih sering menemukan masalah performa pada website

#### SPA (Single Page Application)
SPA (Single Page Application) merupakan satu jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut

Keunggulan : 
1. Waktu loading website jauh lebih cepat
2. Tidak ada query tambahan ke server
3. Front-end yang cepat dan responsive
4. Meningkatkan pengalaman pengguna (UX)

Kekurangan :
1. Tidak bagus dalam SEO
2. Berat saat dibuka pertama kali
3. Kurang aman dibanding dengan website biasa
4. Masalah kompatibilitas browser

#### React Router
cara instal react router : 
1. npm install react-router-dom --save
2. yarn add react-router-dom

#### BrowserRouter
Digunakan sebagai router yang menggunakan API History dari HTML5, sehingga dapat menggunakan location untuk singkronkan UI dengan URL. Di dalam object location sendiri merepresentasikan dimana lokasi  aplikasi sekarang

#### Route
1. Route digunakan sebagai pengarah jalan nya lalu lintasi suatu aplikasi web
2. Attribut Path merupkan url web browser pada proses routing
3. Attribut component merupakan suatu component yang akan di tampilkan kepada user saat mengakses path yang didefinisikan

#### Switch
1. Swith digunakan untuk membungkus kumpulan beberapa component Route
2. Exact bertugas untuk memastikan route hanya me-render component yang memiliki path yang cocok, jika tidak ada yang cocok maka route yang akan di render yaitu route terakhir dengan component NotFound

#### Link
Link digunakan untuk berpindah antara halaman, property to tersebut merujuk pada path di route yang akan dituju

#### Parameter URL
Parameter URL adalah suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman

#### Perbedaan Link dan Redirect
Link : 
1. Dapat digunakan dalam kondisi apapun
2. Memberikan history baru pada browser
3. Bereaksi seperti click pada a href

Redirect :
1. Lebih sering digunakan pada halaman 404
2. Menimpa history pada browser
3. Bereaksi dengan suatu kondisi

### Hook Routing React
#### useHistory
Memberikan akses ke instance riwayat yang dapat kita gunakan untuk bernavigasi

#### useParams
Mengambalikan object pasangan kunci/nilai parameter url.

#### useRouteMatch
Mencoba mencocokan URL saat ini dengan cara yang sama seperti Route