<script setup lang="ts">
import { Error, Success, Wallet } from '@icon-park/vue-next'
import { computed } from 'vue'

import type { QuoteBlockInfo } from '@/types/block'

const STATUS_MAP = {
    success: {
        color: '#059669',
        bgColor: '#E4F2E9',
        borderColor: '#79DBA2',
        icon: Success
    },
    warning: {
        color: '#E18F05',
        bgColor: '#F8ECEC',
        borderColor: '#79DBA2',
        icon: Error
    },
    error: {
        color: '#DC2C26',
        bgColor: '#F8ECEC',
        borderColor: '#F3A9A5',
        icon: Wallet
    }
}

const props = defineProps<{
    blockInfo: QuoteBlockInfo
}>()

const style = computed(() => {
    const { color, bgColor, icon } = STATUS_MAP[props.blockInfo.props.status]
    return {
        backgroundColor: bgColor,
        color,
        icon
    }
})
</script>

<template>
    <div class="quote" v-bind="{ style }">
        <component :is="style.icon" />
        <span class="quote-text">{{ props.blockInfo.props.content }}</span>
    </div>
</template>

<style scoped>
.quote {
    display: flex;
    align-items: center;
    flex: 1;
    font-size: var(--font-size-large);
    padding: 8px 18px;
    border-radius: 8px;
}

.quote-text {
    margin-left: 6px;
}
</style>
