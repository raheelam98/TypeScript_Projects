# TypeScript_Projects
TypeScript is used in projects to make them more reliable, scalable, and maintainable. By adding static typing, it catches errors early, improves code readability, and enhances team collaboration. Ideal for both front-end and back-end development, it ensures cleaner, more efficient, and robust code.

**Folder** 

- pwd      # shows your current path
- ls       # lists files in the folder
- View hidden files on Mac Press Command + Shift + . (the period key). This will show hidden files in the folder.
- To hide the files again, press Command + Shift + . again.


Grants all users full read, write, and execute permissions on the specified folder and its contents
```
chmod <permission> <directory or filename>

sudo chmod -R 777 /path/to/folder

sudo chmod -R 777  /Users/user-name/Documents/folder-name
```

### TyeScript

[Installation - Next.js](https://nextjs.org/docs/app/getting-started/installation)

**Install typescript**
```npm install -g typescript```


### **Setup and Run TypeScript Project**

- npm -v   (Check installation)
- node -v  (Check installation)
- npm init -y  (Initialize Project - create package.json)
- npm i  @types/node -D ( Install TypeScript - node_modules, package-lock.json , add dependency)
- npx tsc --init     (Create TypeScript Config - generates tsconfig.json)
- mkdir src (Create Source Files)
- src/index.ts (Create a sample file)
- npx tsc    (Compile Code - compiles .ts files into JavaScript inside the dist/ folder)
- node dist/index.js  (Run Code)


- sudo npm i inquirer    ( add inquirer - but inquirer don’t has types)
- npm i @types/inquirer -D  ( inelli sense of inquirer)



### **Tutorials**

[TypeScript - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)


### **Videos**

[Literal types in typescript - IT MATE PK](https://www.youtube.com/watch?v=lonQTe9R0mY)

### **GitHub**

[create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

[Nextjs-Lectures - Hamzah-Syed](https://github.com/Hamzah-syed/Nextjs-lectures/tree/master)


