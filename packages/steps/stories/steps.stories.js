import LJCSteps from '../src/steps.vue'
import { screen, userEvent } from '@storybook/testing-library';
export default {
    title: 'ljc-steps',
    component: LJCSteps,
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
    components: { LJCSteps },
    props: Object.keys(argTypes),
    template: '<LJCSteps v-bind="$props" ></LJCSteps>',
});

export const defaultUse = Template.bind({});

defaultUse.decorators = [() => ({ template: '<div style="margin: 3em;"><story /></div>' })];
