<template>
    <div container class="space-y-20 mt-30">
        <p class="text-white text-3xl font-bold">
            {{ $route.name }}:
        </p>

        <div class="text-center space-x-4">
            <button class="bg-accent text-darker px-3 py-1 rounded-md" @click="testNotification()">
                Send a test notification
            </button>
        </div>

        <div class="bg-dark rounded-md p-5 mt-5">
            <p class="text-white">
                Status: {{ result }}
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const result = ref("");

    const options = {
        title: "Test notitification",
        body: "test body"
    };

    const testNotification = async () => {
        result.value = await useNotification(options);
    };
</script>
