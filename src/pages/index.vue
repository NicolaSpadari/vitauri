<template>
    <div container class="flex flex-col h-screen justify-center items-center text-center">
        <img src="/logo.png" class="w-40 h-40 mx-auto">
        <p class="text-5xl font-bold text-accent mt-5 mb-10">
            Hello Vite + Tauri!
        </p>

        <p class="text-white mt-5">
            Currently running Tauri: {{ tauriVersion }}
        </p>

        <a href="https://tauri.studio/" class="text-white underline mt-10">
            Open the docs
        </a>
    </div>
</template>

<script lang="ts" setup>
    const tauriVersion = ref("");

    tauriVersion.value = await getTauriVersion();
</script>
