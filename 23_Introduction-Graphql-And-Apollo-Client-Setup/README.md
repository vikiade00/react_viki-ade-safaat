### (23) Introduction Graphql

GraphQL adalah bahasa permintaan data (query language) dan juga lingkungan runtime yang digunakan untuk mengambil dan mengelola data dari berbagai sumber. Dibuat oleh Facebook, GraphQL bertujuan untuk mempermudah pengambilan data dengan memberikan kendali yang lebih besar kepada klien (client) dalam menentukan data yang ingin diambil.

#### Fitur pada Graphql

Terdapat 3 fitur utama di GraphQl client:

1. Query : mengambil data yang telah kita definisikan
2. Mutation : insert, update, delete, data
3. Subscription : Meng get update data secara realtime/ based on event

#### HASURA & HEROKU

Hasura dan Heroku adalah dua platform teknologi yang berbeda namun sering digunakan bersama-sama untuk membangun dan menyebarkan aplikasi web modern.

Hasura adalah platform pengembangan aplikasi back-end open-source yang memungkinkan Kita untuk membuat API GraphQL secara instan untuk database Kita. Hasura menyederhanakan proses pengembangan back-end dengan menyediakan API GraphQL otomatis, yang memungkinkan pengembang untuk fokus pada pengembangan front-end aplikasi dan meningkatkan produktivitas.

Heroku, di sisi lain, adalah platform layanan cloud computing yang memungkinkan Kita untuk menyebarkan, mengelola, dan mengukur aplikasi web Kita. Heroku memungkinkan pengembang untuk membangun dan menyebarkan aplikasi web dengan cepat dan mudah tanpa harus khawatir tentang infrastruktur server.

#### Apollo client

Apollo Client adalah sebuah library Javascript untuk mempermudah menggunakan GraphQL di sisi Frontend. dengan Apollo Client kita dapat mengelola data lokal dengan Graphql

#### Install Apollo Client

1. Creat new React Js project
   `npx create-react-app react-grpahql`
2. Install GraphQl dan Apollo Client
   `yarn add grpahql @apollo/client`
3. Jangan lupa untuk mengcommit setiap perubahan
