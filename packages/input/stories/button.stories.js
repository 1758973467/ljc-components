import LJInput from '../src/input.vue'

export default {
    title: 'lj-input',
    component: LJInput,

}


export const text = () => ({
    components: { LJInput },
    template: '<LJInput type="text" v-model="data"/>',
    data() {
        return {
            data: ''
        }
    }
})

export const password = () => ({
    components: { LJInput },
    template: '<LJInput type="password" v-model="data"/>',
    data() {
        return {
            data: ''
        }
    }
})



