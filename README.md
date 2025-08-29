# bdjang.github.io
This personal portfolio website is hosted on **GitHub Pages** and built with **Vite** and **React 18**. An Express.js application deployed on Heroku fetches art feed JSON data from a MongoDB cluster and serves it via RESTful APIs in the footer.

## Notes
The `deploy.yml` file needs to be updated to make GitHub Actions function correctly. This required manually changing the version numbers in the file (e.g. `uses: actions/setup-node@v3` to `uses: actions/setup-node@v4`).

### Set Up TypeScript

1. Install TypeScript and React type definitions

```bash
npm install --save-dev typescript @types/react @types/react-dom
```

2. Rename files from `.jsx` to `.tsx`

3. Update components with TypeScript types

4. Create a `tsconfig.json` file

```bash
npx tsc --init
```

5. Restart dev server

```bash
npm run dev
```

6. Create `global.d.ts` file

Reasons for the file are to declare global type definitions and interfaces and to declare modules for non-TypeScript files (e.g. `.scss`, `.svg`) so TypeScript can recognize these imports. It enables  custom modules and global types that are not defined elsewhere to be compatible with TypeScript.

7. In `global.d.ts`, declare a module for `.module.scss` files so TypeScript recognizes the import statements

```TypeScript
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
```

8. Update the import statement to use the default export for each React component:

```TypeScript
import styles from "./Project.module.scss";
```

9. Update the `className` value:

```HTML
<div className={styles.projectDesc}>
    <h2>{props.projectTitle}</h2>
    <p>{props.projectDescription}</p>
</div>
```

*You cannot apply styles just by importing; you must use `className={styles.className}` to apply styles.*

10. Include `global.d.ts` in `tsconfig.json` file

### Access to Art Feed

The `corsOptions` object in [email-graffiti-collection-server](https://github.com/bdjang/email-graffiti-collection-server) specifies which domains have access to the Express.js server.