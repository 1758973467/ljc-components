import LJCInput from '../src/input.vue'

export default {
    title: 'lj-input',
    component: LJCInput,

}


export const text = () => ({
    components: { LJCInput },
    template: '<LJCInput type="text" v-model="data"/>',
    data() {
        return {
            data: ''
        }
    }
})

export const password = () => ({
    components: { LJCInput },
    template: '<LJCInput type="password" v-model="data"/>',
    data() {
        return {
            data: ''
        }
    }
})



