Vue.component('conditional-logic-input', {
    props: ['conditionalInputs', 'start', 'array', 'object'],
    methods: {
        updateSelection(key, option) {
            this.conditionalInputs[key].selection = [option]
            this.conditionalInputs[key].nextInput = this.conditionalInputs[key].options[option]
        },

    },
    computed: {
        inputKeySequence(){
            const newSequence = [] 
            let nextInput = this.start

            while(nextInput){
                newSequence.push(nextInput)
                const selection = this.conditionalInputs[nextInput].nextInput
                nextInput = selection
            }

            return newSequence 
        }
    },
    template: `
    <div class="conditional-logic-input">
            <section class="content" v-for="key in inputKeySequence">
                <p class="content">{{ conditionalInputs[key].text }}</p>
                <b-field>
                    <b-checkbox-button
                    v-for="option in conditionalInputs[key].options"
                    v-model="conditionalInputs[key].selection"
                    @input="updateSelection(key, option)"
                    :native-value="option"
                    >
                        <b-icon icon="check"></b-icon>
                        <span>{{option.option}}</span>
                    </b-checkbox-button>
                </b-field>
            </section>
            {{ object }}
    </div>
    `
})