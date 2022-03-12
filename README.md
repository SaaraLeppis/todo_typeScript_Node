# NODE.js with Typescript

Classroom project @Helsinki Business College to learn how to use Typescript with Node and Express.
Learned also to use new tool [Postman](https://www.postman.com/).

## Setting up the project

```shell
npm init -t
tsc --init
```

### Changes to '`tsconfig.json`'

```js
"target":"es2018"
"moduleResolution": "node", /_ Specify how TypeScript looks up a file from a given module specifier. _/
"rootDir": "./src",
"outDir": "./dist",
```

### Installing dependencies:

```shell
  npm install --save express body-parser
  npm install --save-dev nodemon
```

Types for node

```shell
npm install --save-dev @types/node

npm install --save-dev @types/express
```

### Using compiler:

```shell
tsc -w
```

### Start **script** to package.json

`"start":"nodemon dist/app.js"`

### starting nodemon server

```shell
npm start
```

** -- SET UP DONE -- **

## Building the project

### using express 'Router'

```js
import { Router } from "express";
```

### using express 'RequestHandler'

```js
import { RequestHandler } from "express";
```

Instead of

```js
const createTodo=(req: Request, res:Response, next:NextFunction)=>
```

following can be used

```js
const createTodo: RequestHandler = (req, res, next) =>
```

## POSTMAN

### General view of usage

![Postman POST]('./assets/Screenshot_general1.jpeg')
![Postman PATCH and DELETE]('./assets/Screenshot_general2.jpeg')

- for 'DELETE' and 'PATCH' copy the id to end of address

- remember to choose 'Body - raw - JSON'
  ![Postman view selection]('./assets/Screenshot_selection.jpeg')
