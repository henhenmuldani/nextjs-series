//! Create Project
/* 
npx create-next-app@latest
√ What is your project named? ... nextjs13-course-traversy
√ Would you like to use TypeScript with this project? ... No 
√ Would you like to use ESLint with this project? ... No 
√ Would you like to use Tailwind CSS with this project? ... Yes
√ Would you like to use `src/` directory with this project? ... No
√ Use App Router (recommended)? ... Yes
√ Would you like to customize the default import alias? ... Yes
√ What import alias would you like configured? ... @/*

* coba run
npm run dev
*/

//! Mulai Coding Dasar
/* 
1. hapus semua code di app/page.js
2. ketik rafce (react arrow function component export)
3. nama fungsinya HomePage
4. remove global.css ganti sama file dari https://github.com/bradtraversy/next-13-crash-course
5. delete page.module.css
*/

//! Routing di nextjs 13
/* 
1. untuk routing di next js cukup buat folder di app dan file page.js atau page.jsx di dalamnya
2. buat folder about dan file page.jsx di dalamnya
3. rafce
4. nama fungsinya AboutPage
5. untuk nested routing, tinggal buat folder di dalam folder routenya dan file page.jsx di dalamnya
6. buat folder team dan file page.jsx di dalam folder about
7. rafce
8. nama fungsinya TeamPage
*/

//! Layouts di nextjs 13
/* 
1. untuk layout sudah dihandle di layout.js
2. jika ingin buat layout per route, maka tinggal buat file layout.jsx di dalam folder routenya
3. buat file layout.jsx di dalam folder about
4. rafce
5. nama fungsinya AboutLayout
6. tambahkan children 
7. di dalam layout ada metadata fungsinya untuk SEO
8. kita bisa tambahkan title dll yang terkait SEO
9. jika ada eror extra atribute from server, hydration maka abaikan saja itu dikarenakan extension
*/

//! Component di nextjs 13
/* 
1. buat folder components di dalam app
2. buat file Header.jsx di dalam folder components
3. rafce
4. nama fungsinya Header
5. isi header
6. import header di layout.jsx
7. Component pada nextjs 13 ada React Server Component dan React Client Component
8. React Server Component akan di render di server
9. React Client Component akan di render di client
10. Server Component tidak bisa pakai useEffect dan useState, namun banyak keunggulan untuk SEO
11. untuk menjadikan client componetn maka paling atas harus ada 'use client';
*/

//! Fetching Data di nextjs 13
/* 
1. buat folder code di dalam app
2. buat folder repos di dalam folder code
3. buat file page.jsx di dalam folder repos
4. rafce
5. nama fungsinya ReposPage
6. isi repos
7. buat fungsi fetchRepos
8. install react-icons
9. npm i react-icons
10. jika eror pakai next/image, maka tambahkan ini untuk ambil gambar dari url
11. https://nextjs.org/docs/messages/next-image-unconfigured-host

*/

//! Buat Loading Data di nextjs 13
/* 
1. buat file loading.jsx di dalam folder app
2. rafce
3. nama fungsinya LoadingPage
4. isi loading
5. loading akan auto terpakai jika ada fetch data
6. loading page otomatis untuk server component
7. untuk client component harus pakai useState, useEffect, dan Suspense
*/

//! Buat Dynamic Route di nextjs 13
/* 
1. buat folder [id] di dalam folder repos
2. buat file page.jsx di dalam folder [id]
3. rafce
4. nama fungsinya RepoPage
5. isi repo
6. buat component Repo dan RepoList
7. fetching di Repo dan RepoList
8. import Repo dan RepoList di ReposPage
9. Suspense digunakan untuk loading
*/

//! Caching and revalidation di nextjs 13
/* 
1. revalidate adalah waktu untuk update data
2. jika ada data baru maka akan diupdate
3. jika tidak ada data baru maka akan diambil dari cache
4. tambahkan revalidate di fetch
*/

//! API Routes di nextjs 13
/* 
1. semuanya ada di app/api
*/
