const inputs = {
   start: 'staying',

    dining: {
        text: 'Will you be dining with us?',
        options: {
            Yes: 'allergies',
            No: null
        },
        selection: [],
        nextInput: null,
    },
    allergies: {
        text: 'Do you have any allergies we should know about?',
        options: {
            Yes: null,
            No: null
        },
        selection: [],
        nextInput: null
    },
    staying: {
        text: 'Will you be staying at The Inn?',
        options: {
            Yes: 'dining',
            No: null
        },
        selection: [],
        nextInput: null
    }
}