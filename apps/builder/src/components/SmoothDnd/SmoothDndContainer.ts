import type { SmoothDnD } from 'smooth-dnd'
import { dropHandlers, smoothDnD } from 'smooth-dnd'
import { defineComponent, h } from 'vue'

import { getTagProps, validateTagProp } from './utils'

smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler
smoothDnD.wrapChild = false // 这个属性是 smooth-dnd 提供的，用于控制是否给每个子元素包裹一个 div，默认是 true，这样会给每个子元素包裹一个 div，但我们在 Vue 中不需要这个功能，所以我们把它设置为 false，这样就不会给每个子元素包裹一个 div 了，这样我们就可以直接在 Vue 组件中使用 smooth-dnd 来实现拖拽功能了，

type EventKey = 'drag-start' | 'drag-end' | 'drop' | 'drag-enter' | 'drag-leave' | 'drop-ready'

const eventEmitterMap: Record<EventKey, string> = {
    'drag-start': 'onDragStart',
    'drag-end': 'onDragEnd',
    drop: 'onDrop',
    'drag-enter': 'onDragEnter',
    'drag-leave': 'onDragLeave',
    'drop-ready': 'onDropReady'
}

export const SmoothDndContainer = defineComponent({
    name: 'SmoothDndContainer',
    setup() {
        return {
            container: null as SmoothDnD | null
        }
    },
    mounted() {
        // emit events
        const options: any = Object.assign({}, this.$props)
        for (const key in eventEmitterMap) {
            const eventKey = key as EventKey
            options[eventEmitterMap[eventKey]] = (props: any) => {
                this.$emit(eventKey, props)
            }
        }
        const containerElement = this.$refs.container || this.$el
        this.container = smoothDnD(containerElement, options)
    },
    unmounted() {
        if (this.container) {
            try {
                this.container.dispose()
            } catch {
                // ignore
            }
        }
    },
    emits: ['drop', 'drag-start', 'drag-end', 'drag-enter', 'drag-leave', 'drop-ready'],
    props: {
        orientation: { type: String, default: 'vertical' },
        removeOnDropOut: { type: Boolean, default: false },
        autoScrollEnabled: { type: Boolean, default: true },
        animationDuration: { type: Number, default: 250 },
        behavior: String,
        groupName: String,
        dragHandleSelector: String,
        nonDragAreaSelector: String,
        lockAxis: String,
        dragClass: String,
        dropClass: String,
        dragBeginDelay: Number,
        getChildPayload: Function,
        shouldAnimateDrop: Function,
        shouldAcceptDrop: Function,
        getGhostParent: Function,
        dropPlaceholder: [Object, Boolean],
        tag: {
            validator: validateTagProp,
            default: 'div'
        }
    },
    render() {
        const tagProps = getTagProps(this) //
        return h(
            tagProps.value,
            Object.assign({}, { ref: 'container' }, tagProps.props), // 把 ref: 'container' 和 tagProps.props 合并成一个对象，作为 h 函数的第二个参数，这样我们就可以在 Vue 组件中使用这个对象来渲染对应的标签了，
            this.$slots.default?.() // 渲染默认插槽，这样我们就可以在 Vue 组件中使用 <SmoothDndContainer> 来包裹需要拖拽的元素了，默认插槽中的元素就是需要被拖拽的元素了， smooth-dnd 会自动给这些元素添加拖拽功能了，
        )
    }
})
