<template>
    <div crate space-y-20 mt-30>
        <PageTitle>
            {{ $route.name }}
        </PageTitle>


        <div text-center space-x-4>
            <input v-model="input" type="text" rounded-md px-5 py-2 @keyup.enter="sendCommand()" placeholder="Insert command">

            <Btn space-x-2 @click="sendCommand()">
                <span align-middle>Send</span>
                <i-heroicons-outline-arrow-right w-4 h-4 />
            </Btn>
        </div>

        <Output>
            Result: <pre>{{ result }}</pre>
        </Output>
    </div>
</template>

<script lang="ts" setup>
    const input = ref("");
    const result = ref("");

    const sendCommand = async () => {
        result.value = await useShell(input.value, "pwsh");
        input.value = ""
    };
</script>
