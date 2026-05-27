<script setup lang="ts">
import { Plus } from '@icon-park/vue-next'

import BlocksDrawer from '@/components/AppLeftPanel/BlocksDrawer.vue'
import Components from '@/components/AppLeftPanel/Components.vue'
import Navigation from '@/components/AppLeftPanel/Navigation.vue'
import { useDisclosure } from '@/hooks/useDisclosure'

const { isOpen: isComponentDrawerOpened, toggle } = useDisclosure(false)
</script>

<template>
    <div class="app-left-panel-wrapper">
        <div class="app-left-panel-drawer">
            <div class="app-left-panel-split">
                <div class="drawer-header">
                    <h3 class="drawer-title">NAVIGATION</h3>
                </div>
                <div class="drawer-content">
                    <Navigation />
                </div>
            </div>
            <div class="app-left-panel-split">
                <div class="drawer-header">
                    <h3 class="drawer-title">COMPONENTS</h3>
                    <button
                        :class="['drawer-component-adder', isComponentDrawerOpened && 'opened']"
                        @click="toggle"
                    >
                        <Plus size="18" />
                    </button>
                </div>
                <div class="drawer-content">
                    <Components />
                </div>
            </div>
        </div>
        <Transition name="sub-panel-drawer">
            <div class="sub-panel-drawer-content" v-if="!!isComponentDrawerOpened">
                <BlocksDrawer />
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.app-left-panel-wrapper {
    position: relative;
    display: flex;
    z-index: 4;
    height: 100%;
}

.app-left-panel-drawer {
    width: 320px;
    height: 100%;
    overflow: hidden;
}

.app-left-panel-split {
    height: 50%;
    overflow: auto;
    border-bottom: 1px solid var(--color-gray-200);
    border-right: 1px solid var(--color-gray-200);

    &::-webkit-scrollbar {
        width: 10px;
    }

    scrollbar-width: thin;
    scrollbar-color: var(--color-gray-300) transparent;
    scroll-behavior: smooth;

    &::-webkit-scrollbar-thumb {
        border: 2px solid transparent;
        box-shadow: 0px 0px 10px 10px inset;
        border-radius: 100px;
        margin: 2px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }
}

.blocks-drawer-wrapper {
    width: 100%;
}

.drawer-header {
    display: flex;
    position: sticky;
    justify-content: space-between;
    align-items: center;
    top: 0;
    font-weight: var(--font-weight-bolder);
    padding: 12px 16px 12px 20px;
    background-color: var(--color-white);
}

.drawer-content {
    padding: 0 10px;
}

.drawer-component-adder {
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 8px;
    margin-left: 10px;
    color: var(--color-white);
    background-color: var(--color-black);
    cursor: pointer;
    box-shadow:
        rgba(62, 65, 86, 0.25) 0px 0px 1px,
        rgba(62, 65, 86, 0.1) 0px 4px 8px;
    transition: all 0.3s ease;

    &:hover {
        opacity: 0.8;
    }

    &.opened {
        background-color: var(--color-gray-300);
        color: var(--color-black);
        border-radius: 50%;
        transform: rotate(-45deg);
        transition: all 0.3s ease;
    }
}

.sub-panel-drawer {
    width: 300px;
    height: 100%;
    box-shadow: var(--color-gray-300) 1px 0 0;
    overflow: hidden;
}

/* 下面我们会解释这些 class 是做什么的 */
.sub-panel-drawer-enter-active,
.sub-panel-drawer-leave-active {
    transition: width 0.1s cubic-bezier(0.3, 0.1, 0.3, 1);
}

.sub-panel-drawer-enter-from,
.sub-panel-drawer-leave-to {
    width: 0;
}

.sub-panel-drawer-content {
    width: 300px;
    height: 100%;
    padding: 16px 16px 16px 20px;
    background-color: rgb(250, 250, 251);
    box-shadow: rgba(128, 128, 128, 0.12) 1px 0px 0px;
}
</style>
