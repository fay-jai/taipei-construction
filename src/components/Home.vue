<template>
  <div class="home">
    <div class="container">
      <div class="intro">
        <template v-if="lang === 'en'">
          <p>
            Based in San Jose, Taipei Construction Co. began in 2000 and has been serving
            the Bay Area community for 17 years. We pride ourselves on our outstanding services
            and the best compliment we receive is our customer's continued referral of our
            services to their family and friends.
          </p>
          <p>
            We focus on custom home remodeling, additions and alterations to flooring,
            plumbing, electricity, marble installation, exterior and interior painting,
            and repairing services. We provide free initial onsite consultation before
            performing any services. Please don't hesitate to give us a call if you have
            any questions.
          </p>
        </template>
        <p v-else>
          台北装饰装修公司于2000年在San Jose建立以来服务湾区17年. 业务精湛, 口碑极好.
          公司业务范围包括加建改建, 换门换窗, 厨房浴室翻新, 大理石地板, 水电油漆, 维修业务.
          公司提供免费估价, 诚信可靠. 有任何业务问题请拨打我们的电话咨询.
        </p>
      </div>
      <div class="contact">
        <div class="profile">
          <div class="name">Jim Wen</div>
          <div class="photo">
            <img src="../assets/jim_wen.jpg" />
          </div>
        </div>
        <div class="info">
          <div class="phone">
            <div v-if="lang === 'en'">Phone</div>
            <div v-else>电话</div>
            <div>408-887-3345 (Jim Wen)</div>
            <div>408-398-2831 (Lily Jiang)</div>
          </div>
          <div class="email">
            <div v-if="lang === 'en'">Email</div>
            <div v-else>邮箱</div>
            <a href="mailto:taipeiconstruction.jn@gmail.com">taipeiconstruction.jn@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'home',
  computed: {
    lang() {
      return store.state.lang;
    },
  },
};
</script>

<style>
.home {
  padding: 10px;
}

.photo img {
  width: 150px;
  height: 150px;
}
</style>
