<template>
    <div class="chart-container" ref="chartContainer"></div>
</template>

<script setup lang="ts">
import { GraphChart } from 'echarts/charts'
import {
    GridComponent,
    LegendComponent,
    TitleComponent,
    ToolboxComponent,
    TooltipComponent
} from 'echarts/components'
import { type EChartsType, init, use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import type { ECBasicOption } from 'echarts/types/dist/shared'
import { onBeforeUnmount, onMounted, ref } from 'vue'

import { MOCK_DATA } from './MOCK_DATA'

use([
    CanvasRenderer,
    GraphChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    ToolboxComponent,
    GridComponent
])

const chartContainer = ref<HTMLDivElement | null>(null)

const chartInstance = ref<EChartsType>()

const resizeHandler = () => {
    chartInstance.value?.resize()
}

const fetchChartData = () => {
    // fetch data from server
    const graph = MOCK_DATA
    graph.nodes.forEach(function (node: any) {
        node.label = {
            show: node.symbolSize > 30
        }
    })
    const options: ECBasicOption = {
        title: {
            text: 'Ningzhi',
            subtext: 'Ningzhi_subtext',
            top: 'top',
            left: 'left'
        },
        tooltip: {},
        legend: [
            {
                data: graph.categories.map(function (a: any) {
                    return a.name
                })
            }
        ],
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                name: 'Ningzhi',
                type: 'graph',
                layout: 'circular',
                circular: {
                    rotateLabel: true
                },
                data: graph.nodes,
                links: graph.links,
                categories: graph.categories,
                roam: false,
                label: {
                    position: 'right',
                    formatter: '{b}'
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.3
                }
            }
        ]
    }

    chartInstance.value?.setOption(options)
}

onMounted(() => {
    if (!chartContainer.value) return
    chartInstance.value = init(chartContainer.value)

    fetchChartData()

    window.addEventListener('resize', resizeHandler)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler)
    chartInstance.value?.dispose()
})
</script>

<style scoped>
.chart-container {
    width: 100%;
    height: 500px;
}
</style>
