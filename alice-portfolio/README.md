# Alice Musayidire Portfolio

A premium, high-performance professional portfolio built for Alice Musayidire, an Accounting & Financial Management expert.

## 🚀 Features

- **Interactive CV Viewer**: Optimized PDF reading experience with smooth expansion/collapse.
- **Dual Theme Support**: Seamless switching between "White Grey" and "Premium Dark" modes.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
- **Dynamic KPIs**: Animated counters showcasing 12+ years of expertise.
- **CI/CD Integrated**: Automated builds and checks via GitHub Actions.

## 🛠️ Tech Stack

- **Framework**: [React.js](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons (Feather)](https://react-icons.github.io/react-icons/icons/fi/)

## ⚡ Quick Start

1. **Install Dependencies**:
   ```bash
   cd alice-portfolio
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 🤖 CI/CD Pipeline

The project includes a GitHub Actions workflow in `.github/workflows/deploy.yml` that:
1. Triggers on every push to `main`.
2. Installs dependencies and runs a production build.
3. Uploads the `dist` folder as an artifact.

### Deployment Setup

To enable auto-deployment, uncomment the relevant section in `deploy.yml`:

- **GitHub Pages**: Ensure GitHub Pages is set to deploy from a branch (e.g. `gh-pages`).
- **Netlify**: Add `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` to your GitHub Repository Secrets.

## 📄 License

This project is private and intended for the professional portfolio of Alice Musayidire.
