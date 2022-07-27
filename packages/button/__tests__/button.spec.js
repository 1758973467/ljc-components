import { mount, shallowMount } from '@vue/test-utils'
import { render, screen, fireEvent } from '@testing-library/vue'
import LJButton from '../src/button.vue'
import Vue from 'vue'

describe('LJButton', () => {

    test('test click', async () => {
        const wrapper = mount(LJButton)
        wrapper.trigger("click")
        await Vue.nextTick()
        expect(wrapper.emitted().click).toBeTruthy()
    })
})