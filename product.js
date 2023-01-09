import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
  data() {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io/v2',
      apiPath: 'luckymia',
      products: [],
      tempProduct: {},
    }
  },
  methods: {
    //是否登入
    checkAdmin() {
      const url = `${this.apiUrl}/api/${this.apiPath}/check`;
      axios.post(url)
        .then((res) => {
          this.getData();
        })
        .catch((err) => {
          alert(err.response.data.message)
          window.location = 'login.html';
        })
    },
    //渲染產品至畫面上
    getData() {
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`;
      axios.get(url)
        .then((res) => {
          this.products = response.data.products;
        })
        .catch((err) => {
          alert(err.response.data.message);
        })
    },
    //點擊 顯示到右邊
    openProduct(item) {
      this.tempProduct = item;
    }
  },
  mounted() {
    // 取出 Token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common['Authorization'] = token;

    this.checkAdmin()
  }
}).mount('#app');