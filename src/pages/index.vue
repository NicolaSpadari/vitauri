<route>
    {
        name: "Home",
        meta: {
            icon: "home"
        }
    }
</route>

<template>
    <div crate flex flex-col h-screen justify-center items-center text-center space-y-10>
        <img src="/logo.png" w-40 h-40 mx-auto>
        <p text-5xl font-bold text-accent animate-pulse>
            Hello Vite + Tauri!
        </p>

        <div space-y-4>
            <p text-white>
                Currently running Tauri v{{ tauriVersion }}
            </p>
            <p text-sm text-gray-500>
                Powered by <a href="https://github.com/unocss/unocss" target="_blank" underline text-accent>UnoCSS</a>
            </p>
        </div>

        <div space-y-5>
            <a href="https://tauri.studio/" text-white underline>
                Open the docs
            </a>

            <p text-gray-500 italic text-sm>
                Made by
                <a href="https://github.com/NicolaSpadari" underline transition-colors hover="text-gray-400">
                    Nicola Spadari
                </a>
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const tauriVersion = ref("");

    tauriVersion.value = await getTauriVersion();
</script>
