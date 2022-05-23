<template>
    <Navbar />

    <router-view v-slot="{ Component }">
        <Suspense>
            <component :is="Component" />
        </Suspense>
    </router-view>
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
    [container]{
        @apply mx-auto
    }
</style>
