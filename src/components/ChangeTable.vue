<template>
  <form class="changeTable">
        <h1 class="mb-3">Change data</h1>
    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
      <input v-model='changedName' type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>
      <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Last Name</span>
      <input v-model='changedLastName' type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>
      <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Position</span>
      <input v-model='changedPosition' type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>
      <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Salary</span>
      <input v-model='changedSalary' min=0 type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>
      <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Date of Employee</span>
      <input v-model='changedDate' type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>
    <div class='buttons'>
      <button  @click='changeData' type="button" class="btn btn-success">Change</button>
      <button  @click='changeVisibility' type="button" class="btn btn-danger">Close</button>
    </div>
    <transition name="bounce">
        <div class="warning" v-if='alertVisible'>
          <h1>Please fill all fields.</h1>
          <div class='backButton'>
            <button type="button" class="btn btn-danger" @click='this.alertVisible = false'>Back</button>
          </div>
    </div>
    </transition>
  </form>
</template>

<script>
export default {
  data(){
    return{
      alertVisible: false,
      changedName: this.name,
      changedLastName: this.lastName,
      changedPosition: this.position,
      changedSalary: this.salary,
      changedDate: this.date,
    }
  },
  name: "HelloWorld",
  props: {
    nodeId: String,
    name: String,
    lastName: String,
    position: String,
    salary: String,
    date: String,
  },
  methods: {
    changeVisibility(){
        this.$emit('changeVisibility')
    },
    changeData(){
      if(this.changedName == '' || this.changedLastName == '' || this.changedPosition == '' || this.changedSalary == '' || this.changedDate == '' ){
          this.alertVisible = 'true'
      }
      else{
        let data = {
          name: this.changedName,
          lastName: this.changedLastName,
          position: this.changedPosition,
          salary: this.changedSalary,
          date: this.changedDate
      }
      this.$emit('changeData', data)
      }
    }
  }
};

</script>

<style>
  .changeTable{
    width: 500px;
    margin: 0 auto;
    border: 1px solid black;
    padding: 30px;
    border-radius: 20%;
    background-color: white;
  }
</style>
