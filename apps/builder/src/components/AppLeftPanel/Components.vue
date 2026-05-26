<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { blocksBaseMeta } from '@/constants/blocksBaseMeta'
import { useAppEditorStore } from '@/stores/appEditor'

const appEditorStore = useAppEditorStore()
const { blocks } = storeToRefs(appEditorStore)
</script>

<template>
    <ul class="outline-list">
        <li class="outline-item" v-for="block in blocks" :key="block.type">
            <component class="outline-item-icon" :is="blocksBaseMeta[block.type]?.icon" />
            <span class="outline-item-name">
                {{ blocksBaseMeta[block.type]?.label }}
            </span>
            <span class="outline-item-title">
                {{ block.label }}
            </span>
        </li>
    </ul>
</template>

<style scoped>
.outline-list {
    margin-top: 8px;
}

.outline-item {
    display: flex;
    align-items: center;
    padding: 6px 10px;
    margin-bottom: 4px;
    color: var(--color-text);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--color-gray-100);
        transition: all 0.3s ease;
    }
}

.outline-item-icon {
    color: var(--color-gray-800);
}

.outline-item-name {
    margin-left: 8px;
    font-size: var(--font-size-normal);
    color: var(--color-gray-900);
}

.outline-item-title {
    flex: 1;
    margin-left: 8px;
    font-size: var(--font-size-small);
    color: var(--color-gray-700);
}
</style>
