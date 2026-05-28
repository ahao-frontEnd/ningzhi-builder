<script setup lang="ts">
import { useField, useFieldArray, useForm } from 'vee-validate'
import { watch } from 'vue'

import { type HeroTitleBlockAlign, type HeroTitleBlockInfo } from '@/types/block'
import SegmentedControl from '@/ui/SegmentedControl/SegmentedControl.vue'

const alignOptions = [
    {
        label: '左对齐',
        value: 'left'
    },
    {
        label: '居中',
        value: 'center'
    },
    {
        label: '右对齐',
        value: 'right'
    }
]

// 怎么传入 props，在这里如何定义？
const props = defineProps<{
    blockInfo: HeroTitleBlockInfo
}>()

const emit = defineEmits<{
    change: [block: HeroTitleBlockInfo]
}>()

const { values } = useForm({
    initialValues: {
        content: props.blockInfo.props.content,
        align: props.blockInfo.props.align,
        description: props.blockInfo.props.description
    }
})
const { fields, push } = useFieldArray('description')

const { value: content, handleChange: handleContentChange } = useField('content')
const { value: align, handleChange: handleAlignChange } = useField<HeroTitleBlockAlign>('align')

watch([values], ([newValues]) => {
    emit('change', { ...props.blockInfo, props: { ...props.blockInfo.props, ...newValues } })
})
</script>

<template>
    <div class="hero-title-setting">
        <input class="content-input" :value="content" @change="handleContentChange" />
        <SegmentedControl :value="align" :data="alignOptions" @change="handleAlignChange" />
        <input
            v-for="field in fields"
            :key="field.key"
            class="content-input"
            v-model="field.value"
        />

        <button class="add-button" @click="push(new Date().toLocaleString())">添加</button>
    </div>
</template>

<style scoped>
.hero-title-setting {
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
