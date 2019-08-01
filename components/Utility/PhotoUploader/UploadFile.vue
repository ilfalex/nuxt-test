<template lang="html">
  <div class="pa-3">
    <h4 class="title mb-2">
      Upload a file here
    </h4>
    <input
      id="photo-uploader-input"
      type="file"
      class="photo-uploader-input"
      @change="loadFile('audio')"
    >
  </div>
</template>

<script>
export default {
  methods: {
    loadFile () {
      const images = this.$store.state.user.images
      const fileData = document.getElementById('photo-uploader-input').files[0]
      this.readFile(fileData, () => {
        const photoUrl = event.target.result
        images.push({
          url: photoUrl,
          id: 233,
          order: 23
        })
        this.$store.commit('UPDATE_PROFILE', {
          images: images
        })
      })
    },
    readFile (file, onLoadCallback) {
      var reader = new FileReader()
      reader.onload = onLoadCallback
      reader.readAsDataURL(file)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
