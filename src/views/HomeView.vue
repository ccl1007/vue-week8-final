<template>
 <Loading :active="isLoading"></Loading>
  <div class="position-relative" style="margin-top: 5rem">
    <div
      class="position-absolute o"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(https://i.imgur.com/2ODhwBK.jpg);
        background-size: cover;
        background-position: center center;
        opacity: 0.9;
        z-index: -1;
      "
    ></div>
    <div
      class="ps-5 pe-0 d-flex flex-column justify-content-center"
      style="min-height:20rem"
    >
      <div data-aos="fade-up" data-aos-duration="2000" class="mt-4">
        <h2 class="pt-2" style="background-color: rgba(243, 239, 236, 0.65)">
          Little.My韓國女裝代購 <br />小小單品創造出自己風格
        </h2>
      </div>
    </div>
  </div>
  <div class="container my-7" style="overflow-x: hidden">
    <div class="row">
      <div data-aos="fade-left" data-aos-offset="300" class="col-md-6">
        <img
          src="https://i0.wp.com/littlemy-lm.com/wp-content/uploads/2021/12/BAD1892B-C711-4D85-ADF9-2825FA7515A7.png?w=642&ssl=1"
          alt="3000免運"
          class="img-fluid"
        />
      </div>
      <div data-aos="fade-right" class="col-md-4 m-auto text-start">
        <h4 class="mt-4">滿$3000免運</h4>
        <p class="text-muted text-start">
          國內地區<br />
          超商 運費$60<br />
          郵寄 運費$80<br />
          門市自取 運費$0<br />
        </p>
        <router-link :to="`/products`"
          ><button
            type="button"
            class="text-start btn btn-secondary mt-3 text-white"
          >
            立即選購
          </button></router-link
        >
      </div>
    </div>
    <div
      class="row flex-row-reverse justify-content-between mt-4"
      style="overflow-x: hidden"
    >
      <div data-aos="fade-right" class="col-md-6">
        <img
          src="https://i0.wp.com/littlemy-lm.com/wp-content/uploads/2022/03/PInk-beautiful-Photo-Collage.png?resize=1024%2C819&ssl=1"
          alt="春季新品"
          class="img-fluid"
        />
      </div>
      <div data-aos="fade-left" class="col-md-4 m-auto text-start">
        <h4 class="mt-4">春季新品大回饋</h4>
        <p class="text-muted">
          凡儲值購物金，現享購物金回饋<br />
          ✔單次儲值3000元，現享回饋300元購物金<br />
          ✔單次儲值5000元，現享回饋500元購物金<br />
        </p>
        <router-link :to="`/products`"
          ><button
            type="button"
            class="text-start btn btn-secondary mt-3 text-white"
          >
            立即選購
          </button></router-link
        >
      </div>
    </div>
  </div>
  <div class="bg-light mt-7">
    <div class="container">
      <div class="row justify-content-center my-3">
        <div class="col-md-6 text-center pt-2">
          <h3><i class="bi bi-heart-half"></i>本月推薦</h3>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-4 mb-5">
    <Swiper
      :spaceBetween="2"
      :loop="true"
      :navigation="true"
      :modules="modules"
      :breakpoints="swiperOption"
      class="my-2"
    >
      <SwiperSlide v-for="item in products" :key="item.id">
        <div class="card cursor-pointer" @click="getProduct(item.id)">
          <router-link class="text-decoration-none" :to="`/product/${item.id}`">
            <div class="overflow-hidden position-relative">
              <div
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
                style="
                  height: 300px;
                  background-size: cover;
                  background-position: center center;
                "
              ></div>
            </div>
            <div class="card-body">
              <h4 class="card-title space-nowrap overflow-hidden text-truncate">
                <strong>{{ item.title }}</strong>
              </h4>
              <p class="card-text text-truncate text-muted mb-2">
                {{ item.description }}
              </p>
              <div class="d-flex justify-content-center align-items-center">
                <h5 class="fs-3 mb-0 me-2">NT${{ item.price }}</h5>
                <h5 class="fs-6 mb-0 text-decoration-line-through text-muted">
                  NT${{ item.origin_price }}
                </h5>
              </div>
            </div>
          </router-link>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
// @ is an alias to /src
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  data () {
    return {
      products: [],
      product: [],
      id: '',
      isLoading: false,
      // modules放在data即可
      modules: [Navigation, Pagination],
      swiperOption: {
        1: {
          slidesPerView: 1,
          slidesPerGroup: 1
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
        992: {
          slidesPerView: 3,
          slidesPerGroup: 3
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4
        }
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then((res) => {
        this.products = res.data.products
      })
    },
    getProduct () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id} `
      this.$http.get(url).then((res) => {
        this.isLoading = false
        this.product = res.data.product
      })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
