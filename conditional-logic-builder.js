Vue.component('conditional-logic-builder', {
    props: ['conditionalInputs'],

    data() {
        return {
            count: 0
        }
    },

    methods: {
        addInputOptionCard(){
            this.count++
            const label = 'Question ' + this.count

            const newInput = {
                text: 'Text',
                options: [
                    {
                        option: 'Yes',
                        nextInput: null
                    },
                    {
                        option: 'No',
                        nextInput: null
                    }
                ],
                selection: [],
                nextInput: null,
            }

            this.$set(this.conditionalInputs, label, newInput)
        }
    },

    template: `
    <div class="conditional-logic-builder">
        <b-button type="is-primary" rounded @click="addInputOptionCard">Add Input</b-button>
    </div>
    `
})