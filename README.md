<div class="hero-icon" align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
</div>

<h1 align="center">
happy-moments-3d-webgl
</h1>
<h4 align="center">Share cherished memories in a whimsical, interactive 3D web application.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Framework-React-61DAFB?logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Frontend-TypeScript%20%7C%20Three.js%20%7C%20CSS-blue" alt="Frontend">
  <img src="https://img.shields.io/badge/Runtime-Node.js-339933?logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/3D-Three.js-black?logo=three.js&logoColor=white" alt="Three.js">
</div>
<div class="badges" align="center">
  <img src="https://img.shields.io/github/last-commit/coslynx/happy-moments-3d-webgl?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/coslynx/happy-moments-3d-webgl?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/coslynx/happy-moments-3d-webgl?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📜 API Documentation
- 📄 License
- 👏 Authors

## 📍 Overview
This repository contains a Minimum Viable Product (MVP) for a web application called "Happy Moments Companion", designed to share and celebrate cherished memories in an interactive 3D environment. The application leverages React with TypeScript for a type-safe and component-based architecture, Three.js for 3D rendering, and CSS for styling. The application presents a whimsical and engaging user experience using 3D models, animations, and scroll-triggered interactions.

## 📦 Features
|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| 🖼️ | **3D Environment** | Immersive 3D environment for presenting happy moments using Three.js.                                        |
| 🗺️ | **Interactive Sections**| Sections for showcasing "Our Story," "Shared Hobbies," and "Future Adventures" with interactive 3D elements.                |
| 📜 | **Scroll Animations** | Scroll-triggered animations to create a dynamic and engaging user experience.                                    |
| 🎨 | **Whimsical Design**  | Organic and whimsical aesthetic with soft pastel colors and rounded shapes.                                         |
| 📱 | **Responsive Design** | Fully responsive layout adapting to different screen sizes and devices.                                              |
| ⚙️ | **Component Architecture** | Modular React components for easy maintenance and scalability.                                                  |
| 🚀 | **Performance Optimization** | Optimized 3D model loading, texture compression, and animation techniques to ensure smooth performance.             |
| 📦 | **Dependency Management** | Uses `npm` for managing project dependencies, ensuring easy setup and configuration.                            |

## 📂 Structure
```text
 happy-moments-3d-webgl/
├── public/
│   ├── models/
│   │   └── memory-box.glb
│   └── textures/
│       └── wood-texture.jpg
├── src/
│   ├── components/
│   │   ├── CTASection.tsx
│   │   ├── FutureSection.tsx
│   │   ├── HobbiesSection.tsx
│   │   ├── Hero.tsx
│   │   ├── MemoryBox.tsx
│   │   └── StorySection.tsx
│   ├── hooks/
│   │   └── useScrollAnimation.ts
│   ├── utils/
│   │   └── animationUtils.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── types.ts
├── .env
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

## 💻 Installation
> [!WARNING]
> ### 🔧 Prerequisites
> - Node.js v18 or higher
> - npm v8 or higher

### 🚀 Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/coslynx/happy-moments-3d-webgl.git
   cd happy-moments-3d-webgl
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with the required variables.

## 🏗️ Usage
### 🏃‍♂️ Running the MVP
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Access the application:
   - Open your browser and navigate to `http://localhost:5173`.

> [!TIP]
> ### ⚙️ Configuration
> - The application title can be configured in the `.env` file using the `VITE_APP_TITLE` variable.
> - The path to the 3D model can be configured using the `VITE_THREE_MODEL_PATH` variable.

### 📚 Examples
- View the 3D Memory Box in the Hero Section.
- Scroll through the "Our Story" section to see key milestones.
- Explore shared hobbies in the "Shared Hobbies" section.
- Select a future adventure in the "Future Adventures" section.
- Click the CTA button to share a memory.

## 🌐 Hosting
### 🚀 Deployment Instructions
#### Deploying to Netlify
1.  **Create a Netlify Account**: Sign up for a free account at [Netlify](https://www.netlify.com/).
2.  **Install Netlify CLI**: Install the Netlify Command Line Interface globally using npm:
   ```bash
   npm install -g netlify-cli
   ```
3.  **Authenticate with Netlify**: Log in to your Netlify account through the CLI:
   ```bash
   netlify login
   ```
4.  **Build the Project**: Build the React application using Vite:
   ```bash
   npm run build
   ```
5.  **Deploy to Netlify**: Navigate to the `dist` directory created by the build process and deploy it to Netlify:
   ```bash
   cd dist
   netlify deploy --prod
   ```
6.  **Set up environment variables**: Set up your environment variable such as `VITE_APP_TITLE` to `Happy Moments Companion` on the netlify console.

### 🔑 Environment Variables
- `VITE_APP_TITLE`:  The title of the application (e.g., Happy Moments Companion).
- `VITE_API_URL`: The base URL for the API (e.g., `http://localhost:3000`).
- `VITE_THREE_MODEL_PATH`: The path to the 3D model files (e.g., `/models/`).

## 📜 API Documentation
### 🔍 Endpoints
> There are no dedicated APIs for this MVP, as it is frontend focused using 3D rendering. This section will be updated when external API or more features are added.

### 🔒 Authentication
> Since there are no dedicated APIs for this MVP, this section will be updated when authentication is added.

### 📝 Examples
> Since there are no dedicated APIs for this MVP, this section will be updated when API examples are available.

> [!NOTE]
> ## 📜 License & Attribution
>
> ### 📄 License
> This Minimum Viable Product (MVP) is licensed under the [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) license.
>
> ### 🤖 AI-Generated MVP
> This MVP was entirely generated using artificial intelligence through [CosLynx.com](https://coslynx.com).
>
> No human was directly involved in the coding process of the repository: happy-moments-3d-webgl
>
> ### 📞 Contact
> For any questions or concerns regarding this AI-generated MVP, please contact CosLynx at:
> - Website: [CosLynx.com](https://coslynx.com)
> - Twitter: [@CosLynxAI](https://x.com/CosLynxAI)

<p align="center">
  <h1 align="center">🌐 CosLynx.com</h1>
</p>
<p align="center">
  <em>Create Your Custom MVP in Minutes With CosLynxAI!</em>
</p>
<div class="badges" align="center">
<img src="https://img.shields.io/badge/Developers-Drix10,_Kais_Radwan-red" alt="">
<img src="https://img.shields.io/badge/Website-CosLynx.com-blue" alt="">
<img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="">
<img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4,_v6-black" alt="">
</div>

## 3D Model Files Required

This project requires the following 3D model files that need to be created manually:

- `public/models/memory-box.glb`

These placeholder files need to be replaced with actual binary 3D model files.