Vue.component('conditional-logic-input', {
    props: ['conditionalInputs'],
    data(){
        return {
            inputKeySequence: [],
        }
    },
    methods: {
        updateSelection(key, option) {
            this.conditionalInputs[key].selection = [option]
            this.conditionalInputs[key].nextInput = this.conditionalInputs[key].options[option]
            this.generateInputKeySequence()
        },

        generateInputKeySequence(){
            const newSequence = [] 
            let nextInput = this.conditionalInputs.start

            while(nextInput){
                newSequence.push(nextInput)
                const selection = this.conditionalInputs[nextInput].nextInput
                nextInput = selection
            }

            this.inputKeySequence = newSequence 
        }
    },
    mounted: function(){
        this.generateInputKeySequence()
    },
    template: `
    <div class="conditional-logic-input">
            <section class="content" v-for="key in inputKeySequence">
                <p class="content">{{ conditionalInputs[key].text }}</p>
                <b-field>
                    <b-checkbox-button
                    v-for="option in Object.keys(conditionalInputs[key].options)"
                    v-model="conditionalInputs[key].selection"
                    @input="updateSelection(key, option)"
                    :native-value="option"
                    >
                        <b-icon icon="check"></b-icon>
                        <span>{{option}}</span>
                    </b-checkbox-button>
                </b-field>
            </section>
    </div>
    `
})