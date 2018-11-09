<template>
  <card class="text-center">
    <h3 class="mb-4">Không tìm thấy trang</h3>

    <div class="links">
      <router-link :to="{ name: 'home' }">
        Trở lại trang chủ
      </router-link>
    </div>
  </card>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
