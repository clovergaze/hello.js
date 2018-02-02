# Hello.js
Sets up a server that responds with "Hello world!" when a user navigates to its address or "Hello <name>!" if a parameter is used.

## Setup
Install all necessary dependencies with:

~~~bash
npm install
~~~

## How to build

Run Grunts 'default' task by typing:

~~~bash
npm run build
~~~

This will transpile the TypeScript file 'hello.ts' to a JavaScript file ('ts' and 'tslint' tasks) and minify the output ('uglify' task).

To build the program continuously type:

~~~bash
npm run watch
~~~

A release version can be build with:

~~~bash
npm run release
~~~

Clean everything with:

~~~bash
npm run clean
~~~

## Run

Start the server with:

~~~bash
node dist/hello.min.js
~~~

This will give you the servers address and a parameterized example that you can open with any browser.