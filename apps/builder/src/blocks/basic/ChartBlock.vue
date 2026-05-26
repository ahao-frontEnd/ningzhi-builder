<script setup lang="ts">
import type { ChartBlockInfo } from '@/types/block'

defineProps<{
    blockInfo: ChartBlockInfo
}>()
</script>

<template>
    <div class="chart">charts block</div>
</template>

<style scoped>
.chart {
    width: 100%;
}
</style>
