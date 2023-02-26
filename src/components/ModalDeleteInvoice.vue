<template>
  <div :class="{ modal: true, 'is-active': ShowModal }">
    <div class="modal-background"></div>
    <div class="modal-card modalE">
      <header class="modal-card-head">
        <p class="modal-card-title">Tem certeza que deseja exluir?</p>
        <button @click="$emit('showModal')" class="delete" aria-label="close"></button>
      </header>
      <footer class="modal-card-foot columns">
        <div class="column">
          <button @click="$emit('showModal')" class="button">Cancelar</button>
        </div>

        <div class="column is-6 is-offset-4">
          <button @click="$emit('removeInvoice')" class="button is-danger">
            Excluir
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
    props: ['ShowModal']
};
</script>

<style>
</style>