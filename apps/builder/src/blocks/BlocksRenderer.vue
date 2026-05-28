<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { dropHandlers, type DropResult, smoothDnD } from 'smooth-dnd'
import { toRaw } from 'vue' // toRaw 用于获取响应式对象的原始值，避免在 smooth-dnd 中使用响应式对象

import { SmoothDndContainer } from '@/components/SmoothDnd/SmoothDndContainer'
import { SmoothDndDraggable } from '@/components/SmoothDnd/SmoothDndDraggable'
import { useAppEditorStore } from '@/stores/appEditor'
import { arrayMove } from '@/utils/array'

import BlockRenderer from './BlockRenderer.vue'

smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler

// const props = defineProps<{
//   type: BlockType
// }>()
const appEditorStore = useAppEditorStore()

const { blocks } = storeToRefs(appEditorStore)
const { updateBlocks } = appEditorStore

const applyDrag = <T extends any[]>(arr: T, dragResult: DropResult) => {
    const { removedIndex, addedIndex, payload } = dragResult

    const result = [...arr]

    // 没做操作
    if (addedIndex === null) return result

    // 添加
    if (addedIndex !== null && removedIndex === null) {
        result.splice(addedIndex, 0, {
            id: `${Math.random()}`,
            ...payload
        })
    }

    // 移动
    if (addedIndex !== null && removedIndex !== null) {
        return arrayMove(result, removedIndex, addedIndex)
    }

    return result
}

// 需要保证 blocksMap 在 BlockRenderer 之前被注入，并且我们暂时使用的 Symbol 作为 key
// console.log(inject('blocksMap'))
</script>

<template>
    <smooth-dnd-container
        drag-handle-selector=".handle"
        group-name="blocks"
        orientation="vertical"
        tag="div"
        class="renderer-dnd-container"
        @drop="updateBlocks(applyDrag(toRaw(blocks), $event))"
    >
        <smooth-dnd-draggable v-for="(block, i) in blocks" :key="block.id">
            <BlockRenderer :block="block" :i="i" />
        </smooth-dnd-draggable>
    </smooth-dnd-container>
</template>

<style scoped>
.renderer-dnd-container {
    width: 100%;
}
</style>

<style lang="css">
.smooth-dnd-draggable-wrapper {
    overflow: visible !important;
}
</style>
