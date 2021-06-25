const app = Vue.createApp({
  data() {
    return {
      selectedStyle: "",
      visible: true,
      inputBackgroundColor: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.selectedStyle === "user1",
        user2: this.selectedStyle === "user2",
        visible: this.visible,
        hidden: !this.visible,
      };
    },
  },
  watch: {},
  methods: {
    toggleVisible() {
      this.visible = !this.visible;
    },
  },
}).mount("#assignment");
