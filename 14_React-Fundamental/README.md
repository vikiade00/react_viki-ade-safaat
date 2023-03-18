### (14) React Fundamental
### JSX
JSX (Javascript XML) merupakan exptensi sintaksis untuk javascript yang memungkinkan kita untuk memasukan kode HTML di dalamnya, seperti markup XML dalam kode JavaScript. JSX umumnya digunakan dengan React, sebuah kerangka kerja JavaScript yang populer untuk membangun User Interface.

#### Kenapa menggunakan JSX
1. JSX dibuatkan berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI
2. Separation of Technology -> Separation of Concern

#### Spesifikasi jenis elemen react
1. Kapitalisasi untuk komponen react
2. Huruf kecil (Lowercase) untuk komponen bawaan
3. Kita dapat menaruh ekspresi JS yang valid pada JSX dengan menggunakan kurung kurawal
4. JSX adlah expresion

#### Menentukan atribut dengan JSX 
1. Tanda kutip untuk menentukan string literal
2. kurung kurawal untuk menyematkan ekspresi javascript

#### Menspesifikasi elemen anak dengan JSX 
1. Jika tag bersifat kosong (tidak memiliki elemen anak), kita bisa menutupnya secara langsung dengan />
2. Jika memiliki anak kita bisa bungkus dengan tag "< div >" atau <></>

#### Component
Komponen React adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behavior, dan state sebagian UI

#### Props
1. Props merupakan singkatan dari properties, membuat kita dapat memberikan argumen / data pada component.
2. Props membantu untuk membuat komponen menjadi lebih dinamis
3. Props dioper ke component sama seperti memberikan atribut pada tag HTML
4. Props pada component adalah read-only dan tidak dapat diubah

#### React lifecycle
React lifecycle merupakan serangkaian metode yang dipanggil oleh React saat komponen diinisialisasi, diperbarui, dan dihapus.

#### Lifecycle method yang umum
1. render()
2. componentDidMount()
3. componendDidUpdate()
4. componentWillUnmount()

#### Render bersyarat dan list
#### Render Bersyarat
Pada react, Kita dapat membuat component berbeda yang mencakup perilaku yang dibutuhkan. Lalu kita dapat me-render hanya beberapa bagian saja, berdasarkan state dari aplikasi kita.

1. Menggunakan if
2. Inline if dengan operator &&
3. Inline if-else dengan ternary conditional operator
4. Mencegah component untuk rendering

#### Render List
kita dapat membangun koleksi dari beberapa elemen dan menyertakannya dalam JSX menggunakan tanda kurung kurawal

#### Key
Key membantu react untuk mengidentifikasi item mana yang telah diubah, ditambahkan, atau dihilangkan

#### Directory Structure
React tidak memiliki pendapat (unopoinated) tentang bagaimana cara memasukan file ke folder ada beberapa cara untuk membuat structure directory 

1. Pengelompokan berdasarkan fitur atau rute
2. Pengelompokan berdasarkan jenis file

#### Dalam pembuatan directory kita seharusnya  
1. Hindari terlalu banyak nesting
2. Jangan terlalu memikirkannya

#### Styling
Untuk styling pada react kita dapat menggunakan:
1. Classes dan Css
2. Atribut Style
3. Modul Css