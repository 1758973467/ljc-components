import { mount } from '@vue/test-utils'
import LJInput from '../src/input.vue'
import Vue from 'vue'
describe('test input', () => {
    test('input-text', async () => {
        const wrapper = mount(LJInput)
        expect(wrapper.html()).toContain('<input type="text"')
    })
    test('input-password', async () => {
        const wrapper = mount(LJInput, {
            propsData: {
                type: 'password'
            }
        })
        expect(wrapper.html()).toContain('<input type="password"')
        expect(wrapper.props('type')).toBe('password')
    })
    test('input-placeholder', async () => {
        const wrapper = mount(LJInput, {
            propsData: {
                type: 'text',
                placeholder: '请输入'
            }
        })
        expect(wrapper.html()).toContain('<input type="text" placeholder="请输入"')
    })
    test('input-placeholder', async () => {
        const wrapper = mount(LJInput, {
            propsData: {
                type: 'text',
                placeholder: '请输入'
            }
        })
        expect(wrapper.attributes().placeholder).toBe('请输入')
    })
    test('input-value', async () => {
        const wrapper = mount(LJInput, {
            propsData: {
                value: 'admin'
            }
        })
        expect(wrapper.props('value')).toBe('admin')
        expect(wrapper.vm.$el).toMatchSnapshot()

    })

    test('input-v-model', async () => {
        const app = Vue.component('app', {
            components: {
                LJInput
            },
            template: `<div>
                     <LJInput v-model='value'/>
                     <p>{{value}}</p>
                </div>`,
            data() {
                return {
                    value: '123'
                }
            }
        })

        const wrapper = mount(app)
        const ljinputWrapper = wrapper.findComponent(LJInput)
        const pWrapper = wrapper.find('p')
        //view=>data
        await ljinputWrapper.setValue('456')
        expect(wrapper.vm.value).toBe('456')
        expect(pWrapper.text()).toBe('456')
        //data=>view
        wrapper.vm.value = '789'
        await Vue.nextTick()
        expect(ljinputWrapper.props('value')).toBe('789')
    })
})

