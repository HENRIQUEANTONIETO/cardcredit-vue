<template>
  <div class="home mt-4">
    <h1 class="mb-4 title">Importe sua fatura em csv ou em json</h1>
    <div class="columns mt-4 ">
      <div class="column is-three-fifths is-offset-one-fifth"> 

        <div v-if="error != undefined">
          <article class="message is-danger">
            <div class="message-header">
              <p>{{error}}</p>
              <button @click="closeError()" class="delete" aria-label="delete"></button>
            </div>
          </article>
        </div>

        <form @submit.prevent="sendFile"
              enctype="multipart/form-data"
              class="column is-half is-offset-one-quarter"
              @dragover.prevent="onDragOver"
              @dragleave.prevent="onDragLeave"
              @drop.prevent="onDrop"
        >
          <div 
            class="file is-centered is-boxed is-success has-name"
            :class="{ 'drag-over': isDragOver }"
          >
            <label class="file-label">
              <input type="file" ref="file" @change="selectFile" class="file-input"/>
              <span class="file-cta" >
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label"> Escolha um arquivo ou <br> o arraste aqui</span>
              </span>
              <span v-if="file" class="file-name">{{file.name}}</span>
              <div class="field mt-4">
                <button class="button is-info is-fullwidth">Importar</button>
              </div>
            </label>
          </div>
        </form>
      </div>
    </div>


    <div :class="{modal: true, 'is-active': ShowModal}">
      <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Arquivo importado!</p>
            <button @click="closeModal()" class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
            <div class="card">
            <div class="card-content">
              <div class="content">
                Seu arquivo está pronto para ser usado, digite o mês/ano para continuar.
                <input class="input" type="text" v-mask="'##/####'" placeholder="mês/ano" v-model="InvoiceDate" >
                <div v-if="error != undefined">
                  <small style="color: red">{{error}}</small>
                </div>
              </div>
            </div>
          </div>
          </section>
          <footer class="modal-card-foot columns">
            <div class="column">
              <button @click="closeModal()" class="button">Cancelar</button>
            </div>
            
            <div class="column is-9 is-offset-4">
              
              <button @click="Process()" class="button is-success">Próximo</button>
              
            </div>
            
          </footer>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../services/api'
export default {
  name: 'Home',
  components: {
  
  },
  data(){
    return{
      file: "",
      error: undefined,
      ShowModal: false,
      FileIndex: -1,
      InvoiceDate: '',
      isDragOver: false,
    }
  },
  methods: {
    selectFile() {
      const file = this.$refs.file.files[0]
      this.file = file
    },
    onDrop(event) {
      this.isDragOver = false;
      const file = event.dataTransfer.files;
      this.file = file[0]
    },

    onDragOver() {
      this.isDragOver = true;
    },
    onDragLeave() {
      this.isDragOver = false;
    },

     async sendFile() {
      const formData = new FormData()
      formData.append('file', this.file)
      try {
        await api.post('/upload', formData)
        this.file = ""
        this.error = undefined
        this.ShowModal = true
        
      } catch(err) {
        this.error = err.response.data.err
        this.file = ""
      }

      try{
        await api.post('/convert')
      }
      catch(err){
        this.error = err.response.data.err
        this.file = ""
      }
    },
    closeError(){
      this.error = undefined
    },
    closeModal(){
      this.ShowModal = false
    },
    async Process(){
      try{
        const result = await api.post('/process', {InvoiceDate: this.InvoiceDate})
        window.sessionStorage.setItem('ID', result.data.invoice._id)
        window.sessionStorage.setItem('data', result.data.invoice.InvoiceDate)
        this.$router.push({name: 'ViewInvoice'})
      }
      catch(err){
        this.error = err.response.data.error
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

.file-label{
  color: white;
}

.drag-over {
  background: rgba(0, 0, 255, 0.301);
  border: 1px solid rgba(0, 0, 255, 0.301);
}
</style>

