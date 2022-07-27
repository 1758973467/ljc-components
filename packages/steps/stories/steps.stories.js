import LJSteps from '../src/steps.vue'
import { screen, userEvent } from '@storybook/testing-library';
export default {
    title: 'lj-steps',
    component: LJSteps,
    argTypes: {
        count: {
            control: {
                type: 'number'
            }
        },
        active: {
            control: {
                type: 'number'
            }

        }
    }
}
const Template = (args, { argTypes }) => ({
    components: { LJSteps },
    props: Object.keys(argTypes),
    template: '<LJSteps v-bind="$props" ></LJSteps>',
});

export const defaultUse = Template.bind({});

defaultUse.decorators = [() => ({ template: '<div style="margin: 3em;"><story /></div>' })];
