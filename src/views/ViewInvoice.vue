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
                    <div style="height: 70vh; overflow: auto">
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
                            <tr v-for="invoice in FullInvoice" :key="invoice.id">
                                <td>{{invoice.Titulo}}</td>
                                <td>{{invoice.Categoria}}</td>
                                <td>{{invoice.Valor}}</td>
                                <td>
                                    {{invoice.Data.split('-')[2]}}/{{invoice.Data.split('-')[1]}}
                                </td>
                                <td v-if="invoice.Pai === 1">
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
                
            </div>

            <div class="column">
                <h1 class="title">Fatura de: {{this.$route.params.date}}</h1>
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
import axios from 'axios'
export default {
    name: 'ViewInvoice',
    created(){
        if(this.$route.params.inv == undefined){
            this.$router.push({name: 'PreviousInvoices'}) 
        }
        axios.get('https://creditcard-h-api.herokuapp.com/faturas/' + this.$route.params.inv).then(res =>{
            this.FullInvoice = res.data
            this.Calculate()
        }).catch((err) =>{
            console.log(err)
        })
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

        }
    },
    methods: {
        async MarkDad(id){
            try{
                await axios.put('https://creditcard-h-api.herokuapp.com/faturas/', {
                    inv: this.$route.params.inv,
                    id: id
                })
                this.Calculate()
            }
            catch(err){
                console.log(err)
                this.$router.push({name: 'PreviousInvoices'})
            }
            
        },

        async AddDad(){
            try{
                await axios.post('https://creditcard-h-api.herokuapp.com/faturas/pai/' + this.$route.params.inv, {
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
                this.error = err.response.data.err
            }
            
        },

        async Calculate(){
            let Total = await axios.get('https://creditcard-h-api.herokuapp.com/faturas/totalizer/' + this.$route.params.inv)
            this.TotalCard = Total.data.TotalCard.toFixed(2)
            this.TotalDad = Total.data.TotalDad.toFixed(2)
            this.TotalMe = Total.data.TotalMe.toFixed(2)
        },

        async UpdateList(){
            if(this.$route.params.inv == undefined){
            this.$router.push({name: 'PreviousInvoices'}) 
            }
            axios.get('https://creditcard-h-api.herokuapp.com/faturas/' + this.$route.params.inv).then(res =>{
                this.FullInvoice = res.data
                this.Calculate()
            }).catch((err) =>{
                console.log(err)
            })
        },
        closeError(){
            this.error = undefined
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


</style>