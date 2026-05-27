import type { BlockInfo } from '@/types/block'

export const blocks: BlockInfo[] = [
    {
        id: '1',
        type: 'heroTitle',
        label: '标题',
        props: {
            content: '标题'
        }
    },
    {
        id: '2',
        type: 'quote',
        label: 'Quote',
        props: {
            content: 'Quote Content',
            status: 'error'
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
            url: 'https://images.pexels.com/photos/17108884/pexels-photo-17108884.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
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
