import LJLink from '../src/link.vue'

export default {
    title: 'lj-link',
    component: LJLink,
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
    components: { LJLink },
    props: Object.keys(argTypes),
    template: '<LJLink v-bind="$props" href="http://www.baidu.com">text</LJLink>',
});

export const defaultUse = Template.bind({});

defaultUse.decorators = [() => ({ template: '<div style="margin: 3em;"><story /></div>' })];
