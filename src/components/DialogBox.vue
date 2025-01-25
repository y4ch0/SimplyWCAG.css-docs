<template>
    <div v-if="visible" class="dialog-overlay" @click.self="closeDialog">
        <div class="dialog-box">
            <header class="dialog-header">
                <h3>{{ title }}</h3>
            </header>
            <div class="dialog-content">
                <p>{{ content }}</p>
            </div>
            <footer class="dialog-footer">
                <button v-if="type === 'alert'" @click="emitResult(true)" class="button primary"><i class="bi bi-check-circle-fill"></i>OK</button>
                <button v-if="type === 'confirmation'" @click="emitResult(true)" class="button primary"><i class="bi bi-check-circle-fill"></i>Potwierdzam</button>
                <button v-if="type === 'confirmation'" @click="emitResult(false)" class="button secondary"><i class="bi bi-x-circle-fill"></i>Odrzucam</button>
            </footer>
        </div>
    </div>
</template>
  
<script>
  export default {
    name: "DialogBox",
    props: {
      visible: {
        type: Boolean,
        required: true,
      },
      title: {
        type: String,
        default: "Dialog Title",
      },
      content: {
        type: String,
        default: "This is the dialog content.",
      },
      type: {
        type: String,
        default: "alert", // Can be 'alert' or 'confirmation'
      },
    },
    emits: ["update:visible", "result"],
    methods: {
      emitResult(value) {
        this.$emit("result", value); // Emit true/false based on user action
        this.closeDialog();
      },
      closeDialog() {
        this.$emit("update:visible", false); // Close dialog
      },
    },
  };
</script>