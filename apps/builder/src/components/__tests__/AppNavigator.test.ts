import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import AppNavigator from '../AppNavigator.vue'

describe('AppNavigator test ', () => {
    it('render property', () => {
        const wrapper = mount(AppNavigator, { props: { msg: 'hello ningzhi' } })
        expect(wrapper.text()).toContain('hello ningzhi')
    })
})
