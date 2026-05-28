<script setup lang="ts">
import 'vue-json-pretty/lib/styles.css'

import { computed } from 'vue'

import { useAppEditorStore } from '@/stores/appEditor'
import type { BlockInfo } from '@/types/block'

import Breadcrumb from './Breadcrumb.vue'
import ChartSetting from './ChartSetting.vue'
import HeroTitleSetting from './HeroTitleSetting.vue'
import ImageSetting from './ImageSetting.vue'
import QuoteSetting from './QuoteSetting.vue'
import SchemaExporter from './SchemaExporter.vue'

const appEditorStore = useAppEditorStore()

const blocksMap = computed(() => {
    const { blocks } = appEditorStore
    return blocks.reduce<Record<string, (typeof blocks)[0]>>((acc, cur) => {
        acc[cur.id] = cur
        return acc
    }, {})
})

const currentBlockInfo = computed(() => {
    if (!appEditorStore.currentBlockId) return null
    return blocksMap.value[appEditorStore.currentBlockId]
})

const blockSetting = computed(() => {
    switch (currentBlockInfo.value?.type) {
        case 'quote': {
            return QuoteSetting
        }
        case 'chart': {
            return ChartSetting
        }
        case 'image': {
            return ImageSetting
        }
        case 'heroTitle': {
            return HeroTitleSetting
        }
        default:
            return ''
    }
})
</script>

<template>
    <div class="app-right-panel-wrapper">
        <Breadcrumb :blockInfo="currentBlockInfo!" @goHome="appEditorStore.unSelectBlock()" />
        <div class="app-right-panel-content">
            <template v-if="currentBlockInfo">
                <!-- 策略模式渲染？？？ 动态组件-->
                <component
                    :is="blockSetting"
                    :blockInfo="currentBlockInfo"
                    @change="(block: BlockInfo) => appEditorStore.updateBlock(block.id, block)"
                />
                <SchemaExporter :currentInfo="currentBlockInfo" />
            </template>
            <template v-else>
                <SchemaExporter :currentInfo="appEditorStore.blocks" />
            </template>
        </div>
    </div>
</template>

<style scoped>
.app-right-panel-wrapper {
    position: relative;
    z-index: 4;
    width: var(--panel-width);
    height: 100%;
    box-shadow: var(--color-gray-300) 1px 0 0;
}

.app-right-panel-content {
    padding: 0 16px 0 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: calc(100% - 64px);
}
</style>
