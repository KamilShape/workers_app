<template>
  <div class="addWorker">
        <h1 class="mb-3">Add worker</h1>
    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
      <input v-model='name' type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>
      <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Last Name</span>
      <input v-model='lastName' type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>
      <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Position</span>
      <input v-model='position' type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>
      <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Salary</span>
      <input v-model='salary' type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>
      <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Date of Employee</span>
      <input v-model='date' type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>
    <button @click='addWorker' type="button" class="btn btn-primary">Add worker</button>
    
  </div>
</template>

<script>

export default {
  name: "AddWorker",
  data(){
    return{
      name:'',
      lastName:'',
      position: '',
      salary: '',
      date: ''
    }
  },
  methods:{
    async addWorker(){
      try {
        await this.axios.post('https://workers-39c16-default-rtdb.firebaseio.com/players.json',{
        name: this.name,
        lastName: this.lastName,
        position: this.position,
        salary: this.salary,
        date: this.date
        }
      )
      }
      catch(e){
        console.log('Error', e)
      }
    },
    }
  }


</script>
<style lang="css">
  .addWorker{
    width: 400px;
    margin : 0 auto;
  }
</style>
