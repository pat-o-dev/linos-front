# vuejs-small-shop

Petit projet e-commerce avec Vue 3, TailwindCSS et daisyUI.

---

## Installation

1. **Cloner le projet**
```
git clone <url-du-repo>
cd vuejs-small-shop
```

2. **Installer les dépendances**
```
npm install
```

3. **Lancer le serveur de développement**
```
npm run dev
```

---

## Stack

- **Vue 3** – framework frontend
- **Vite** – bundler rapide
- **TailwindCSS** – framework CSS utilitaire
- **daisyUI** – composants UI pour Tailwind
- **Axios** – requêtes HTTP
- **Pinia** – gestion d'état

---

## Setup TailwindCSS + daisyUI

1. Installer TailwindCSS avec Vite :

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Configurer `tailwind.config.js` :

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
```

3. Ajouter Tailwind dans `src/style.css` :

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Importer le CSS dans `main.ts` ou `main.js` :

```ts
import './style.css'
```

---

## Structure du projet

```
src/
├─ components/  # composants réutilisables
├─ composables/ # fonctions composables (ex: useProducts)
├─ pages/       # pages Vue
├─ types/       # interfaces TypeScript
├─ router/      # routes Vue Router
├─ stores/      # stores Pinia
└─ App.vue
```

---

## Scripts utiles

```bash
npm run dev      # serveur dev
npm run build    # build production
npm run preview  # prévisualiser build
```

---

## Documentation

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/docs/installation/using-vite)
- [daisyUI](https://daisyui.com/)
- [Pinia](https://pinia.vuejs.org/)