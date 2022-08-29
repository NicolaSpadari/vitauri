<template>
    <Navbar />

    <RouterView v-slot="{ Component }">
        <Suspense>
            <Transition name="fade" mode="out-in">
                <component :is="Component" />
            </Transition>
        </Suspense>
    </RouterView>
</template>

<style lang="scss">
	html {
		-webkit-tap-highlight-color: transparent;
		scroll-behavior: smooth;
        @apply bg-darker;
	}
	img {
		-webkit-user-drag: none;
		@apply select-none;
	}

    .fade-enter-active,
    .fade-leave-active {
        @apply transition-opacity duration-500 ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        @apply opacity-0;
    }
</style>
