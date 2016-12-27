<template>
  <div class="workspace">
      <tab-view></tab-view>

      <editor></editor>
  </div>
</template>

<script>
export default {
  components: {
    'tab-view': require('src/components/TabView.vue'),
    'editor': require('src/components/Editor.vue')
  }
}
</script>
