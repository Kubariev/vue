<template>
  <button type="button" class="general-btn general-btn_search" @click="onClick">
    {{ msg }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    msg: String,
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style>
.general-btn {
  font-family: "Montserrat", sans-serif;
  padding: 10px 20px;
  color: #fff;
  background-color: #f65261;
  border: 0;
  cursor: pointer;
  text-transform: uppercase;
}

.general-btn_search {
  border-radius: 5px;
  font-size: 120%;
  width: 20%;
}
</style>
