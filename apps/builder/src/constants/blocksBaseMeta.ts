import {
    ChartLine,
    Form,
    HamburgerButton,
    ImageFiles,
    Notes,
    Quote,
    Table,
    TitleLevel
} from '@icon-park/vue-next'
import type { Icon } from '@icon-park/vue-next/lib/runtime'
import { nanoid } from 'nanoid'

import type { BlockInfo, BlockType } from '@/types/block'

type BlockBaseMeta = {
    type: BlockType
    label: string
    icon: Icon
}

export const blocksBaseMetaList: BlockBaseMeta[] = [
    {
        type: 'quote',
        label: 'Quote',
        icon: Quote
    },
    {
        type: 'notes',
        label: 'Notes',
        icon: Notes
    },
    {
        type: 'heroTitle',
        label: 'Hero Title',
        icon: TitleLevel
    },
    { type: 'image', label: 'Image', icon: ImageFiles },
    {
        type: 'view',
        label: 'View',
        icon: Table
    },
    {
        type: 'chart',
        label: 'Charts',
        icon: ChartLine
    },
    {
        type: 'button',
        label: 'Button',
        icon: HamburgerButton
    },
    {
        type: 'form',
        label: 'Form',
        icon: Form
    }
]

export const blocksBaseMeta = Object.fromEntries(
    blocksBaseMetaList.map((item) => [item.type, item])
)

export const getBlocksDefaultData = (type: BlockType): BlockInfo => {
    const id = nanoid()
    switch (type) {
        case 'quote':
            return {
                id,
                type: 'quote',
                label: 'Quote',
                props: {
                    content: 'Quote Content',
                    status: 'success'
                }
            }
        case 'notes':
            return {
                id,
                type: 'notes',
                label: 'Notes',
                props: {
                    content: `
            <p>I’m <em>running</em> Tiptap <s>with</s> Vue.js. 🎉</p>
            <p><strong>You</strong> can also teach the editor new things. For example to recognize hex colors and add a color</p>
            <p> swatch on the fly: #FFF, #0D0D0D, #616161, #A975FF, #FB5151, #FD9170, #FFCB6B, #68CEF8, #80cbc4, #9DEF8F </p>
        `
                }
            }
        case 'heroTitle':
            return {
                id,
                type: 'heroTitle',
                label: '标题',
                props: {
                    align: 'center',
                    content: '标题'
                }
            }
        case 'image':
            return {
                id,
                type: 'image',
                label: 'Image',
                props: {
                    url: 'https://images.pexels.com/photos/17108884/pexels-photo-17108884.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
                }
            }
        case 'view':
            return {
                id,
                type: 'view',
                label: 'View',
                props: {
                    fields: {
                        id: {
                            type: 'text'
                        }
                    },
                    fieldProps: [],
                    data: []
                }
            }
        case 'chart':
            return {
                id,
                type: 'chart',
                label: 'Charts',
                props: {
                    chartType: 'echarts'
                }
            }
        case 'button':
            return {
                id,
                type: 'button',
                label: 'Button',
                props: {
                    content: 'Button'
                }
            }
        case 'form':
            return {
                id,
                type: 'form',
                label: 'Form',
                props: {
                    fields: []
                }
            }
    }
}
