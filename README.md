<p align="center">
    <img width="150" src="./public/logo.png" alt="logo">
</p>

<h1 align="center"> ⚡ViTauri </h1>

<p align="center">
This is a starter template made with <a href="https://vitejs.dev">Vite</a> + <a href="https://tauri.studio">Tauri</a> + <a href="https://vuejs.org">Vue 3</a>
<br>
Build super fast desktop applications!
</p>

<img src="https://img.shields.io/github/license/NicolaSpadari/vitauri" />

<br>

<div align="center">
<img src="./demo.gif">
</div>

<br><br>

## Technologies used

- Vite
- Vue 3
- UnoCSS
- Typescript + linting
- API auto import (you can add more or disable some in the `vite.config.ts` file) by `unplugin-auto-import`
- Components auto import by `unplugin-vue-components`
- Composables auto import by `vite-auto-import-resolvers`
- File system based routing by `vite-plugin-pages`
- Useful set of composable APIs by `@vueuse/core`

## Setup

  - This project uses [pnpm](https://pnpm.io). For a better development experience, I recommend using [@antfu/ni](https://github.com/antfu/ni). In alternative use a package manager of your choice.
  - Before running this app, you need to configure your environment. Take a look at the [tauri docs](https://tauri.studio/docs/getting-started/prerequisites/)

  ```sh
  # use this template
  $ npx degit NicolaSpadari/vitauri my-tauri-app

  # go into the folder
  $ cd my-tauri-app

  # install dependencies
  $ pnpm install # or just "ni"

  # start the project
  $ pnpm run dev # or just "nr dev"
  ```

  This will fire up two shells, one for Vite and one for Tauri, simultaneously. Your project will run in a new window when ready.

  To build the application:

  ```sh
  $ pnpm run build # or just "nr build"
  ```

  To build the application with devtools enabled for debug:

  ```sh
  $ pnpm run build:debug # or just "nr build:debug"
  ```

## Debugging
You can simply open the console as you would normally in the browser during development.
<br>
You need to compile the app in debug mode to test it when you want to debug your builded project.

## Notes

I built this simple demo wrapping the `shell` api and the `notification` api in a composable.
<br>
If you don't need this, you can just remove it and call the functions directly, for example if you need to handle the output in a more specific way.
I'm also auto importing some of the APIs through `unplugin-auto-import`, if this creates confusion feel free to remove them and import them manually.

## License

MIT License © 2022-PRESENT [NicolaSpadari](https://github.com/NicolaSpadari)
