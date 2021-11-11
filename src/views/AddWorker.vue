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
    <button @click='showAlert()' type="button" class="btn btn-primary">Add worker</button>
    <div class="warning" v-if='alertVisible'>
      <h1>{{message}}</h1>
      <div class='buttons' v-if='buttonsVisible'>
        <button type="button" class="btn btn-success" @click='addWorker'>Yes</button>
        <button type="button" class="btn btn-danger" @click='backToAdding'>No</button>
      </div>
       <div class='backButton' v-if='!buttonsVisible'>
        <button type="button" class="btn btn-danger" @click='backToAdding'>Back</button>
      </div>
    </div>
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
      date: '',
      alertVisible: false,
      buttonsVisible: false,
      message: ''
    }
  },
  components:{
    // Warning
    
  },
  methods:{
    showAlert(){
      this.alertVisible = true
      if(this.name !== '' && this.lastName !== '' && this.position !== '' && this.salary !== '' && this.date !== '' ){
         this.message = 'Are you sure?'
         this.buttonsVisible = true
      }
      else {
        this.message = 'Please fill all inputs.';
        this.buttonsVisible = false
      }
    },
    backToAdding(){
      this.alertVisible = false
    },
    async addWorker(){
      if(this.name !== '' || this.lastName !== '' || this.position !== '' || this.salary !== '' || this.date !== '' ){
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
          }
          this.backToAdding()
    },
    }
  }


</script>
<style lang="css">
  .addWorker{
    width: 400px;
    margin : 0 auto;
  }
  .warning{
    position: fixed;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;

    background-color: rgb(253,253,150);
    border-radius: 40px;
    padding: 70px;
  }
  .buttons{
    display: flex;
    
    padding: 10px;
    justify-content: space-evenly;
  }
</style>
