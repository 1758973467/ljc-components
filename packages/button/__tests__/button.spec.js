import { mount, shallowMount } from '@vue/test-utils'
import { render, screen, fireEvent } from '@testing-library/vue'
import LJCButton from '../src/button.vue'
import Vue from 'vue'

describe('LJCButton', () => {

    test('test click', async () => {
        const wrapper = mount(LJCButton)
        wrapper.trigger("click")
        await Vue.nextTick()
        expect(wrapper.emitted().click).toBeTruthy()
    })
})