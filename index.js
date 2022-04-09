const example = {
    data() {
        return {
            start: 'question',
            inputs: {
                question: {
                    text: 'Do you have any allergies we should know about?',
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
                    nextInput: null
                },
            }
        }
    },
}

const app = new Vue(example)
app.$mount('#app')