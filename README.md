# Quanum Patient Aliases

A React 19 + TypeScript + Vite + Tailwind CSS implementation of the **Quanum Patient Summary Information — Patient Aliases** screen.

## Features

- Read-only patient name field
- Aliases data table (Last, First, Middle, Suffix)
- Add new alias row (inline)
- Edit existing aliases (inline editing)
- Delete aliases
- Transfer/swap alias with primary patient name
- Save and Cancel actions
- Responsive layout
- Accessible (aria labels, semantic tables)

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Build

```bash
npm run build
npm run preview
```

## Repository Architecture

```
src/
├── components/
│   ├── ui/         # Reusable UI controls (Button, IconButton, Input, Card)
│   ├── sections/   # Page sections (PanelHeader, FooterActions)
│   └── features/   # Feature components (PatientAliases, AliasesTable)
├── pages/          # Route pages
├── layouts/        # Shared layouts
├── hooks/          # Custom hooks
├── context/        # React contexts
├── services/       # API/data services
├── data/           # Mock data
├── types/          # TS types
├── lib/            # 3rd-party wrappers
├── utils/          # Helpers
├── constants/      # App constants
├── store/          # Global state
└── styles/         # Additional styles
```
