# Green Tech App

This project is a Green Tech application. It consists of a backend server (Express.js) and a frontend application (React + Vite).


## How to Start the App

Follow these steps to get the application running:


1.  **Start by installing the packages:**

    ```bash
      npm install
    ```
    ```

2.  **Start the Backend Server:**
    Navigate to the `backend` directory and start the Node.js server.

    ```bash
    cd backend
    node server.js
    ```

3.  **Start the Frontend Application:**
    Open a new terminal, navigate back to the root directory of the project, and start the frontend development server.

    ```bash
    cd ..
    npm run dev
    ```

    The frontend application will typically be available at `http://localhost:5173` (or another port if 5173 is in use).



## Folder Structure

```
.
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── backend/
│   ├── server.js
│   └── db/
│       ├── data.json
│       └── users.json
├── public/
│   ├── logo.svg
│   ├── bg/
│   │   ├── ayush-kumar-hv9Z6B_cHws-unsplash copy.jpg
│   │   ├── ayush-kumar-hv9Z6B_cHws-unsplash.jpg
│   │   └── jean-philippe-delberghe-75xPHEQBmvA-unsplash.jpg
│   └── images/
│       ├── 1981-digital-bf9sZBcGQl4-unsplash copy.jpg
│       ├── 1981-digital-bf9sZBcGQl4-unsplash.jpg
│       └── pexels-barbland-29143894.jpg
└── src/
    ├── App.tsx
    ├── globals.css
    ├── main.tsx
    ├── vite-env.d.ts
    ├── assets/
    │   └── icons/
    │       ├── 3d-pan.svg
    │       ├── 3d-rotate.svg
    │       ├── 3D-vehicles-logo.svg
    │       ├── arrow-up-down.svg
    │       ├── bag-svgrepo-com.svg
    │       ├── bell-svgrepo-com.svg
    │       ├── bell.svg
    │       ├── bookmark-icon.svg
    │       ├── c30abb1d21b35e0135f1ac64b6c9cc1a.svg
    │       ├── calendar-days-svgrepo-com.svg
    │       ├── calendar-svgrepo.svg
    │       ├── check-circle.svg
    │       ├── check-double.svg
    │       ├── code.svg
    │       ├── connect-bank.svg
    │       ├── cookie.svg
    │       ├── credit-card.svg
    │       ├── database.svg
    │       ├── deposit.svg
    │       ├── file-document.svg
    │       ├── file-fetch-xhr.svg
    │       ├── file-manifest.svg
    │       ├── home.svg
    │       ├── language-globe.svg
    │       ├── layers.svg
    │       ├── money-send.svg
    │       ├── performance.svg
    │       ├── warranty-term-svgrepo-com.svg
    │       ├── watch.svg
    │       └── whatsapp-icon copy.svg
    ├── components/
    │   ├── AuthForm.tsx
    │   ├── CustomInput.tsx
    │   ├── DoughnutChart.tsx
    │   ├── EnergySavedChart.tsx
    │   ├── MobileNavUser.tsx
    │   ├── Sidebar.tsx
    │   ├── SustainabilityScoreBox.tsx
    │   ├── UserDropDown.tsx
    │   └── ui/
    │       ├── Btn.tsx
    │       ├── Button.tsx
    │       ├── Card.tsx
    │       ├── CardContent.tsx
    │       ├── CardDash.tsx
    │       ├── dropdown-menu.tsx
    │       ├── Footer.tsx
    │       ├── FooterUser.tsx
    │       ├── form.tsx
    │       ├── HeaderBox.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── MobileNav.tsx
    │       ├── NavBar.tsx
    │       ├── sheet.tsx
    │       └── textarea.tsx
    ├── constants/
    │   └── index.ts
    ├── Layouts/
    │   └── SidebarLayout.tsx
    ├── lib/
    │   └── utils.ts
    ├── Pages/
    │   ├── Auth/
    │   │   ├── SignIn/
    │   │   │   └── index.tsx
    │   │   └── SignUp/
    │   │       └── index.tsx
    │   ├── Dashboard/
    │   │   └── index.tsx
    │   ├── Home/
    │   │   ├── CTASection.tsx
    │   │   ├── HeroSection.tsx
    │   │   └── index.tsx
    │   ├── Profile/
    │   │   └── index.tsx
    ├── stores/
    │   └── authStore.ts
    ├── types/
    │   └── types.d.ts
    └── utils/
        └── useAuth.ts
```

