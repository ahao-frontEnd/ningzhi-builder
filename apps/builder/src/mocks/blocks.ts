import type { BlockInfo } from '@/types/block'

export const blocks: BlockInfo[] = [
    {
        id: '1',
        type: 'heroTitle',
        label: '标题',
        props: {
            align: 'left',
            content: 'Ningzhi vbuilder'
        }
    },
    {
        id: '2',
        type: 'quote',
        label: 'Quote',
        props: {
            content: 'Ningzhi',
            status: 'success'
        }
    },
    {
        id: '3',
        type: 'chart',
        label: 'Charts',
        props: {
            chartType: 'echarts'
        }
    },
    {
        id: '4',
        type: 'image',
        label: 'Image',
        props: {
            url: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/static/media/logo_with_name.598fc011.svg'
        }
    },
    {
        id: '5',
        type: 'notes',
        label: 'Notes',
        props: {
            content: `
            <p>I’m <em>running</em> Tiptap <s>with</s> Vue.js. 🎉</p>
            <p><strong>You</strong> can also teach the editor new things. For example to recognize hex colors and add a color</p>
            <p> swatch on the fly: #FFF, #0D0D0D, #616161, #A975FF, #FB5151, #FD9170, #FFCB6B, #68CEF8, #80cbc4, #9DEF8F </p>
        `
        }
    },
    {
        id: '6',
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
    },
    {
        id: '7',
        type: 'button',
        label: 'Button',
        props: {
            content: 'Button'
        }
    },
    {
        id: '8',
        type: 'form',
        label: 'Form',
        props: {
            fields: []
        }
    }
]
