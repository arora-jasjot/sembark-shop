# Sembark Shop

A modern e-commerce shopping application built with React, TypeScript, and Vite. This project features a clean, responsive design with product browsing, detailed product views, and shopping cart functionality.

## 🚀 Features

- **Product Browsing**: Browse products with grid and list view options
- **Product Details**: Detailed product pages with images, descriptions, and pricing
- **Shopping Cart**: Add items to cart, manage quantities, and view totals
- **Responsive Design**: Mobile-friendly interface with adaptive layouts
- **Filtering & Sorting**: Sort products and filter by various criteria
- **Pagination**: Navigate through products with pagination controls
- **Smooth Animations**: Enhanced UX with Framer Motion animations

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v7
- **UI Components**: Material-UI (MUI)
- **Animations**: Framer Motion
- **HTTP Client**: Axios
- **Testing**: Cypress (E2E testing)
- **Icons**: React Icons

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** (for cloning the repository)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/arora-jasjot/sembark-shop.git
   cd sembark-shop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=https://fakestoreapi.com
   ```

## 🚀 Getting Started

### Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🧪 Testing

### Run Cypress Tests

Open Cypress Test Runner:

```bash
npx cypress open
```

Run Cypress tests headlessly:

```bash
npx cypress run
```

**Note**: Make sure the development server is running (`npm run dev`) before running Cypress tests, as they target `http://localhost:5173`.

### Test Coverage

The project includes E2E tests for:
- Home page functionality
- Product details page
- Shopping cart page

## 📁 Project Structure

```
sembark-shop/
├── cypress/              # Cypress E2E tests
│   ├── e2e/             # Test files
│   └── support/         # Test support files
├── public/              # Static assets
├── src/
│   ├── api/             # API service functions
│   ├── assets/          # Images, icons, and other assets
│   ├── components/      # React components
│   │   ├── Cart/        # Cart-related components
│   │   ├── Common/      # Shared components
│   │   ├── Home/        # Home page components
│   │   └── ProductDetails/ # Product details components
│   ├── constants/      # Application constants
│   ├── context/         # React Context providers
│   ├── pages/           # Page components
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main App component
│   └── main.tsx         # Application entry point
├── .env                 # Environment variables (create this)
├── cypress.config.ts    # Cypress configuration
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🎨 Key Features Implementation

### Routing

The application uses React Router for navigation:
- `/` - Home page with product listing
- `/product/:id` - Product details page
- `/cart` - Shopping cart page

### State Management

- React Context API for global state management
- `ProductsContext` - Manages product data and filtering
- `CartContext` - Manages shopping cart state

### Styling

- Tailwind CSS for utility-first styling
- Custom color scheme and responsive breakpoints
- Material-UI components for complex UI elements

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_API_URL` | Base URL for the API | Yes |
