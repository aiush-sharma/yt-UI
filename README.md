# YouTube Clone (yt-clone)

A modern, highly responsive YouTube user interface clone built with **React 19**, **Vite**, and **Tailwind CSS v4**. It features real-time search functionality integrated with the official YouTube Data API v3, a customizable sidebar layout, skeleton screen loading animations, and adaptive layout configurations.

---

## 🚀 Key Features

- **Real-time YouTube Search**: Fetch real video data dynamically from the YouTube Data API v3 based on user queries.
- **Fully Responsive Layout**: Built with mobile-first styling principles, featuring a collapsible side drawer and a dark backdrop overlay for mobile views.
- **Aesthetic Dark Theme UI**: A refined dark mode UI inspired by YouTube's premium layout, incorporating smooth micro-interactions and transitions.
- **Dynamic Skeleton Loaders**: Fluid loading animations (12 responsive grid skeletons) to enhance user experience during network requests.
- **Seamless Routing**: Utilizes React Router v7 for robust navigation and search query parameter persistence.
- **Error Boundaries & State Handling**: Gracefully handles API key errors, empty states, and network exceptions.

---

## 🛠️ Technology Stack

- **Frontend Library**: [React 19](https://react.dev/) (Hooks, `useMemo`, `useCallback`, state management)
- **Build Tool & Dev Server**: [Vite 8](https://vitejs.dev/) (featuring `@tailwindcss/vite` plugin compilation)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **API Client**: [Axios](https://axios-http.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: SPA Routing configured with `vercel.json` rewrites for [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
yt-clone/
├── public/                 # Static assets (Favicons, assets)
├── src/
│   ├── Components/         # Extensible optimization components
│   ├── Hooks/              # Custom React hooks (useYouTubeSearch, ThemeContext)
│   ├── Pages/              # Page views (Home, Search Results)
│   ├── Shared/             # Global layout elements (Navbar, Sidebar)
│   ├── UI/                 # Reusable presentational components (VideoCard)
│   ├── App.css             # Main styling rules
│   ├── App.jsx             # Root layout and application routing
│   ├── index.css           # Global Tailwind directives
│   └── main.jsx            # Application entrypoint
├── .env           #  environment configuration template
├── package.json            # Application dependencies and script tasks
├── vercel.json             # Vercel deployment configuration
└── vite.config.js          # Vite custom build configuration
```

---

## ⚡ Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Make sure you have Node.js (v18+) and npm installed on your system.

### 1. Installation

Clone the repository and install the npm dependencies:

```bash
# Clone the repository
git clone https://github.com/aiush-sharma/yt-UI.git

# Navigate into the project directory
cd yt-clone

# Install packages
npm install
```

### 2. Environment Variables Configuration

The application requires an API Key from Google Cloud Console to query the YouTube Data API.

Create a `.env` file in the root directory of the project:

```bash
# Copy example template or create a new .env file
touch .env
```

Add the following environment variables to your `.env`:

```env
VITE_YOUTUBE_API_KEY=YOUR_YOUTUBE_API_KEY_HERE
VITE_YOUTUBE_API_URL=https://www.googleapis.com/youtube/v3
```

> [!NOTE]
> To obtain a YouTube Data API v3 Key:
>
> 1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
> 2. Create a project and search for **YouTube Data API v3**.
> 3. Enable the API and navigate to the **Credentials** page to generate a new API Key.

### 3. Run the Development Server

Start the local development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to view the application.

### 4. Build for Production

Compile the production bundle optimized for high-performance deployment:

```bash
npm run build
```

The output will be generated inside the `dist/` directory.

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
