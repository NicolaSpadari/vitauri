<route>
    {
        name: "Notification",
        meta: {
            icon: "i-heroicons-solid-bell"
        }
    }
</route>

<template>
    <div crate space-y-20 mt-30>
        <PageTitle>
            {{ $route.name }}
        </PageTitle>

        <div text-center space-x-4>
            <Btn @click="testNotification()">
                <span align-middle>
                    Send a test notification
                </span>
                <i-heroicons-solid-bell w-4 h-4/>
            </Btn>
        </div>

        <Output>
            Status: {{ result }}
        </Output>
    </div>
</template>

<script lang="ts" setup>
    const result = ref("");

    const options = {
        title: "Test title",
        body: "Test notification content"
    };

    const testNotification = async () => {
        result.value = await useNotification(options);
    };
</script>
