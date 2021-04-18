<template>
  <div class="mt-4">
    <h1 class="mb-4 title">Faturas anteriores</h1>
    <div class="columns">
        <div class="column is-half is-offset-one-quarter">
            <div v-for="file in ListFiles" :key="file.id">
                <div class="card mt-4">
                    <header class="card-header">
                        <p class="card-header-title">
                            {{file.split('.')[0]}}
                        </p>

                        <router-link :to="{name: 'ViewInvoice', params:{inv: FileIndex, date: DateInvoice}}">
                        <button class="button is-primary is-medium" @click="getIndex(file)">Acessar <i class="ml-2 fas fa-arrow-right"></i></button>
                        </router-link>

                    </header>
                </div>
            </div>
        </div>
    </div>
        
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            ListFiles: [],
            FileIndex: -1,
            DateInvoice: ''
        }
    },
    async created(){
        try{
          let ListFiles = await axios.get('https://creditcard-h-api.herokuapp.com/files')
          this.ListFiles = ListFiles.data
        }
        catch(err){
          this.ShowModal = false
          console.log(err)
          this.error = "Houve um erro interno"
          this.file = ""
        }
    },
    methods:{
        getIndex(file){
            let File = this.ListFiles.findIndex((fileI) => fileI == file)
            this.FileIndex = File
            
            let FileName = this.ListFiles[this.FileIndex]
            let month = FileName.split('-')[2].split('.')[0]
            let year = FileName.split('-')[1]
            this.DateInvoice = month + '/' + year 
        }
    }
}
</script>

<style scoped>
.title{
    color: white;
}

</style>