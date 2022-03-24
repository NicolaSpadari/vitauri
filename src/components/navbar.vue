<template>
    <nav class="fixed bg-dark w-screen top-0 inset-x-0 shadow-lg">
        <div class="container-fluid py-4">
            <div class="flex justify-between">
                <router-link to="/" class="font-bold text-white">
                    Home
                </router-link>

                <div class="ml-auto space-x-8">
                    <template v-for="route in $router.getRoutes()">
                        <router-link v-if="route.name !== 'index'" :key="route.path" :to="route.path" class="text-white underline">
                            {{ route.name }}
                        </router-link>
                    </template>
                </div>
            </div>
        </div>
    </nav>
</template>
