<template>
    <Navbar />

    <RouterView v-slot="{ Component }">
        <Suspense>
            <component :is="Component" />
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
</style>
