# Vora Earth

Frontend web application for precision forest carbon Measurement, Reporting, and Verification (MRV), built on Next.js, React, and TypeScript.

Vora Earth connects field-level photogrammetry with allometric carbon accounting. It ingests 360-degree ground-level smartphone video, displays 3D Gaussian Splatting volumetric models, and computes above-ground biomass (AGB), below-ground biomass (BGB), and metric tons of CO2 equivalent (tCO2e) sequestered in agroforestry plots.

---

## Core Capabilities

- **3D Volumetric Tree Inspection**: WebGL-based viewer for 3D Gaussian Splatting (`.splat` / point cloud) models generated from ground-level video scans.
- **Biometric Reconstruction Telemetry**: Real-time extraction pipelines tracking Diameter at Breast Height (DBH), tree height, point cloud density, scale calibration factors, and confidence scoring.
- **Plot and Spatial Grid Management**: Interactive plot mapping, 2D forest coordinate grid canvases with canopy coverage modeling, biomass density summaries, and verification audit trails.
- **Allometric Modeling Suite**: Built-in interactive calculators and documentation implementing standard forestry equations (Pantropical Chave et al., Cairns et al., and IPCC carbon fraction parameters).
- **Public & Private Scan Workflows**: Public gallery of verified specimen scans alongside authenticated plot creation, scan claiming, and plot management.
- **Localization and Unit Configuration**: Bilingual interface supporting English and Indonesian (`en` / `id`), with dynamic toggling between Metric and Imperial measurement units.

---

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| UI Library | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4, PostCSS |
| Animations & Motion | Framer Motion |
| Smooth Scrolling | Lenis |
| Spatial & Mapping | Leaflet, HTML5 2D Canvas |
| State & Auth | React Context (`AuthProvider`, `ScanProgressProvider`) |

---

## Project Structure

```
├── public/                  Static assets, demo scans, and icons
├── src/
│   ├── app/
│   │   ├── docs/            Methodology documentation (allometry, 3D pipeline)
│   │   ├── example/         Quick redirect to reference specimen
│   │   ├── gallery/         Public scan repository and search
│   │   ├── login/           Authentication portal
│   │   ├── my-plots/        User plot dashboard (protected)
│   │   ├── plots/           Plot detail view and plot creation workflow
│   │   ├── reconstruct/     Scan upload, progress telemetry, and 3D viewer
│   │   ├── register/        Account registration
│   │   ├── globals.css      Global style definitions and design tokens
│   │   ├── layout.tsx       Root layout with context providers and navigation
│   │   └── page.tsx         Landing page
│   ├── components/
│   │   ├── AuthProvider.tsx         Authentication state, i18n, and unit conversion
│   │   ├── Loader.tsx               Custom loading state indicator
│   │   ├── Navbar.tsx               Header navigation with status and language controls
│   │   ├── PlotMap.tsx              Leaflet map integration for plot coordinates
│   │   ├── Reveal.tsx               Scroll-triggered element reveals
│   │   ├── ScanProgressPill.tsx     Persistent floating scan processing telemetry
│   │   ├── ScanProgressProvider.tsx Background scan polling and state store
│   │   └── SmoothScrollProvider.tsx Lenis smooth scrolling wrapper
│   └── middleware.ts        Route protection for authenticated paths
├── .env.local               Local environment variable overrides
├── next.config.ts           Next.js build and image configuration
├── package.json             Project dependencies and scripts
└── tsconfig.json            TypeScript compiler configuration
```

---

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or compatible package manager (pnpm, yarn)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/glacerous/vora-earth.git
cd vora-earth
npm install
```

### Environment Configuration

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
```

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | Base URL of the Vora backend API service | `https://vora-52k9.onrender.com` |

### Development Server

Start the local development server:

```bash
npm run dev
```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

- `npm run dev`: Runs Next.js in development mode with hot reloading.
- `npm run build`: Compiles the application for production deployment.
- `npm run start`: Starts the production server after a build.
- `npm run lint`: Executes ESLint checks across the codebase.

---

## Methodology & Scientific References

Vora Earth utilizes standardized forestry allometry formulas for non-destructive carbon estimation:

1. **Above-Ground Biomass (AGB)**:
   $$AGB = 0.0509 \times \rho \times DBH^2 \times H$$
   Based on pantropical moist forest equations from Chave et al. (2005 / 2014), where $\rho$ is wood specific gravity ($g/cm^3$), $DBH$ is diameter at breast height ($cm$), and $H$ is total tree height ($m$).

2. **Below-Ground Biomass (BGB)**:
   $$BGB = \exp(-1.0587 + 0.8836 \times \ln(AGB))$$
   Derived from Cairns et al. (1997) root-to-shoot regression models.

3. **Carbon & Carbon Dioxide Equivalent ($CO_2e$)**:
   $$\text{Carbon} = (AGB + BGB) \times 0.47$$
   $$CO_2e = \text{Carbon} \times \frac{44}{12}$$
   Applying the standard IPCC carbon fraction (0.47) and molecular mass ratio for carbon to $CO_2$ ($44/12$).

---

## License

Internal proprietary software. All rights reserved.
