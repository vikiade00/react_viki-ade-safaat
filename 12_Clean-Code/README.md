### (12) Resume Clean Code
#### Clean Code
Clean code adalah istilah untuk code yang mudah di dibaca, dipahami dan diubah oleh programmer 
#### Kenapa clean code ?
Kita harus menerpakan clean code karena ada beberapa hal yaitu :
1. Work Collaboration
2. Feature Development 
3. Faster Development

#### Krakteristik Clean Code 
1. Penamaan mudah dipahami
2. Mudah dieja dan dicari
3. Singkat namun mendeksripsikan konteks
4. Konsisten
5. Hindari penambahan konteks yang tidak perlu
6. Komentar
7. Good Function
8. Gunakan konvensi 
9. Formatting

#### Saran Formatting
1. Lebar baris code 80-120 karakter
2. Satu class 300 - 500 baris
3. Baris code yang berhubungan saling berdekatan
4. Dekatkan fungsi dengan pemanggilnya
5. Deklarasi variabel berdekatan dengan penggunanya
6. Perhatikan identitas
7. Menggunakan prettier atau fromatter

#### Clean Code Principle
KISS = keep it so simple, hindari membuat fungsi yang dibuat untuk melakukan A, sekaligus memodifikasi B, mengecek fungsi C, dst.

#### Tips untuk selalu KISS
1. Fungsi atau class harus kecil
2. Fungsi dibuat unutk melakukan 1 tugas saja
3. Jangan terlalu gunakan banyak argument pada fungsi
4. Harus di perhatikan untuk mencapai kondisi yang seimbang
5. Kecil dan jumlahnya minimal

#### Dont Repeat Yourself
Duplikasi code terjadi karena sering copy paste. Untuk menghindari duplikasi code buatlah fungsi yang dapat dogunakan secara berulang-ulang.

#### Refactoring
Refactoring adalah proses restruturasi kode yang dibuat, dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal. Prinsip KISS dan DRY dapat dicapai dengan refrector
Teknk Refrectoring :
1. Membuat sebuah abstarksi 
2. Memecah kode dengan fungsi/class
3. Perbaiki penamaan dan lokasi code
4. Deteksi kode yang memiliki duplikasi
