/* 
    物料协议定义，包含基础物料和外部物料两大类，基础物料由平台提供，扩展物料由第三方提供。
    物料协议定义了物料的基本信息和属性，平台根据协议渲染物料，并提供相应的编辑功能。
*/

export type BasicBlockType = 'heroTitle' | 'view' | 'chart' | 'quote' | 'image'
export type ExternalBlockType = 'button' | 'form' | 'notes'

export type BlockType = BasicBlockType | ExternalBlockType

export interface BaseBlockInfo {
    id: string
    label: string
}

// 基础物料信息
export interface HeroTitleBlockInfo extends BaseBlockInfo {
    type: 'heroTitle'
    props: {
        content: string
    }
}
export interface ViewBlockInfo extends BaseBlockInfo {
    type: 'view'
    props: {
        fields: Record<
            string,
            {
                type: string
            }
        >
        fieldProps: {
            width: number
            visible: boolean
        }[]
        data: { id: string; value: string }[]
    }
}
export type QuoteBlockStatus = 'success' | 'warning' | 'error'
export interface QuoteBlockInfo extends BaseBlockInfo {
    type: 'quote'
    props: {
        content: string
        status: QuoteBlockStatus
    }
}
export interface ImageBlockInfo extends BaseBlockInfo {
    type: 'image'
    props: {
        url: string
    }
}

// 外部物料信息
export interface ButtonBlockInfo extends BaseBlockInfo {
    type: 'button'
    props: {
        content: string
    }
}

export interface FormBlockInfo extends BaseBlockInfo {
    type: 'form'
    props: {
        fields: {
            type: string
            label: string
            placeholder?: string
            required?: boolean
        }[]
    }
}

export interface NotesBlockInfo extends BaseBlockInfo {
    type: 'notes'
    props: {
        content: string
    }
}

export type ChartType = 'echarts' | 'canvas' | 'svg'

export interface ChartBlockInfo extends BaseBlockInfo {
    type: 'chart'
    props: {
        chartType: ChartType
    }
}

export type BlockInfo =
    // basic
    | HeroTitleBlockInfo
    | ViewBlockInfo
    | QuoteBlockInfo
    | ImageBlockInfo
    | ChartBlockInfo
    // external
    | ButtonBlockInfo
    | FormBlockInfo
    | NotesBlockInfo
