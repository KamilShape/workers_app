<template>
  <form class="addWorker">
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
      <span class="input-group-text" id="inputGroup-sizing-sm">Salary [PLN/gr.]</span>
      <input v-model='salary' type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>
    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Date of Employee</span>
      <select @change="changeMonth($event)" class="form-control">
      <option v-for='month in months' :key="month">{{month}}</option>
      </select>
      <select class="form-control">
        <option v-for='index in numberOfDays' :key="index">{{index}}</option>
      </select>
      <select class="form-control">
        <option v-for='year in years'  :key='year'>{{year}}</option>
      </select> 
    </div>   
    <button @click='showAlert()' type="button" class="btn btn-primary">Add worker</button>
    <transition name="bounce">
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
    </transition>
  
  </form>
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
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      month: 'January',
      numberOfDays: 31,
      day: '1',
      year: 2000,
      date: '',
      alertVisible: false,
      buttonsVisible: false,
      message: ''
    }
  },
  computed:{
      years(){
        const year = new Date().getFullYear()
        return Array.from({length: year - 1999}, (value, index) => 2000 + index)
      }
  },
  methods:{
    showAlert(){
      this.alertVisible = true
      if(this.name !== '' && this.lastName !== '' && this.position !== '' && this.salary !== '' ){
         this.message = 'Are you sure?'
         this.buttonsVisible = true
      }
      else {
        this.message = 'Please fill all fields.';
        this.buttonsVisible = false
      }
    },
    backToAdding(){
      this.alertVisible = false
    },
    changeMonth(event) {
      this.month =
        event.target.options[event.target.options.selectedIndex].text;
      if(this.month == 'January' || this.month == 'March' || this.month == 'May' || this.month == 'July' || this.month == 'August' || this.month == 'October' || this.month == 'December'){
        this.numberOfDays = 31
      } else if(this.month == 'February' ){
        this.numberOfDays = 28
      } else {
        this.numberOfDays = 30
      }
    },
    async addWorker(){
      if(this.name !== '' || this.lastName !== '' || this.position !== '' || this.salary !== ''  ){
           try {
              await this.axios.post('https://workers-39c16-default-rtdb.firebaseio.com/players.json',{
              name: this.name,
              lastName: this.lastName,
              position: this.position,
              salary: this.salary,
              date: `${this.day} ${this.month} ${this.year}`
                  }
                )
              }
          catch(e){
            console.log('Error', e)
              }
          }
          this.backToAdding()
          this.name = ''
          this.lastName = ''
          this.position = ''
          this.salary = ''
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
