### (26) Deployment

#### Build React APP

Kenapa perlu build ? Secara default, React mengandung banyak pesan peringatan. Peringatan-peringatan ini sangat berguna dalam pengembangan aplikasi. Namun, pesan-pesan ini membuat react menjadi lebih besar dan lambat. Oleh karenanya kita harus menggunakan versi produksi ketika mendeploy aplikasi. Tujuan melakukan build agar aplikasi kita menjadi versi prooduction, sehingga performanya lebih ringan cepat.

#### Build react app dengan npm

`npm run build`
ini akan membuat versi produksi untuk aplikasi kita didalam folder build/. ini hanya dilakukan sebelum mendeploy ke produksi. untuk pengembangan normal, gunakan `npm start`

#### Run Optimized App

Untuk menjalankan aplikasi yang optimal di lokal komputer kita, kita bisa menggunakan serve.
install serve : `npm install -g serve`
menjalankan serve di lokal : `serve -s build`

### Deployment

Deployment adalah kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah kita buat. Harapannya aplikasi tersebut dapat diakses oleh banyak orang. Tidak hanya oleh kita sendiri.

#### Deployment denga surge

Surge adalah layanan penerbit website statik gratis untuk front-end Developer. Website statik yang menggunakan surge akan memiliki subdomain \*.surge.sh. Surge dapat menerima file HTML, CSS, dan JS.

#### Install Surge

1. Pastikan menggunakan versi Node yang terbaru.
2. Install Surge di terminal `npm install --global surge`
3. Jalankan perintah surge di terminal

#### Teardown Surge

Terkadang kita tidak ingin mempublikasikan sebagian domain atau subdomain. Untuk itu kita bisa teardown sebuah project melalui surge CLI. ini efektif membuat proyek kita offline.

`surge teardown vancouver.surge.sh`

#### Deployment dengan Netlify CLI

Netlify adalah salah satu platform penyedia layanan build tools sekaligus Continous Deployment. Netlify memungkinkan kita untuk mempublish website statis secara gratis. Netlify juga sudah terintegrasi dengan Git Host popular seperti Github, Gitlab, dan BitBucket.

#### Deploy dengan netlify

1. Buat akun netlify (www.netlify.com)
2. Install Netlify CLI di terminal `npm install netlify-cli -g`
3. Jalankan perintah netlify deploy di terminal.
4. Verify akun melalui browser. pilih Authorize
5. Pilih "Create & configure a new site"
6. Pilih lokasi file yang akan di deploy. pilih ./build.
