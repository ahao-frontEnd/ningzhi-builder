<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { watch } from 'vue'

import { type QuoteBlockInfo, type QuoteBlockStatusType } from '@/types/block'
import SegmentedControl from '@/ui/SegmentedControl/SegmentedControl.vue'

const quoteBlockStatusOptions = [
    {
        label: '成功',
        value: 'success'
    },
    {
        label: '警告',
        value: 'warning'
    },
    {
        label: '错误',
        value: 'error'
    }
]

const props = defineProps<{
    blockInfo: QuoteBlockInfo
}>()

const emit = defineEmits<{
    change: [block: QuoteBlockInfo]
}>()

const { values } = useForm({
    initialValues: {
        content: props.blockInfo.props.content,
        status: props.blockInfo.props.status
    }
})

const { value: content, handleChange: handleContentChange } = useField('content')
const { value: status, handleChange: handleStatusChange } = useField<QuoteBlockStatusType>('status')

watch([values], ([newValues]) => {
    emit('change', { ...props.blockInfo, props: { ...props.blockInfo.props, ...newValues } })
})
</script>

<template>
    <div class="quote-setting">
        <SegmentedControl
            :value="status"
            :data="quoteBlockStatusOptions"
            @change="handleStatusChange"
        />
        <input class="content-input" :value="content" @change="handleContentChange" />
    </div>
</template>

<style scoped>
.quote-setting {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: var(--font-size-large);
    border-radius: 8px;
}
.content-input {
    width: 100%;
    height: 32px;
    padding: 0 8px;
    border: 1px solid var(--color-gray-300);
    border-radius: 8px;
    outline-style: none;
    color: var(--color-gray-800);
}

.add-button {
    margin-top: 6px;
    padding: 4px 12px;
    border-radius: 8px;
    background-color: var(--color-white);
    border: 1px solid var(--color-gray-300);
    cursor: pointer;
}
</style>
