module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};



//1. npm init karo
//2. npm i vite karo

//3. Copy from the tailwind website
//npm install -D tailwindcss postcss autoprefixer
//npx tailwindcss init

//4. make new file postcss.confing.js
//5. module.exports = {
// plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   }
// }
// paste this in it
//6.Add path to tailwind.config.js
///** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: ["*"],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }

// Paste the above

//7. Add "start": "vite" (in script of package.json)
//8. Now make css file and html file and add the things form the doc in css and link css to html file and you are good to go now