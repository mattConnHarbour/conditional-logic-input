Vue.component('input-card', {
    props: ['input', 'conditionalInputs'],

    data() {
        return {}
    },

    methods: {
        addOption(){
            this.input.options.push({option: 'option'})
        },
        updateNextInput(option){
            this.input.nextInput = option
            console.log(this.input)
        }
    },
    template: `
    <div class="box">
        <div class="field">
            <label class="label">Question</label>
            <div class="control">
                <input class="input" placeholder="Question" v-model="input.text">
            </div>
        </div>
        <div class="options">
            <p class="content" style="border-bottom: solid 1px lightgrey;">Options</p>
            <p class="option content" v-for="option in input.options">
            If <input class="input" style="width: 20%;" placeholder="Answer" v-model="option.option"> then 

            <b-field>
                <b-select placeholder="nothing" @input="updateNextInput">
                    <option
                        v-for="input in conditionalInputs"
                        :value="input.text"
                        :key="input.text"
                        >
                        {{ input.text }}
                    </option>
                </b-select>
            </b-field>

            </p>
            <b-button rounded @click="addOption">Add Option</b-button>
        </div>
    </div>
    `
})