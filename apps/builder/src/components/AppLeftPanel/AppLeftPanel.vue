<script setup lang="ts">
import BlocksDrawer from '@/components/AppLeftPanel/BlocksDrawer.vue'
import NavigationDrawer from '@/components/AppLeftPanel/NavigationDrawer.vue'
</script>

<template>
    <div class="app-left-panel-wrapper">
        <div class="app-left-panel-drawer">
            <div class="app-left-panel-split-top">
                <NavigationDrawer />
            </div>
            <div class="app-left-panel-split-bottom">
                <BlocksDrawer />
            </div>
        </div>
    </div>
</template>

<style scoped>
.app-left-panel-wrapper {
    position: relative;
    display: flex;
    z-index: 4;
    height: 100%;
    box-shadow: var(--color-gray-300) 1px 0 0;
}

.app-left-panel-drawer {
    width: var(--panel-width);
    height: 100%;
    box-shadow: var(--color-gray-300) 1px 0 0;
    overflow: hidden;
}

.app-left-panel-split-top,
.app-left-panel-split-bottom {
    height: 50%;
    padding: 0 16px;
    overflow: auto;
    border-bottom: 1px solid var(--color-gray-300);

    &::-webkit-scrollbar {
        width: 10px;
    }

    scrollbar-width: thin;
    scrollbar-color: var(--color-gray-300) transparent;
    scroll-behavior: smooth;

    &::-webkit-scrollbar-thumb {
        border: 2px solid transparent;
        box-shadow: 0px 0px 10px 10px inset;
        border-radius: 100px;
        margin: 2px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }
}
</style>
