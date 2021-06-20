<template>
  <div class="mt-4">
    <h1 class="mb-4 title">Faturas anteriores</h1>
    <div class="columns">
        <div class="column is-half is-offset-one-quarter">
            <div v-for="file in ListFiles" :key="file.id">
                <div class="card mt-4">
                    <header class="card-header">
                        <p class="card-header-title">
                            {{file.InvoiceDate}}
                        </p>

                        <router-link :to="{name: 'ViewInvoice'}">
                        <button @click="sendParams(file._id, file.InvoiceDate)" class="button is-primary is-medium">Acessar <i class="ml-2 fas fa-arrow-right"></i></button>
                        </router-link>
                        <button @click="showModal(file._id)" class="button is-danger is-medium ml-1"><i class="fas fa-trash-alt"></i></button>

                        <div :class="{modal: true, 'is-active': ShowModal}">
                            <div class="modal-background"></div>
                                <div class="modal-card modalE">
                                <header class="modal-card-head">
                                    <p class="modal-card-title">Tem certeza que deseja exluir?</p>
                                    <button @click="showModal()" class="delete" aria-label="close"></button>
                                </header>
                                <footer class="modal-card-foot columns">
                                    <div class="column">
                                    <button @click="showModal()" class="button">Cancelar</button>
                                    </div>
                                    
                                    <div class="column is-6 is-offset-4">
                                    
                                    <button @click="removeInvoice()" class="button is-danger">Excluir</button>
                                    
                                    </div>
                                    
                                </footer>
                            </div>
                        </div>

                    </header>
                </div>
            </div>
        </div>
    </div>
        
  </div>
</template>

<script>
import api from '../services/api'
export default {
    data(){
        return{
            ListFiles: [],
            FileIndex: -1,
            DateInvoice: '',
            ShowModal: false,
            idRemove: -1 
        }
    },
    async created(){
        try{
          let ListFiles = await api.get('/invoices')
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
        async sendParams(id, data){
            window.sessionStorage.setItem('ID', id)
            window.sessionStorage.setItem('data', data)
        },
        showModal(id){
            this.ShowModal = !this.ShowModal
            this.idRemove = id
            
        },
        async removeInvoice(){
            try{
                await api.delete('invoices/' + this.idRemove)
                let indexf = this.ListFiles.findIndex(i => i._id == this.idRemove)
                this.ListFiles.splice(indexf, 1)
                this.ShowModal = false
            }
            catch(err){
                this.ShowModal = false
                console.log(err)
                this.error = "Houve um erro interno"
                this.file = ""
            }
            

        }

    }
}
</script>

<style scoped>
.title{
    color: white;
}

.modalE{
    width: 450px;
}

</style>