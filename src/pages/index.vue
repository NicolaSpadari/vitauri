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
                Powered by <a href="https://github.com/unocss/unocss" target="_blank" underline text-accent>UNOcss</a>
            </p>
        </div>
        

        <a href="https://tauri.studio/" text-white underline>
            Open the docs
        </a>
    </div>
</template>

<script lang="ts" setup>
    const tauriVersion = ref("");

    tauriVersion.value = await getTauriVersion();
</script>
