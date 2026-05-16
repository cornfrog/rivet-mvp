# 🚀 Rivet

**Rivet** is a production-quality, mobile-first Invoice Generator MVP designed for freelancers and small businesses who value both speed and high-end aesthetics. Built with a modern React stack, it delivers a "Plug-and-Play" experience for generating professional PDF invoices in seconds.

## ✨ Key Features

-   **Elite UI/UX**: A sophisticated "Slate & Blue" theme powered by Material UI (MUI v6) and Plus Jakarta Sans typography.
-   **Mobile-First Design**: Fully responsive layout that transitions from a sticky desktop workspace to a thumb-optimized mobile flow.
-   **Smart Form Validation**: Real-time field validation with "Lazy" error reporting—errors only appear after you've interacted with a field.
-   **High-Fidelity PDF Generation**: Precision-calibrated A4 templates using `jsPDF` and `html2canvas` with high-resolution scaling.
-   **Dynamic Item Management**: Auto-calculating line items with support for rates, quantities, and automated subtotaling.
-   **Interactive Navigation**: A modern, animated dropdown Navbar for a clean, immersive full-screen feel.

## 🛠️ Tech Stack

-   **Frontend**: React (Vite)
-   **UI Framework**: Material UI (MUI v6)
-   **PDF Engine**: jsPDF & html2canvas
-   **Routing**: React Router
-   **Styling**: Emotion (MUI System)

## 🏗️ Architecture

The project follows a modular, concern-separated architecture:

-   `/src/hooks`: Custom hooks for state management (`useInvoiceState`) and PDF orchestration (`usePDFGenerator`).
-   `/src/components/invoice-form`: Modular form sections and validation logic.
-   `/src/components/live-preview`: Visual feedback components and high-fidelity PDF templates.
-   `/src/theme`: Centralized MUI theme configuration.
-   `/src/utils`: Factory functions and default templates.

## 🚀 Getting Started

1.  **Clone the repository**
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run in development mode**:
    ```bash
    npm run dev
    ```
4.  **Build for production**:
    ```bash
    npm run build
    ```

## 🐞 Bug Reporting & Contact

Found a bug or want to collaborate? Reach out via the **About** page or contact the developer at [thecornfrog@gmail.com](mailto:thecornfrog@gmail.com).

