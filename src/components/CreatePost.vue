<template>
  <section>
    <button class="button is-primary is-medium" @click="isCardModalActive = true">
      Create new post
    </button>

    <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
      <div class="card">
        <header class="modal-card-head">
          <p class="modal-card-title">let the world hear ya</p>
        </header>

        <!-- <form @submit.prevent> -->
          <section class="modal-card-body">
            <b-field label="tweet tweet">
              <b-input maxlength="200" type="textarea" v-model="postContent"></b-input>
            </b-field>
          </section>
        <!-- </form> -->

        <footer class="modal-card-foot">
          <button class="button" type="button" @click="closeModal">Close</button>
          <button class="button is-primary" @click="submitPost" :disabled="postContent == ''">Submit</button>
        </footer>
      </div>
    </b-modal>
  </section>
</template>

<script>
export default {
  name: 'CreatePost',
  data () {
    return {
      isCardModalActive: false,
      postContent: ''
    }
  },
  methods: {
    submitPost (event) {
      this.$emit('submittingPost', this.postContent)
      this.closeModal()
      this.postContent = ''
      console.log('clicked')
    },
    closeModal () {
      this.isCardModalActive = false
    }
  }
}
</script>

<style scoped>

</style>
