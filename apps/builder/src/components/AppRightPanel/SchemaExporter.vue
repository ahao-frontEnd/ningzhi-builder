<template>
    <div class="schema-exporter-wrapper">
        <div class="schema-exporter-header">
            <span>导出 JSON</span>
            <copy class="icon" @click="handleCopyText" />
        </div>
        <vue-json-pretty
            class="json-pretty tiny-scrollbar"
            showIcon
            showLineNumber
            editable
            :data="currentInfo"
        />
    </div>
</template>

<script setup lang="ts">
import { Copy } from '@icon-park/vue-next'
import copyText from 'copy-text-to-clipboard'
import VueJsonPretty from 'vue-json-pretty'

const props = defineProps<{
    currentInfo: any
}>()

const handleCopyText = () => {
    try {
        const blockJsonString = JSON.stringify(props.currentInfo)
        copyText(blockJsonString)
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
    }
}
</script>

<style scoped>
.schema-exporter-wrapper {
    display: flex;
    flex-direction: column;
    background-color: var(--color-gray-100);
    border-radius: 6px;
    color: var(--color-text);
    max-height: 100%;
}
.schema-exporter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 12px 0 12px;
    gap: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--color-gray-300);
    color: var(--color-gray-800);
    font-size: var(--font-size-small);
}
.icon {
    cursor: pointer;
}
.icon:hover {
    color: var(--color-primary);
}
.json-pretty {
    color: var(--color-gray-800);
    padding: 12px;
    margin: 0 0 0 12px;
    height: 100%;
    overflow: auto;
}
</style>

<style>
.vjs-tree-node {
    border-radius: 6px;
}
.vjs-tree-node:hover {
    background-color: var(--color-gray-300);
    font-weight: var(--font-weight-bolder);
}
</style>
