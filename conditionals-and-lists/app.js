const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoalValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(goal) {
      this.goals.splice(goal, 1);
    },
  },
});

app.mount("#user-goals");
