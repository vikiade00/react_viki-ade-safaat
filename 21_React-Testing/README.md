### (21) React Testing
Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang aplikasi. Test assertions ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita

#### Manfaat testing
1. Ketika aplikasi kita mempunyai coverage yang baik (Mayoritas codebase tercover oleh test). Kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken kita akan segera mengetahuinya
2. Mengurangi bug pada aplikasi. 

#### Kategori testing
1. Rendering component trees : di dalam environment test yang sudah disederhanakan dan ditegaskan pada keluaranna. kita akan fokus pada bagian ini.
2. Menjalankan aplikasi lengkap : di dalam environment peramban (browser) asli, ini dikenal sebagai test "end-to-end"

#### Pertimbangan Memilih Tools
1. Kecepatan iterasi vs environment yang realistis
2. Seberapa banyak mock

#### Rekomendasi tools
1. Jest 
merupakan test runner pada javascript yang memungkinkan kita mengakses DOM melalui jsdom. Sementara jsdom hanyalah perkiraan cara kerja browser, seringkali cukup baik mengetes komponen pada React.
2. React Testing Library
Merupakan seperangkat helpers yang memungkinkan kita mengetes komponen pada React tanpa bergantung pada detail implementasinya.

#### Install
Jika kita menginstal React menggunakan create-react-app. Jest (dan React Testing Library) akan secara default sudah terinstall. Tetapi jika kita, menggunakan custom React setup, kita perlu menginstall dan men set up jest (dan React Testing Library)

#### Render dan Debug
Fungsi render RTL akan merender file JSX apa pun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen React yang akan kita test.

#### Memilih elemen
React Testing Library menawarkan berbagai funsi untuk mendapatkan elemen. Salah satu contohnya ialah getByText untuk memilih teks dari elemen yang sudah dipilih

#### Kategori Testing
Contoh lain yang bisa digunakan

1. LabelText : getByLabelText : `<label for ="search"/>`
2. PlaceholderText: getByPlaceholderText: `<input placeholder="Search"/>`
3. AltText: getByAltText: `<img alt="profile"/>`
4. DisplayValue: getByDisplayValue: `<input value="javaScript"/>`