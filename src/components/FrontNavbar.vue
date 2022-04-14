<template>
<div class="fixed-top bg-white">
  <div class="container ">
    <nav class="navbar  navbar-expand-lg navbar-light">
      <router-link class="navbar-brand" to="/" me-4><img  style="height:3rem; " src="../assets/LM.png " alt="L.M"></router-link>
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleNavHam"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end" ref="collapse"
      >
        <ul class="navbar-nav">
          <li><router-link @click="closeNavHam" class="nav-item nav-link me-4 " to="/"
            >首頁  </router-link
          ></li>
          <li><router-link @click="closeNavHam" class="nav-item nav-link me-4"  to="/products"
            >產品列表</router-link
          ></li>
          <li><router-link @click="closeNavHam" class="nav-item nav-link me-4" to="/guide">購物須知</router-link></li>
          <li me-4 ><router-link @click="closeNavHam" class="nav-item nav-link  position-relative " to="/cart"
            ><i class="bi bi-cart fs-5 " ></i
            ><span
                class="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-danger "
              >
              <!-- 使用可選串聯?.-->
              {{ cartData?.carts?.length }}
              </span></router-link
          ></li>
        </ul>
      </div>
    </nav>
  </div>
</div>
</template>

<script>
import collapseMixin from '@/mixins/collapseMixin'
import emitter from '@/utils/emitter'

export default {
  data () {
    return {
      cartData: {
      }
    }
  },
  mixins: [collapseMixin],
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then((res) => {
          console.log('getCart:', res)
          this.cartData = res.data.data
        })
    },
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  },
  mounted () {
    this.getCart()
    // 發起監聽get-cart事件
    emitter.on('get-cart', () => {
      this.getCart()
    })
  }
}
</script>
