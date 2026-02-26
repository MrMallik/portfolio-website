# Backend Development Environment

## 🚀 Quick Start

```bash
# Install dependencies (already done)
npm install

# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Run production build
npm start
```

## 📦 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start development server with hot reload using nodemon + tsx |
| `build` | `npm run build` | Build production bundle using tsdown (outputs to `dist/`) |
| `start` | `npm run start` | Run the production build from `dist/index.js` |
| `clean` | `npm run clean` | Remove the `dist/` directory |
| `type-check` | `npm run type-check` | Run TypeScript type checking without emitting files |

## 🛠️ Tech Stack

- **Runtime**: Node.js with ES Modules
- **Language**: TypeScript 5.9+
- **Development**: 
  - `nodemon` - File watcher for hot reload
  - `tsx` - Fast TypeScript execution (replaces ts-node)
- **Production**: 
  - `tsdown` - Modern bundler built on Rolldown (Rust-based)
- **Type Checking**: TypeScript with strict mode enabled

## 📁 Project Structure

```
backend/
├── src/
│   └── index.ts          # Entry point
├── dist/                 # Build output (generated)
├── node_modules/
├── nodemon.json          # Nodemon configuration
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

## ⚙️ Configuration Files

### `tsconfig.json`
- **Target**: ES2022
- **Module**: ESNext with bundler resolution
- **Strict mode**: Enabled with additional safety checks
- **Output**: `dist/` directory
- **Source maps**: Enabled for debugging

### `nodemon.json`
- **Watch**: `src/` directory
- **Extensions**: `.ts`, `.json`
- **Executor**: `tsx` (faster than ts-node)
- **Environment**: Sets `NODE_ENV=development`

## 🔥 Development Workflow

1. **Start coding**: Write your code in `src/index.ts` or create new files in `src/`
2. **Run dev server**: `npm run dev` - Changes auto-reload
3. **Type check**: `npm run type-check` - Verify types without building
4. **Build**: `npm run build` - Create production bundle
5. **Test production**: `npm start` - Run the built code

## 📝 Notes

- **Hot Reload**: Nodemon watches for file changes and automatically restarts using tsx
- **Fast Execution**: tsx is significantly faster than ts-node for development
- **Production Bundle**: tsdown creates an optimized ESM bundle in `dist/`
- **Type Safety**: Strict TypeScript settings catch errors early
- **Clean Builds**: Use `npm run clean` before building if needed

## 🎯 Next Steps

You're all set! Start developing by:
1. Opening `src/index.ts`
2. Running `npm run dev`
3. Making changes and watching them reload automatically

Happy coding! 🎉
