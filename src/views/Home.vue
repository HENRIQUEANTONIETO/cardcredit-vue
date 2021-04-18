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

        <form @submit.prevent="sendFile" enctype="multipart/form-data" class="column is-half is-offset-one-quarter">
          <div class="file is-centered is-boxed is-success has-name">
            <label class="file-label">
              <input type="file" ref="file" @change="selectFile" class="file-input"/>
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label"> Escolha um arquivo...</span>
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
                Seu arquivo está pronto para ser usado, clique em próximo.
              </div>
            </div>
          </div>
          </section>
          <footer class="modal-card-foot columns">
            <div class="column">
              <button @click="closeModal()" class="button">Cancelar</button>
            </div>
            
            <div class="column is-9 is-offset-4">
              <router-link :to="{name: 'ViewInvoice', params:{inv: this.FileIndex, date: this.DateInvoice}}">
                <button class="button is-success">Próximo</button>
              </router-link>
            </div>
            
          </footer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  components: {
  
  },
  data(){
    return{
      file: "",
      error: undefined,
      errorMessage: '',
      ShowModal: false,
      FileIndex: -1,
      DateInvoice: ''
    }
  },
  methods: {
    selectFile() {
      const file = this.$refs.file.files[0]
      this.file = file
    },

     async sendFile() {
      const formData = new FormData()
      formData.append('file', this.file)
      try {
        let req = await axios.post('https://creditcard-h-api.herokuapp.com/upload', formData)
        this.file = ""
        this.error = undefined
        this.ShowModal = true

        //pegar indice do arquivo na lista de arquivos em ./data da API para converter
        let File = undefined
        try{
          let ListFiles = await axios.get('https://creditcard-h-api.herokuapp.com/files')
          ListFiles = ListFiles.data
          File = ListFiles.findIndex((file) => file == req.data.file.filename)
          this.FileIndex = File
        }
        catch(err){
          this.ShowModal = false
          console.log(err)
          this.error = "Houve um erro interno"
          this.file = ""
        }

        //pegar nome da fatura para servir como data
        let FileName = req.data.file.filename
        console.log(FileName)
        let month = FileName.split('-')[2].split('.')[0]
        let year = FileName.split('-')[1]
        this.DateInvoice = month + '/' + year 



        let fileType = req.data.file.mimetype
        if(fileType == "application/vnd.ms-excel"){
          try{
            await axios.post('https://creditcard-h-api.herokuapp.com/convert/' + File)
            console.log('Convertido para json')
          }
          catch(err){
            this.error = err.response.data.err
            this.file = ""
          }
        }

      } catch(err) {
        this.error = err.response.data.err
        this.file = ""
      }
    },
    closeError(){
      this.error = undefined
    },
    closeModal(){
      this.ShowModal = false
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
</style>

