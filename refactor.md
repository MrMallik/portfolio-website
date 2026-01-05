# Monorepo Refactor Checklist

This document outlines the steps to convert the portfolio website into a monorepo structure with separate `frontend/` and `backend/` directories, each with their own `package.json`, plus a root `package.json` for shared devDependencies.

## Structure Overview

```
portfolio-website/
├── package.json       # Root: Shared devDependencies (TypeScript, ESLint, etc.)
├── frontend/          # All frontend code
│   ├── package.json   # Frontend: Runtime deps + frontend-specific devDeps
│   ├── src/
│   ├── public/
│   ├── dist/          # Build output
│   └── ...config files
├── backend/           # Future backend code
│   └── package.json   # Backend: Runtime deps + backend-specific devDeps
├── .github/
│   └── workflows/
│       └── manual.yml  # Stays at root, commands updated
└── refactor.md        # This file
```

## Checklist

### 1. Create Directory Structure
- [ ] Create `frontend/` directory
- [ ] Create `backend/` directory

### 2. Move Frontend Files
- [ ] Move `src/` → `frontend/src/`
- [ ] Move `public/` → `frontend/public/`
- [ ] Move `index.html` → `frontend/index.html`

### 3. Create Root package.json
- [ ] Create root `package.json` with shared devDependencies:
  ```json
  {
    "name": "portfolio-website",
    "private": true,
    "version": "0.0.0",
    "type": "module",
    "scripts": {
      "dev:frontend": "cd frontend && npm run dev",
      "build:frontend": "cd frontend && npm run build",
      "lint:frontend": "cd frontend && npm run lint",
      "preview:frontend": "cd frontend && npm run preview"
    },
    "devDependencies": {
      "@eslint/js": "^9.25.0",
      "@types/node": "^22.15.18",
      "eslint": "^9.25.0",
      "globals": "^16.0.0",
      "typescript": "~5.8.3",
      "typescript-eslint": "^8.30.1"
    }
  }
  ```
  - [ ] Note: Shared dev tools (TypeScript, ESLint core) go here
  - [ ] Root scripts allow running commands from root directory

### 4. Create Frontend package.json
- [ ] Create `frontend/package.json` with frontend-specific dependencies:
  - [ ] Move all `dependencies` from current package.json
  - [ ] Move frontend-specific `devDependencies`:
    - `@types/react`
    - `@types/react-dom`
    - `@vitejs/plugin-react`
    - `eslint-plugin-react-hooks`
    - `eslint-plugin-react-refresh`
    - `tw-animate-css`
    - `vite`
  - [ ] Update `name` field (e.g., `"portfolio-frontend"`)
  - [ ] Keep frontend-specific scripts: `dev`, `build`, `lint`, `preview`

### 5. Move and Update Configuration Files
- [ ] Move `vite.config.ts` → `frontend/vite.config.ts`
  - [ ] Verify path alias `"@": path.resolve(__dirname, "./src")` (should work as-is)
- [ ] Move `tsconfig.json` → `frontend/tsconfig.json`
  - [ ] Verify paths `"@/*": ["./src/*"]` (should work as-is)
- [ ] Move `tsconfig.app.json` → `frontend/tsconfig.app.json`
- [ ] Move `tsconfig.node.json` → `frontend/tsconfig.node.json`
- [ ] Move `eslint.config.js` → `frontend/eslint.config.js`
  - [ ] Verify `ignores: ['dist']` (should work as-is)
- [ ] Move `components.json` → `frontend/components.json`
  - [ ] Fix CSS path: `"css": "src/styles/globals.css"` → `"css": "src/index.css"` (file mismatch)

### 6. Move Lock Files
- [ ] Move `package-lock.json` → `frontend/package-lock.json` (or keep at root if using workspaces)
- [ ] Move `yarn.lock` → `frontend/yarn.lock` (or remove if using npm only)
- [ ] Note: With root package.json, you may want to use npm workspaces (see below)

### 7. Create Backend Package.json
- [ ] Create `backend/package.json` with minimal structure:
  ```json
  {
    "name": "portfolio-backend",
    "private": true,
    "version": "0.0.0",
    "type": "module"
  }
  ```

### 8. Update GitHub Actions Workflow
- [ ] Update `.github/workflows/manual.yml`:
  - [ ] Line 36: Change `npm install` → `cd frontend && npm install`
  - [ ] Line 40: Change `npm run build` → `cd frontend && npm run build`
  - [ ] Line 63: Change `source: "dist/*"` → `source: "frontend/dist/*"`

### 9. Update .gitignore
- [ ] Update `.gitignore` to handle new structure:
  - [ ] Ensure `**/node_modules` is ignored (or keep `node_modules`)
  - [ ] Ensure `**/dist` is ignored (or keep `dist` and add `frontend/dist`)
  - [ ] Add `backend/dist` if needed

### 10. Root-Level Files (Keep at Root)
- [ ] Keep `.gitignore` at root (already updated above)
- [ ] Keep `.github/` at root
- [ ] Keep `README.md` at root (or create separate ones)
- [ ] Keep `refactor.md` at root (this file)

### 11. Verification Steps
- [ ] Navigate to `frontend/` directory
- [ ] Run `npm install` to verify dependencies install correctly
- [ ] Run `npm run dev` to verify development server starts
- [ ] Run `npm run build` to verify build works
- [ ] Check that `frontend/dist/` is created after build
- [ ] Verify all `@/` imports still work (should work as-is since paths are relative)

### 12. Cleanup
- [ ] Remove old `node_modules/` from root (if exists)
- [ ] Remove old `dist/` from root (if exists)
- [ ] Verify git status shows only expected changes

## Notes

- All configuration files use relative paths, so they should work without modification once moved to `frontend/`
- The GitHub Actions workflow file stays at `.github/workflows/manual.yml` (root level)
- **Root package.json**: Contains shared devDependencies (TypeScript, ESLint core) that both frontend and backend can use
- **Frontend package.json**: Contains all runtime dependencies and frontend-specific devDependencies (Vite, React types, etc.)
- **Backend package.json**: Will contain backend-specific dependencies when created
- Each directory will have its own `node_modules/` for its specific dependencies
- Root `node_modules/` will contain shared devDependencies

## Optional: npm Workspaces

If you want to use npm workspaces for better dependency management, add to root `package.json`:

```json
{
  "workspaces": [
    "frontend",
    "backend"
  ]
}
```

Benefits:
- Single `npm install` at root installs all workspace dependencies
- Shared dependencies are hoisted to root `node_modules/`
- Can run scripts from root: `npm run dev --workspace=frontend`

If using workspaces:
- Keep `package-lock.json` at root
- Update GitHub Actions: `npm install` at root (installs all workspaces)
- Update scripts to use workspace syntax if desired

## Testing After Refactor

### From Root Directory
1. **Development**: `npm run dev:frontend` (or `cd frontend && npm run dev`)
2. **Build**: `npm run build:frontend` (or `cd frontend && npm run build`)
3. **Lint**: `npm run lint:frontend` (or `cd frontend && npm run lint`)
4. **Preview**: `npm run preview:frontend` (or `cd frontend && npm run preview`)

### From Frontend Directory
1. **Development**: `npm run dev`
2. **Build**: `npm run build`
3. **Lint**: `npm run lint`
4. **Preview**: `npm run preview`

## Dependency Distribution

### Root package.json (Shared Dev Tools)
- `typescript` - Shared TypeScript compiler
- `eslint` - Shared ESLint core
- `@eslint/js` - ESLint JavaScript config
- `typescript-eslint` - TypeScript ESLint integration
- `globals` - ESLint globals
- `@types/node` - Node.js type definitions (useful for both frontend and backend)

### Frontend package.json (Frontend-Specific)
- **Runtime Dependencies**: All React, UI libraries, routing, etc.
- **DevDependencies**:
  - `vite` - Frontend build tool
  - `@vitejs/plugin-react` - Vite React plugin
  - `@types/react` - React type definitions
  - `@types/react-dom` - React DOM type definitions
  - `eslint-plugin-react-hooks` - React hooks linting
  - `eslint-plugin-react-refresh` - React refresh linting
  - `tw-animate-css` - Tailwind animations

### Backend package.json (Future)
- Backend runtime dependencies (Express, database drivers, etc.)
- Backend-specific devDependencies (if any)

## Future Considerations

- Add scripts to run both frontend and backend from root (when backend is created)
- Consider TypeScript project references if frontend and backend need to share types
- Consider using npm workspaces for better dependency hoisting and management
