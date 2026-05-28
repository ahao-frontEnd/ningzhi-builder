<script setup lang="ts">
import { computed } from 'vue'

import type { HeroTitleBlockInfo } from '@/types/block'

const props = defineProps<{
    blockInfo: HeroTitleBlockInfo
}>()

const style = computed(() => {
    return {
        'text-align': props.blockInfo.props.align
    }
})
</script>

<template>
    <div class="hero-title-wrapper">
        <h1 class="hero-title" v-bind="{ style }">{{ props.blockInfo.props.content }}</h1>
        <ul>
            <li
                class="hero-description"
                v-for="description in props.blockInfo.props.description"
                :key="description"
            >
                {{ description }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
.hero-title-wrapper {
    width: 100%;
}

.hero-title {
    width: 100%;
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
}

.hero-title:hover {
    flex: 1;
}

.hero-description {
    margin-top: 8px;
    font-size: var(--font-size-small);
    color: var(--color-gray-600);
}
</style>
