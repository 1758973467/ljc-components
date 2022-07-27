import { mount, shallowMount } from '@vue/test-utils'
import { render, screen, fireEvent } from '@testing-library/vue'
import FormTest from './form-test.vue'
import Vue from 'vue'


describe('interget', () => {

    test('test click', async () => {
        jest.spyOn(console, 'warn').mockImplementation(() => { })
        const fakeReview = {
            user: 'AnB',
            region: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        }
        const { getByText, getByLabelText, getByPlaceholderText, emitted, g } = render(FormTest)
        const userInput = getByPlaceholderText(/审批人/i)
        await fireEvent.update(userInput, fakeReview.user)
        const regionInput = getByPlaceholderText(/活动区域/i)
        await fireEvent.update(regionInput, fakeReview.region)
        const submitButton = getByText('查询')
        await fireEvent.click(submitButton)
        expect(console.warn).not.toHaveBeenCalled()
    })
})