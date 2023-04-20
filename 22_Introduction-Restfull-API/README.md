### (22) Introduction Restfull API
API (Aplication Programming Interface) adalah sekumpulan fungsi dan prosedure yang memungkinkan pembuatan aplikasi yang mengakses fitur atau data dari sistem operasi, aplikasi, atau layanan lainnya. Cara kerja API pertama client memnita request ke server lalu server meresponse permintaan client.

#### REST (Representational State Transfer)
REST (Representational State Transfer) adalah sebuah arsitektur perangkat lunak yang digunakan untuk membangun aplikasi web. REST menggunakan HTTP (Hypertext Transfer Protocol) untuk mengirimkan data antara client dan server. 

#### Request & Response format
1. JSON
2. XML
3. SOAP

#### HTTP request method
1. GET: Metode ini digunakan untuk meminta informasi dari server dan mengembalikan respons dalam bentuk body data. Request yang dikirimkan tidak mengubah status sumber daya di server.
2. POST: Metode ini digunakan untuk mengirimkan data ke server untuk membuat atau mengupdate sumber daya. Request POST biasanya digunakan untuk mengirimkan data form, meng-upload file, atau untuk membuat sumber daya baru di server.
3. PUT: Metode ini digunakan untuk mengirimkan data ke server untuk mengupdate sumber daya yang sudah ada. Request PUT biasanya digunakan untuk mengganti seluruh isi dari suatu sumber daya di server.
4. DELETE: Metode ini digunakan untuk menghapus sumber daya yang sudah ada di server. Request DELETE biasanya digunakan untuk menghapus sumber daya yang tidak diperlukan lagi di server.
5. PATCH: Metode ini digunakan untuk mengirimkan data ke server untuk mengupdate sumber daya yang sudah ada, tetapi hanya bagian-bagian tertentu dari sumber daya tersebut yang diubah. Request PATCH biasanya digunakan untuk memperbaiki kesalahan atau mengubah data tertentu dari suatu sumber daya.
6. OPTIONS: Metode ini digunakan untuk mendapatkan informasi mengenai kemampuan server dan sumber daya yang ada di dalamnya. Request OPTIONS biasanya digunakan untuk mengetahui metode-metode yang didukung oleh server atau header-header yang dapat digunakan dalam request.
7. HEAD: Metode ini mirip dengan GET, tetapi hanya mengembalikan header response tanpa mengembalikan body data. Request HEAD biasanya digunakan untuk memeriksa status suatu sumber daya tanpa perlu mengunduh body data-nya.

#### HTTP Response Code
1. 200 : OK
2. 201 : Created
3. 400 : Bad Request
4. 404 : Not Found
5. 401 : Unauthorized
6. 405 : Method not allowed
7. 500 : Internal Server Error

### (23) Restful API with javascript

Untuk mendapatkan API kita bisa menggunakan public API untuk data dummt atau contoh endpoint. Terkadang disebut sebagai API palsu, sebuah Mock api dapat mengembalikan data yang kita inginkan.

#### Manfaat mock API
1. Frontend mobile dan back-end developers dapat bekerja secara bersamaan
2. Fast feedback loop
3. Menemukan masalah lebih awal dan cepat
4. Mengembangkan pengujian dan API secara bersamaan

#### Top 7 Mock APIs Available
1. Beeceptor
2. Mockoon
3. Mocki
4. Stoplight
5. Postman Mock Server
6. Mocky
7. MockAPI

### (24) Authorization with react
Authorization merujuk pada proses otentikasi dan otorisasi pengguna dalam sebuah aplikasi web yang dibangun menggunakan React.

Proses otentikasi biasanya melibatkan verifikasi kredensial pengguna, seperti username dan password, untuk memastikan bahwa pengguna tersebut adalah orang yang sah dan memiliki hak akses ke dalam sistem. Sedangkan proses otorisasi berkaitan dengan pengaturan hak akses pengguna terhadap fitur-fitur atau halaman tertentu dalam aplikasi, misalnya hanya pengguna dengan role admin yang bisa mengakses halaman pengaturan.

#### Sistem login pada react
Sistem login pada React dapat diimplementasikan dengan menggunakan teknik autentikasi token-based authentication, di mana setelah user berhasil login dan terautentikasi, server akan memberikan token berupa JSON Web Token (JWT) yang akan digunakan untuk mengidentifikasi dan mengotentikasi setiap request selanjutnya dari user. Token ini kemudian disimpan pada local storage atau session storage pada browser untuk digunakan pada request-request selanjutnya, sehingga user tidak perlu login kembali setiap kali mengakses halaman yang memerlukan autentikasi. Pada setiap request, token kemudian dikirimkan ke server sebagai header Authorization untuk memvalidasi user dan memberikan akses yang sesuai dengan hak akses yang dimilikinya.