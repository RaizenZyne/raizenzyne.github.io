# raizenzyne.github.io

>npm init --yes
>npm i typescript @types/node express @types/express dotenv tsconfig-paths tsc-alias

*package.json
"scripts": {
    "build": "tsc --project tsconfig.json && tsc-alias -p tsconfig.json",
    "start": "node backend/index.js",
    "dev": "nodemon -r tsconfig-paths/register src/index.ts"
  },


# Create tsconfig.json file
>npx tsc --init

*tsconfig.json
{
    "compilerOptions": {
      "rootDirs": ["src"],
      "outDir": "backend",
      "lib": ["ES2023"],
      "target": "ES2023",
      "module": "CommonJS",
      "moduleResolution": "node",
      "esModuleInterop": true,
      "types": ["node"],
      "strict": true,
      "baseUrl": "./",                                  
      "paths": {
        "@utils/*": ["src/utils/*"]
      },
    }
}

# Watching file changes
>npm i -D nodemon ts-node concurrently