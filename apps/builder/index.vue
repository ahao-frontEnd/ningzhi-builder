<template>
    <div class="builder">
        <h1>Builder</h1>
        <p>This is the builder page.</p>
    </div>
    <div class="name">
        {{ name ?? 'ningzhi' }}
    </div>
</template>

<script setup lang="ts">
interface Props {
    name: string
}

defineProps<Props>()
</script>

<style lang="scss">
.name {
    color: blue;

    div {
        height: 20px;
    }
}
</style>
