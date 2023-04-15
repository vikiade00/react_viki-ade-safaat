### (19) React Form

#### Basic Form

Form meruapakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user.

#### Macam macam form

1. Elemen `<Input>` : biasanya digunakan inputan yang tidak terlalu panjang.
2. Elemen `<textarea>` biasanya digunakan inputan yang cukup panjang. Semisal deskripsi
3. Elemen `<select>` biasanya digunakan untuk inputan yang pilihannya sudah ditentukan
4. Radio button merupakan salah satu type di elemen `<input>`. Kita hanya bisa memilih 1 pilihan menggunakan radiobutton
5. Checkbox merupakan salah satu type dalam elemen `<input>`. Kita bisa memilih lebih dari 1 pilihan menggunakan checkbox
6. Type elemen input lainnya : text, button, color, checkbox, date, datetime-local, email, file, hidden, image, month, number, password, radio, range, reset, search, submit, tel, time, url, week

#### Controled Component

Kita dapat menggabungkan cara menyimpan dan memperbarui state di HTML dan React dengan menggunakan state pada react. Kemudian komponen react yang me-render sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada inputan user selanjutnya

Sebuah element masukan form yang nilainya dikontrol oleh react melalui cara seperti ini disebut sebagai "Controled Component"

#### Textarea pada HTML

Pada HTML, elemen `<textarea>` mendefinisikan teks di dalamnya sebagai elemen anaknnya.
Di react, `<textarea>` menggunakan atribut value. dengan cara ini, sebuah form yang menggunakan `<textarea>` dapat di tulis dengan cara yang sangat mirip dengan sebuah form yang menggunakan input satu baris.

#### Atribut Name

Ketika kita membutuhkan penanganan banyak elemen pada controlled component, kita dapat menambahkan atribut name pada setiap elemen dan membiarkan fungsi handler memilih apa yang harus dilakukan berdasarkan nilai dari event.target.name

#### Uncontrolled Component

Uncontrolledn component adalah alternatif lain dari controlled component, dimana data form akan ditangani oleh DOM-nya sendiri. Untuk menulis uncontrolled component, alih alih menulis event handler untuk setiap pembaruan state, kita bisa menggunakan ref untuk mendapatkan nilai form dari DOM.

#### Atribut defaultValue

Pada lifecycle rendering React, atribut value pada elemen form akan menimpa nilai pada DOM. Dengan unctrolled component, sering kali kita ingin React dapat menentukan nilai awal tetapi pembaruan berikutnya dilakukan secara uncontrolled. untuk menangani kasus ini, kita bisa menggunakan atribut defaultValue alih-alih menggunakan value.

#### Tag file input

Pada HTML, sebuah `<input type="file">` memungkinkan pengguna unuk memilih satu atau beberapa file dari media penyimpanan mereka untuk diunggah ke server atau dimanipulasi dengan javascript lewat file API

Dalam react, sebuah `<input type="file"/>` merupakan uncontrolled component karena nilainya hanya bisa disetel oleh pengguna bukan oleh kode program.

#### Kesimpulan

Form controlled dan uncontrolled memiliki kelebihan sendiri. Kita perlu mengevaluasi situasi kita secara spesifik dan memilih pendekatan apa yang cocok untuk kondisi kita.

Jika formuli sangat sederhana dalam hal umpan balik UI, uncontrolled dengan refs sepenuhnya baik baik saja. Kita tidak perlu mendengarkan apa yang dikatakan berbagai artikel bahwa uncontrolled itu buruk.

#### Basic Validation

Pada dasarnya, ada 3 alasan mengapa validasi form diperlukan:

1. Mencari input data yang benar dan sesuai format
2. Melindungi akun pengguna
3. Melindungi sistem/aplikasi

#### Tipe validasi data formulir

1. Clinet-side validation : Validasi yang dilakukan pada sisi klien (browser)
2. Server-side validation : Validasi yang dilakukan pada sisi server.

#### Built-in form validation

1. required : digunakan untuk menentukan field form perlu diisi sebelum formulir dapat dikirimkan
2. minLength dan maxLength : digunakan untuk menentukan jumlah karakter minimal dan maksimal
3. min dan max : digunakan untuk menentukan nilai minimum dan maksimum
4. type : type digunakan untuk menentukan apakah data berupa angka, email, atau type lainnya.
5. pattern : digunakan untuk menentukan regular expression (Regex) yang mendefinisikan pola data yang boleh dimasukan
