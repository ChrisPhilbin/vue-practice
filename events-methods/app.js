const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    subtract() {
      this.counter--;
    },
    updateName(event) {
      this.name = event.target.value
    },
    resetName() {
      this.name = '';
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    handleSubmit(event) {
      console.log("handle submit is running!")
      alert("I was clicked!");
    }
  },
  computed: {
    fullName() {
      console.log("computed fullName is running")
      if (this.name === '') return ''
      return this.name + ' ' + "philbin";
    }
  }
});

app.mount('#events');
