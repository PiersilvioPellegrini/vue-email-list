const { createApp } = Vue;

createApp({
  data() {
    return {
        mailList: [],
        
    };
  },
  methods: {
    fetchData(){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((email) => {
          this.mailList.push(email.data.response);
          console.log(obj);
        });
    },

    fillArryMail(){
        for(let i=0; i<10 ;i++ ){
            this.fetchData();
        }
    }


  },
  mounted() {
    this.fillArryMail();

  },
}).mount("#app");
