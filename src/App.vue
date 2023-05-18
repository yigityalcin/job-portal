<template>
  <div>
    <h1>Job Portal</h1>
    <form @submit.prevent="addJob">
      <input type="text" v-model="newJob.title" placeholder="Title" required>
      <input type="text" v-model="newJob.company" placeholder="Company" required>
      <button type="submit">Add Job</button>
    </form>
    <ul>
      <li v-for="job in jobs" :key="job.id">
        <h3>{{ job.title }}</h3>
        <p>{{ job.company }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['jobs']),
    newJob: () => ({ title: '', company: '' })
  },
  mounted() {
    this.fetchJobs()
  },
  methods: {
    ...mapActions(['fetchJobs', 'addJob']),
    addJob() {
      this.addJob(this.newJob)
      this.newJob.title = ''
      this.newJob.company = ''
    }
  }
}
</script>
