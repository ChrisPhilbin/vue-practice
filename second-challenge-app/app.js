const app = Vue.createApp({
    data() {
        return {
            name: '',
            enteredName: ''
        }
    },
    methods: {
        showAlert() {
            alert("A key was pressed!");
        },
        updateName(event) {
            this.name = event.target.value;
        },
        setEnteredName(event) {
            this.enteredName = event.target.value;
        }
    }
}).mount("#assignment")