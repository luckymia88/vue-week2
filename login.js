import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
    data(){
        return{
            user:{
                username: '',
                password: '',
                },
            }
    },
    methods: {
        login () {
        const api = 'https://vue3-course-api.hexschool.io/v2/admin/signin';
            axios.post(api, this.user) //登入成功
            .then((res)=>{
                const { token, expired } = res.data;
        document.cookie = `hexToken=${token}; expires=${new Date(expired)};`; //載入cookie
        window.location = './products.html'; // 跳轉產品頁面
        }) 
            .catch((err) => { //登入失敗
            alert(err.response.data.message);
        });
    },
  },
}).mount('#app');