<p align="center">
    <img width="150" src="./public/logo.png" alt="logo">
</p>

<h1 align="center"> ⚡ViTauri </h1>

<p align="center">
This is a starter template made with <a href="https://vitejs.dev">Vite</a> + <a href="https://tauri.studio">Tauri</a> + <a href="https://vuejs.org">Vue 3</a>
<br>
Build super fast desktop applications!
</p>

## Technologies used

- Vite
- Vue 3
- WindiCSS + Bootstrap 5 grid plugin
- Typescript + linting
- API auto import (you can add more or disable some in the `vite.config.ts` file) by `unplugin-auto-import`
- Components auto import by `unplugin-vue-components`
- Composables auto import by `vite-auto-import-resolvers`
- File system based routing by `vite-plugin-pages`
- Useful set of composable APIs by `@vueuse/core`

## Setup

  Before running this app, you need to configure your environment. Take a look at the [tauri docs](https://tauri.studio/docs/getting-started/prerequisites/)

  ```bash
  # use this template
  npx degit NicolaSpadari/vitauri my-tauri-app

  # go into the folder
  cd my-tauri-app

  # install dependencies
  npm i

  # start the project
  npm run dev
  ```

  This will fire up two shells, one for Vite and one for Tauri, simultaneously. Your project will run in a new window when ready.

  To build the application:

  ```bash
  npm run build
  ```

  To build the application with devtools enabled for debug:

  ```bash
  npm run build:debug
  ```

## Debugging
You can simply open the console as you would normally in the browser during development. You need to compile the app in debug mode to test it when you wanna debug your builded project.

## Notes

I build this simple demo wrapping the `shell` api and the `notification` api in a simple composable. If you don't need this you can just remove it and call the functions directly, for example if you need to handle the output in a more specific way.
I'm also auto importing some of the APIs through `unplugin-auto-import`, if this creates confusion feel free to remove them and import them manually.

## Bugs
Tauri is currently in RC state. You can follow the updates in the official [Tauri GitHub page](https://github.com/tauri-apps/tauri/).
Unless breaking changes are pushed in the next updates, this template should be updatable with no problems