# Micro-frontends with Web Components

Using web components as a wrapper for both Angular and React components, I am going to show them working alongside each other in a single application. I will also pass data to both components from the parent container, and back again.

Follow the instructions below to build and serve micro-frontend components for Angular and React, and a wrapper application to compose them together and handle communication between them.

For a full walk-through visit this post:
[#](Create Micro-frontends using Web Components with support for Angular and React)

## Build and serve Angular component

```sh
cd micro-fe-ng
npm i
npm start
```
[http://localhost:5001/main.js](http://localhost:5001/main.js)

```html
<ng-el></ng-el>
```

## Build and serve React component

```sh
cd micro-fe-react
npm i
npm start
```
[http://localhost:5002](http://localhost:5002)


```html
<react-el></react-el>
```

## Build and serve wrapper

```sh
cd micro-fe-wrapper
npm i
npm start
```
[http://localhost:5000](http://localhost:5000)
