<script setup lang="ts">
import { Right } from '@icon-park/vue-next'

import type { BlockInfo } from '@/types/block'

const { blockInfo } = defineProps<{
    blockInfo: BlockInfo | null
}>()

const emit = defineEmits<{
    goHome: []
}>()
</script>

<template>
    <div class="breadcrumb-wrapper">
        <span class="breadcrumb-page-path" @click="emit('goHome')">页面</span>
        <span class="breadcrumb-block-path" v-if="blockInfo">
            <Right class="breadcrumb-separator" />
            {{ blockInfo?.label }}</span
        >
    </div>
</template>

<style scoped>
.breadcrumb-wrapper {
    display: flex;
    align-items: center;
    height: 44px;
    line-height: 44px;
    padding: 0 16px 0 20px;
}

.breadcrumb-page-path {
    font-size: 13px;
    color: var(--color-gray-600);
    cursor: pointer;
}

.breadcrumb-separator {
    margin: 0 6px;
    font-size: 12px;
    color: var(--color-gray-600);
}

.breadcrumb-block-path {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: var(--color-black);
    font-weight: 500;
}
</style>
