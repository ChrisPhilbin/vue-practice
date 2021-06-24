const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    result() {
      let that = this;
      setTimeout(() => {
        that.counter = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return "Not there yet";
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    add(n) {
      this.counter += n;
    },
  },
}).mount("#assignment");
