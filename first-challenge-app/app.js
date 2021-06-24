const app = Vue.createApp({
    data(){
        return{
            firstName: "Chris Philbin",
            age: 34,
            imageURL: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        }
    },
    methods: {
        favoriteNumber() {
            return Math.random();
        }
    }
});

app.mount("#assignment")