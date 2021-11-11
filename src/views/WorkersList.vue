<template>
  <div class="workersList">
    <h1 class="mb-3">Workers List</h1>
    <table class="table table-success table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Position</th>
          <th scope="col">Salary</th>
          <th scope="col">Date of Employee</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr scope="row"  v-for='(worker,nodeId) in workers' :key='worker.name'>
        <th>{{}}</th>
        <th>{{worker.name}}</th>
        <td>{{worker.lastName}}</td>
        <td>{{worker.position}}</td>
        <td>{{worker.salary}}</td>
        <td>{{worker.date}}</td>
        <td><button  @click='showTable(true, worker.name, worker.lastName, worker.position, worker.salary, worker.date, nodeId)' type="button" class="btn btn-success">Edit</button></td>
        <td><button @click='remove(nodeId)' type="button" class="btn btn-danger">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <ChangeTable 
  @changeVisibility='showTable(false)' 
  @changeData = 'changeData($event)'
  :name='name'
  :lastName='lastName'
  :position='position'
  :salary='salary'
  :date='date'
  :nodeId='workerId'
  v-if='visible'
  />
</template>
<script>
import ChangeTable from '@/components/ChangeTable.vue'
export default {
  data(){
    return{
      workers: null,
      visible: false,
      name:'',
      lastName:'',
      position: '',
      salary: '',
      date: '',
      workerId: '',
    }
  },
  components:{
    ChangeTable
  },
  async created() {
      try {
        let {data} = await this.axios('https://workers-39c16-default-rtdb.firebaseio.com/players.json');
        this.workers = data
      }
      catch(e){
        console.log('Error', e)
      }
    },
  methods:{
      showTable(arg,name, lastName, position, salary, date, nodeId){
        this.visible = arg
        this.name = name
        this.lastName = lastName
        this.position = position
        this.salary = salary,
        this.date = date,
        this.workerId = nodeId
      },
     async remove(id) {
      try {
        await this.axios.delete(`https://workers-39c16-default-rtdb.firebaseio.com/players/${id}.json`);
        delete this.workers[id]
        }
      catch(e){
        console.log('Error', e)
        }
      },
      async changeData(userData){
        try{
          let {data} = await this.axios.put(`https://workers-39c16-default-rtdb.firebaseio.com/players/${this.workerId}.json`, userData);
          this.workers[this.workerId] = data
        }
        catch{
          console.log('Error')
        }
        
      }
  }
   
}
</script>
<style lang="css">
  .workersList{
    width: 90%;
    margin: 0 auto;
  }
</style>
