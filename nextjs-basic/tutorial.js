/*
    ! Struktur file dalam folder routes
    * page
    * layout (jika menggunakan component yg beda dari global)
    * head
    * loading
    * error
    * styles.module.css (jika menggunakan css module yg beda dari global)
*/

//! Pages dan Route
/* 
    1. buat folder didalam app
    2. buat page.tsx
    3. ketik rfc untuk membuat function component
    4. rename function sesuai folder misal About
    5. http://localhost:3000/about
*/

//! Layout
/* 
    1. Layout berperan untuk membuat header dan footer bersama child component didalamnya
    2. tambahkan navbar di dalam body pada file layout.tsx
    3. layout bisa ditambahkan juga khusus pada routes tertentu
    4. buat file layout.tsx di folder routes misal about
    5. isi seperti pada file layout.tsx global
    6. buat navbar
*/

//! Dynamic Metadata
/* 
    1. metadata untuk SEO
    2. import type { Metadata } from "next";
*/

//! Fetching Data
/* 
    1. buat folder users
    2. buat file page.tsx
    3. rfc untuk membuat function component
    4. rename function sesuai folder misal function UsersPage
    5. buat folder lib di root folder (diluar src)
    6. buat file getAllUsers.tsx
    7. rfc untuk membuat function component
    8. rename function sesuai folder misal function getAllUsers
    9. tambahkan async await
    10. urlnya ini untuk tes https://jsonplaceholder.typicode.com/users
    11. ambil satu data untuk membuat type.d.ts
    12. buat file types.d.ts di root folder 
    13. copy data dari respone json dan ganti sesuai type data
    14. import getAllUsers from "./lib/getAllUsers" di page.tsx
    15. const usersData: Promise<User[]> = getAllUsers();
        const users = await usersData;
        console.log("users", users);
    16. map data users
*/

//! Fetching Dynamic Routes
/* 
    1. buat folder [userId] didalam folder users
    2. buat file page.tsx
    3. rfc untuk membuat function component
    4. rename function sesuai folder misal function UserPage
    5. buat type untuk parameter di atas function
    6. type Params = {
            params: {
                userId: string;
            };
        };
    7. export default function UserPage({ params: { userId } }: Params) 
    8. buat file getUser.tsx di folder lib
    9. rfc untuk membuat function component
    10. rename function sesuai folder misal function getUser
    11. tambahkan async await
    12. urlnya ini untuk tes `https://jsonplaceholder.typicode.com/users/${userId}`
    13. buat lagi untuk get post
    14. buat file getPosts.tsx di folder lib
    15. rfc untuk membuat function component
    16. rename function sesuai folder misal function getPosts
    17. tambahkan async await
    18. urlnya ini untuk tes `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    19. buat type post di types.d.ts
    20. lanjutannya ikutin contoh aja ya di nextjs-basic

*/
