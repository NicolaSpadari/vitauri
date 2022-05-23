<template>
    <div container class="space-y-20 mt-30">
        <p class="text-white text-3xl font-bold">
            {{ $route.name }}:
        </p>

        <div class="text-center space-x-4">
            <input v-model="input" type="text" class="rounded-md px-5 py-2" placeholder="Insert command">

            <button class="bg-accent text-darker px-3 py-1 rounded-md" @click="sendCommand()">
                Send!
            </button>
        </div>

        <div class="bg-dark rounded-md p-5 mt-5">
            <p class="text-white">
                Result:
            </p>
            <p v-if="result !== ''" class="text-white mt-5">
                {{ result }}
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const input = ref("");
    const result = ref("");

    const sendCommand = async () => {
        result.value = await useShell(input.value, "pwsh");
    };
</script>
