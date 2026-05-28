<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { watch } from 'vue'

import type { ImageBlockInfo } from '@/types/block'

const props = defineProps<{
    blockInfo: ImageBlockInfo
}>()

const emit = defineEmits<{
    change: [block: ImageBlockInfo]
}>()

const { values } = useForm({
    initialValues: {
        url: props.blockInfo.props.url
    }
})

const { value: url, handleChange: handleUrlChange } = useField('url')

watch([values], ([newValues]) => {
    emit('change', { ...props.blockInfo, props: { ...props.blockInfo.props, ...newValues } })
})
</script>

<template>
    <div class="image-setting">
        <input class="content-input" :value="url" @change="handleUrlChange" />
    </div>
</template>

<style scoped>
.image-setting {
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
