import { db } from './firebase/firebase'

export default {
  state: {
    jobs: []
  },
  mutations: {
    setJobs(state, jobs) {
      state.jobs = jobs
    },
    addJob(state, job) {
      state.jobs.push(job)
    }
  },
  actions: {
    fetchJobs({ commit }) {
      db.collection('jobs').get().then(querySnapshot => {
        const jobs = []
        querySnapshot.forEach(doc => {
          const job = doc.data()
          job.id = doc.id
          jobs.push(job)
        })
        commit('setJobs', jobs)
      })
    },
    addJob({ commit }, job) {
      db.collection('jobs').add(job).then(docRef => {
        const newJob = { ...job, id: docRef.id }
        commit('addJob', newJob)
      })
    }
  }
}
