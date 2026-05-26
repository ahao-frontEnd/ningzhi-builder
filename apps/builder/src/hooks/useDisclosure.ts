import { ref } from 'vue'

/**
 * true or false
 * @param opened
 * @returns
 */
export const useDisclosure = (opened?: boolean) => {
    const isOpen = ref(opened ?? false)
    const open = () => {
        isOpen.value = true
    }
    const close = () => {
        isOpen.value = false
    }
    const toggle = () => {
        isOpen.value = !isOpen.value
    }
    return {
        isOpen,
        open,
        close,
        toggle
    }
}
