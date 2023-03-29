### (15)Event Handling
#### State
State adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa di akses oleh component lain. 
State adalah :
1. Data yang bisa di modifikasi menggunakan setState.
2. Setiap terjadi modifikasi akan terjadi render ulang.
3. Bersifat Asynchronous.
4. Dipakai dalam class.

### Stateful & Stateless Component
#### Stateful Component
Stateful component adalah memiliki state. Component ini dibuat dengan class. Kelebihan dari class component adalah memiliki lifecycle.
#### Stateless Component
Stateless component adalah tidak memiliki state hanya memiliki prop. Umumnya component ini dibuat dengan function karena codenya lebih ringkas.

#### Perbedaan dari komponen stateful dan komponen stateless
Stateless Component :
1. Tidak tahu tentang aplikasi
2. Tidak melakukan data fetching (pengambilan data)
3. Tujuan utamanya adalah visualisasi
4. Dapat digunakan kembali
5. Hanya berkomunikasi dengan induk langsungnya.

Stateful Component : 
1. Mengerti tentang aplikasi
2. Melakukan data fetching (pengmabilan data)
3. Berinteraksi dengan aplikasi
4. Tidak dapat digunakan kembali
5. Meneruskan status dan data ke anak-anaknnya

### Penanganan Event di react
#### Handling Event
Handling event adalah suatu metode untuk menangani sebuah event/aksi yang diberikan pengguna kepada suatu komponen

#### Event
Event adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya tombol ditekan

#### Beberapa contoh list event
1. Clipboard Events (Promise terpenuhi)
2. Form Events (onChange, onSubmit)
3. Mouse Events (onClick, onDoubleClick, onMouseOver)
4. Generic Events (onError, onLoad)