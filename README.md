[SOFTSPIDERS](https://github.com/softspiders/softspiders)

# Starter for [React](https://reactjs.org/) library with [Storybook](https://storybook.js.org/) and example app in [Lerna](https://lerna.js.org/) monorepo

---

## Feature tags

- app
- build
- lerna
- react
- starter
- storybook
- typescript
- uilib

---

## Parents

[**-storybook, typescript**](https://github.com/softspiders/lerna-react-app-uilib-starter)

## Children

[**+jest, storyshot**](https://github.com/softspiders/lerna-react-ts-storybook-storyshot-starter)

---

## Authors

[Serg Rajab](https://github.com/SergRajab)

---

## Install
1. Clone this repo
2. Install dependencies
   ```sh
   # yarn is fine too
   npm i
   ```

   then

   ```sh
   npm run bootstrap
   ```
   
3. To build all
   ```sh
   npm run build:app
   npm start
   ```
   
4. To work with lib
   
   ```sh
   npm run build:lib
   npm run story
   ```
   This will start storybook

4. Now, it's ready!

## Dev flow

1. Try changing the lib, it should reflect the changes directly
2. Now, you can start developing your React library!

---

### License

Licensed under the [MIT license](./LICENSE). 

