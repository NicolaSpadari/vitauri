<template>
    <nav fixed bg-dark w-screen top-0 inset-x-0 shadow-lg>
        <div container mx-auto py-4>
            <div flex justify-between>
                <RouterLink to="/" font-bold text-white space-x-2>
                    <i-heroicons-solid-home w-5 h-5 />
                    <span align-middle>Home</span>
                </RouterLink>

                <div space-x-8>
                    <template v-for="route in $router.getRoutes()">
                        <RouterLink v-if="route.path !== '/'" :key="route.path" :to="route.path" text-white underline capitalize space-x-2>
                            <span :class="route.meta.icon" w-5 h-5 />
                            <span align-middle>{{ route.name }}</span>
                        </RouterLink>
                    </template>
                </div>
            </div>
        </div>
    </nav>
</template>
