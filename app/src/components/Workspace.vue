<template>
<div class="workspace">
  <pre v-if="file"><code>{{ file.data }}</code></pre>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    file: state => state.workspace.file
  })
}
</script>
