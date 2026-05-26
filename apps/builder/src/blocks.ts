import type { App } from 'vue'

import ChartBlock from '@/blocks/basic/ChartBlock.vue'
import HeroTitleBlock from '@/blocks/basic/HeroTitleBlock.vue'
import ImageBlock from '@/blocks/basic/ImageBlock.vue'
import QuoteBlock from '@/blocks/basic/QuoteBlock.vue'
import ViewBlock from '@/blocks/basic/ViewBlock.vue'
import ButtonBlock from '@/blocks/external/ButtonBlock.vue'
import FormBlock from '@/blocks/external/FormBlock.vue'
import NotesBlock from '@/blocks/external/NotesBlock.vue'
import type { BlockType } from '@/types/block'

const baseBlocks = [
    {
        type: 'quote',
        material: QuoteBlock
    },
    {
        type: 'heroTitle',
        material: HeroTitleBlock
    },
    {
        type: 'view',
        material: ViewBlock
    },
    {
        type: 'chart',
        material: ChartBlock
    },
    {
        type: 'image',
        material: ImageBlock
    }
]

// 因为考虑到后面外部插件市场的扩展，所以需要一个插件管理器来管理外部插件的注册和使用
class blockManager {
    private blocks = baseBlocks
    constructor() {}
    getBlocksMap() {
        return Object.fromEntries(this.blocks.map((block) => [block.type, block]))
    }
    getBlocks() {
        return this.blocks
    }
    addBlock(block: any) {
        this.blocks.push(block)
    }
    hasBlock(type: BlockType) {
        return !!this.getBlocksMap()[type]
    }
}

const blockManagerInstance = new blockManager()

// 注册外部物料, 这里的注册方式比较简单，直接在这里添加，后续会提供一个插件市场，第三方可以通过插件市场来注册自己的物料
// 远程物料
blockManagerInstance.addBlock({
    type: 'button',
    material: ButtonBlock
})
blockManagerInstance.addBlock({
    type: 'form',
    material: FormBlock
})
blockManagerInstance.addBlock({
    type: 'notes',
    material: NotesBlock
})

const blocksMap = blockManagerInstance.getBlocksMap()

export const blocksMapSymbol = Symbol('blocksMap')

export const initBlocks = () => ({
    install(app: App) {
        app.provide(blocksMapSymbol, blocksMap)
        app.config.globalProperties.$blocksMap = blocksMap
    }
})

// 声明全局属性类型, 这样在组件中就可以通过 this.$blocksMap 来访问物料列表了
// @ts-ignore: 当前vue版本为 3.5.34，但是vue的类型声明文件中没有 ComponentCustomProperties 这个接口，所以需要忽略这个错误
declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $blocksMap: Record<string, any>
    }
}
