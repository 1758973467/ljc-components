import LJCLink from '../src/link.vue'

export default {
    title: 'ljc-link',
    component: LJCLink,
    argTypes: {
        disabled: {
            options: [true, false],
            control: {
                type: 'boolean'
            }
        },
        underline: {
            control: {
                type: 'boolean'
            }

        }
    }
}
const Template = (args, { argTypes }) => ({
    components: { LJCLink },
    props: Object.keys(argTypes),
    template: '<LJCLink v-bind="$props" href="http://www.baidu.com">text</LJCLink>',
});

export const defaultUse = Template.bind({});

defaultUse.decorators = [() => ({ template: '<div style="margin: 3em;"><story /></div>' })];
