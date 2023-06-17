//! Install Next.js
//  - npx create-next-app@latest --experimental-app
//  - cd folder project
//! Install Tailwind
/* 
    - npm install -D tailwindcss postcss autoprefixer
    - npx tailwindcss init -p
*/
//! Buka file tailwind.config.js
content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx}",
];
//! Buka global.css
/*     
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
*/
//! Install Flowbite dan Flowbite-react
/* 
  - npm i flowbite flowbite-react
  - dokumentasi disini https://flowbite-react.com/ dan https://flowbite.com/
  - untuk penggunaannya jan lupa impor
  - contoh: import { Button, Label, TextInput, Checkbox } from "flowbite-react";
*/
//! Tambahkan di tailwind.config.js
content: [
  //....
  "./node_modules/flowbite/**/*.js",
  "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
];
plugins: [require("flowbite/plugin")];

//! Install Firebase
/* 
1. https://console.firebase.google.com/
2. Buat project baru
3. Pilih project
4. Pilih web
5. Copy config
6. npm install firebase
7. buat file .env
8. buat folder firebase di src
9. buat file config.js


*/
