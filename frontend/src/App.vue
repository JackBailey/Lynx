<template>
	<router-view> </router-view>
</template>

<script setup>
import { useDarkMode } from "./stores/dark";
useDarkMode();
</script>

<style lang="scss">
body {
	background: var(--bg-color-1);
	display: flex;
	height: 100%;
}
#app {
	color: var(--color-1);
	height: 100%;
	width: 100%;
	// width: 80%;
	// margin: 0 auto;
	text-align: center;
	display: flex;
	// flex-direction: column;
	gap: 4rem;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		gap: 0;
	}
}
</style>
