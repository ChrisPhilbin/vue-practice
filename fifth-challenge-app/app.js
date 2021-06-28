const app = Vue.createApp({
  data() {
    return {
      inputTask: "",
      tasks: [],
      taskListIsVisible: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.taskListIsVisible ? "Hide" : "Show";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputTask);
    },
    toggleTaskList() {
      this.taskListIsVisible = !this.taskListIsVisible;
    },
  },
}).mount("#assignment");
