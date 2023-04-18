### (20) Global State Management
Global state management adalah sebuah teknik dalam pengembangan perangkat lunak yang digunakan untuk mengelola dan menyimpan data secara global pada suatu aplikasi. Teknik ini berguna untuk mempermudah proses berbagi data antar komponen yang berbeda, terutama dalam aplikasi yang kompleks.

#### Redux
Redux adalah  sebuah library open source yang digunakan untuk mengelola state pada aplikasi JavaScript. Redux digunakan terutama pada pengembangan aplikasi web dengan framework seperti React, Angular, atau Vue.

#### Waktu yang tepat untuk menggunakan redux
1. Banyak state yang perlu di taruh di banyak tempat
2. State pada app sering beruabah
3. Logic untuk mengubah state kompleks
4. Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
5. Perlu untuk mengetahui bagaimana state di update seiring dengan waktu

#### Redux library tools
1. React-Redux
2. Redux Toolkit
3. Redux DevTools Extension

#### Komponen penting di redux
1. Actions : digunakan untuk memberikan infromasi dari aplikasi ke store
2. Reducer : pure javascript function yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru
3. Store : Object sentral yang menyimpan state pada aplikasi

#### Redux Thunk
Thunk middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action. Thunk berfungsi untuk menghandle side effect logic yang kompleks, dan juga untuk logic async request data

#### Hasura
Hasura adalah sebuah platform open-source yang memungkinkan pengembang untuk menghasilkan API GraphQL secara cepat dan mudah dari database yang sudah ada. Hasura menyediakan sebuah layer yang dapat diintegrasikan dengan berbagai jenis database, seperti PostgreSQL, MySQL, dan SQL Server, sehingga memudahkan pengembang dalam membangun aplikasi web yang handal dan skalabel.

#### Membuat Rest API di Hasura
1. Create : http://{baseurl}/api/rest/article
2. Read : http://{baseurl}/api/rest/article
3. Update : http://{baseurl}/api/rest/article/{id}
4. Delete : http://{baseurl}/api/rest/article/{id}

#### Postman
Postman adalah sebuah platform pengujian API yang menyediakan berbagai fitur untuk memudahkan pengembangan dan pengujian API. Postman menyediakan antarmuka grafis yang intuitif dan mudah digunakan, sehingga memudahkan pengguna dalam menguji dan mengelola API mereka.

#### Kenapa kita menggunakan postman
1. Mudah untuk berkolaborasi dan juga auto asyn dengan member lainnya
2. Simple Interface
3. Postman gratis sampai 3 member dan unlimited collection