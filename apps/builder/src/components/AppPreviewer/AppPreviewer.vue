<script setup lang="ts">
import { ref } from 'vue'

import LaptopPreviewer from './LaptopPreviewer.vue'
import MobilePreviewer from './MobilePreviewer.vue'
import type { PreviewType } from './type'

const previewMode = ref<PreviewType>('laptop')

const handleModeChange = (mode: PreviewType) => {
    previewMode.value = mode
}
</script>

<template>
    <div class="layout-content-wrapper">
        <div class="layout-content">
            <LaptopPreviewer
                v-if="previewMode === 'laptop'"
                :key="'laptop'"
                :preview-mode="previewMode"
                @preview-mode-change="handleModeChange"
            />
            <MobilePreviewer
                v-if="previewMode === 'mobile'"
                :key="'mobile'"
                :preview-mode="previewMode"
                @preview-mode-change="handleModeChange"
            />
        </div>
    </div>
</template>

<style scoped>
.layout-content-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 2;
    flex: 1;
    background-color: var(--color-gray-100);
}

.layout-content {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>
