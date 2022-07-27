import LJButton from '../src/button.vue'
import { fireEvent, screen, userEvent } from '@storybook/testing-library';
export default {
    title: 'lj-button',
    component: LJButton,

}



const Template = (args) => ({
    components: { LJButton },
    template: '<LJButton >test</LJButton>',
});

export const ClickExample = Template.bind({});
ClickExample.play = async () => {
    // See https://storybook.js.org/docs/vue/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(screen.getByText('test'));
};
export const FireEventExample = Template.bind({});
FireEventExample.play = async () => {
    // See https://storybook.js.org/docs/vue/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await fireEvent.click(screen.getByTestId('data-testid'));
};