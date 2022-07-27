import { mount, shallowMount } from '@vue/test-utils'
import { render, screen, fireEvent } from '@testing-library/vue'
import link from '../src/link.vue'
import Vue from 'vue'

describe('link', () => {

    test('test props default', () => {
        const wrapper = mount(link)
        expect(wrapper.attributes.href).toBe(undefined)
        expect(wrapper.classes()).toContain('no-underline')
    })

    test('test props', () => {
        const mockData = {
            href: "https://www.baidu.com",
            underline: true
        }
        const wrapper = mount(link, {
            propsData: {
                href: mockData.href,
                underline: mockData.underline,
                disabled: true
            }
        })

        expect(wrapper.classes('no-underline')).toBe(false)
        expect(wrapper.classes('disabled')).toBe(true)
        expect(wrapper.attributes.href).toBe(undefined)

    })
})