Summary — warex-assignment
====================================

What this repo is
-----------------
- A small React single-page application bootstrapped with Create React App.
- Purpose: a UI that lists invoices/orders with a sidebar, search/create invoice area, a grid of invoice rows, and drawer views for "Paid" and "Partially paid" invoice details.

Tech stack
----------
- React 18 (create-react-app)
- Plain CSS files for styling (no CSS-in-JS or CSS modules)
- Test tooling via @testing-library (basic starter test included)
- Build & serve scripts provided by react-scripts. gh-pages listed as a devDependency.

Project structure (important folders/files)
-------------------------------------------
- public/: static assets and index.html (favicon, logos, manifest).
- src/
  - App.js: top-level component — holds drawer display state and mounts main pieces.
  - components/
    - SideBar/: Sidebar, logo and selection items.
    - Dashboard/: Dashboard container.
    - DashboardHeader/, HeaderIcons/: header icons area.
    - InvoiceComponent/: search + "Create new Invoice" UI.
    - GridComponent/, GridHeader/, GridRows/: the table-like invoice grid.
    - Buttons/: payment-status buttons that open drawers.
    - PaidDrawer/ and PartiallyPaidDrawer/: drawer UIs with invoice/payment details.
    - SelectionItems/, Constants/: (Constants provides gridData and selection lists referenced by components).
  - index.js, index.css, reportWebVitals.js, setupTests.js

Behavior highlights
-------------------
- App holds two state values to control drawer visibility and passes handlers to child components.
- GridRows render data from gridData (via Constants) and show a Button that toggles the appropriate drawer.
- Drawers render static invoice/payment details (example: amounts, transaction IDs).
- Static assets (png/jpg/svg) are used for icons and visuals.

How to run
----------
1. npm install
2. npm start
3. npm run build for production

Notes & possible improvements
-----------------------------
- Data is static (Constants). Integrate API/backend or state management for dynamic data.
- Consider accessibility (button semantics, keyboard focus in drawers).
- Add PropTypes/TypeScript for type safety and more unit/integration tests.
- Improve responsiveness and add tests around drawer interactions.
