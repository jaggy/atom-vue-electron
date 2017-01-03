<template>
  <nav class="fuzzy-finder">
    <div class="fuzzy-finder__navigator">
      <input class="fuzzy-finder__input" type="text" v-model="search">
    </div>

    <ul class="fuzzy-finder__files">
      <li v-for="file in files">
        <a href="#" class="fuzzy-finder__file">
          <h3 class="fuzzy-finder__file-name">{{ file.name }}</h3>
          <small class="fuzzy-finder__file-path">{{ file.path }}</small>   
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    files () {
      if (!this.search) {
        return this.index.slice(0, 5)
      }

      return this
        .index
        .filter(file => file.name.startsWith(this.search))
        .slice(0, 5)
    },

    ...mapState({
      index: state => state.workspace.project.index
    })
  },

  data () {
    return { search: null }
  },

  methods: {
    find (keyword) {
    }
  },

  watch: {
    search (keyword) {
      this.find(keyword)
    }
  }
}
</script>
