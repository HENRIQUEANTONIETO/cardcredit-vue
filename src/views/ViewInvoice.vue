<template>
    <div>
        <div v-if="error != undefined">
          <article class="message is-danger">
            <div class="message-header">
              <p>{{error}}</p>
              <button @click="closeError()" class="delete" aria-label="delete"></button>
            </div>
          </article>
        </div>
        <div class="columns mt-5">
            <div class="column is-two-thirds">
                <table class="table is-bordered container is-striped">
                    <div class="table-invoice">
                        <thead>
                            <tr > 
                                <th>Título</th>
                                <th>Categoria</th>
                                <th>Valor</th>
                                <th>Data</th>
                                <th class="dad">Pai</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="invoice in FullInvoice" :key="invoice.id" @dblclick="showModal(invoice.id)">
                                <td>{{invoice.titulo}}</td>
                                <td>{{invoice.categoria}}</td>
                                <td>{{invoice.valor}}</td>
                                <td>
                                    {{invoice.data.split('-')[2]}}/{{invoice.data.split('-')[1]}}
                                </td>
                                <td v-if="invoice.pai === 1">
                                    <input type="checkbox" checked @click="MarkDad(invoice.id)">
                                </td>
                                <td v-else>
                                    <input type="checkbox" @click="MarkDad(invoice.id)">
                                </td>
                            </tr>
                        </tbody>
                    </div>
                    <div class="field is-grouped">
                        <p class="control is-expanded">
                            <input class="input" type="text" placeholder="Título" v-model="title">
                        </p>
                        <p class="control">
                            <input class="input" type="number" placeholder="Valor" v-model="amount">
                        </p>
                        <p class="control">
                            <button class="button is-info" @click="AddDad()">
                            Adicionar
                            </button>
                        </p>
                    </div>
                </table>

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
                
            </div>

            <div class="column">
                <h1 class="title">Fatura de: {{this.data}}</h1>
                <div class="resume">
                    <small>Valor Pai: </small><small class="value"> R$ {{TotalDad}}</small>
                    <hr>
                    <small>Valor Henrique: </small><small class="value">R$ {{TotalMe}}</small>
                    <hr>
                    <small>Valor Total: </small><small class="value"> R$ {{TotalCard}}</small>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
import api from '../services/api'
export default {
    name: 'ViewInvoice',
    async created(){
        await this.UpdateList()
        if(this.FullInvoice.length <= 0){
            alert('Este arquivo não tem faturas e não poderá ser utilizado, favor exclui-lo na próxima tela.')
            this.$router.push({name: 'PreviousInvoices'}) 
        }
    },
    data(){
        return{
            FullInvoice: [],
            TotalCard: 0,
            TotalDad: 0,
            TotalMe: 0,
            error: undefined,
            title: '',
            amount: 0,
            ShowModal: false,
            idRemove: -1,
            ID: window.sessionStorage.getItem('ID'),
            data: window.sessionStorage.getItem('data'),
            crescente: false 
        }
    },
    methods: {
        async MarkDad(id){
            try{
                await api.put('/invoices/' + this.ID + '/' + id)
                this.Calculate()
            }
            catch(err){
                console.log(err)
                this.$router.push({name: 'PreviousInvoices'})
            }
            
        },

        async AddDad(){
            try{
                await api.put('/invoices/' + this.ID, {
                    title: this.title,
                    amount: Number(this.amount)
                })
                this.error = undefined
                this.UpdateList()
                this.Calculate()

                this.title = ''
                this.amount = 0
            }
            catch(err){
                this.error = err.response.data.error
            }
            
        },

        async Calculate(){
            let Total = await api.get('/invoices/totalizer/' + this.ID)
            this.TotalCard = Total.data.TotalCard.toFixed(2)
            this.TotalDad = Total.data.TotalDad.toFixed(2)
            this.TotalMe = Total.data.TotalMe.toFixed(2)
        },

        async UpdateList(){
            await api.get('/invoices/' + this.ID).then(res =>{
                this.FullInvoice = res.data.Invoice
                this.Calculate()
            }).catch((err) =>{
                console.log(err)
            })
        },
        closeError(){
            this.error = undefined
        },

        showModal(id){
            this.ShowModal = !this.ShowModal
            this.idRemove = id
        },
        async removeInvoice(){
            try{
                await api.delete('/invoices/' + this.ID + '/'+ this.idRemove)
                let indexf = this.FullInvoice.findIndex(i => i.id == this.idRemove)
                this.FullInvoice.splice(indexf, 1)
                this.Calculate()
                this.ShowModal = false
                if(this.FullInvoice.length <= 0){
                    alert('Este arquivo não tem faturas e não poderá ser utilizado, favor exclui-lo na próxima tela.')
                    this.$router.push({name: 'PreviousInvoices'}) 
                }
            }
            catch(err){
                this.error = err.response.data.error
            }
        },
        sort(){
            if (!this.crescente) {
                this.crescente = true 
                this.FullInvoice.sort(function(a,b) {   
                    return a.titulo.toUpperCase() < b.titulo.toUpperCase() ? -1
                        : a.titulo.toUpperCase() > b.titulo.toUpperCase() ? 1 : 0;
                    });
                return    
            }

            this.FullInvoice.sort(function(a,b) {
                return a.titulo.toUpperCase() > b.titulo.toUpperCase() ? -1
                     : a.titulo.toUpperCase() < b.titulo.toUpperCase() ? 1 : 0;
                });
            this.crescente = false
        }
    }
}

</script>

<style scoped>
.resume{
    background-color: white;
    width: 300px;
    text-align: justify;
    padding: 10px;
    border-radius: 5px;
    font-size: 1.5em;
}

.table{
    padding: 0 5px;
}

thead th{
    cursor: pointer;
}

thead th:hover{ 
    color: #3298dc;
}

.value{
    color: red
}

.dad{
    margin-right: 5px;
}

.title{
    color: white;
    text-align: justify;
}

.is-grouped{
    background-color: rgb(180, 177, 177);
    padding: 5px;
}

.modalE{
    width: 450px;
}

.table-invoice{
    height: 70vh; 
    overflow: auto
}

/* region overflow */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 5px;
}


::-webkit-scrollbar-thumb {
  background: #3298dc; 
  border-radius: 5px;
}


::-webkit-scrollbar-thumb:hover {
  background: rgb(65, 65, 245); 
}

/* fim overflow */
</style>