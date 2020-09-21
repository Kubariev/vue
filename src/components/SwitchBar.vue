<template>
  <div class="general-switch">
    <span v-if="switchName" class="general-switch_title">{{ switchName }}</span>
    <div class="general-switch_btn-group">
      <button
        v-for="(option, index) in options"
        :key="option.id"
        type="button"
        :class="{
          'general-btn general-btn_switch': true,
          'general-btn_active': option.selected,
        }"
        @click="changeSort(index)"
      >
        {{ option.text }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SwitchBar",
  props: {
    switchName: String,
    options: {
      type: Array,
      required: true,
    },
  },

  methods: {
    changeSort(index) {
      this.options.forEach((option) => (option.selected = false));
      this.options[index].selected = true;

      this.$emit('changeSort', this.options[index].id);
    },
  },
};
</script>

<style>
.general-switch {
  display: flex;
  align-items: center;
  flex-flow: row wrap;
}

.general-switch_title {
  font-family: "Montserrat", sans-serif;
  color: #fff;
  line-height: 38px;
  margin: 0 20px 0 0;
  opacity: 0.9;
  text-transform: uppercase;
  vertical-align: middle;
}

.general-switch_btn-group {
  min-width: 150px;
  min-height: 40px;
  opacity: 0.9;
}

.general-btn_switch:not(.general-btn_active) {
  background: rgba(33, 33, 33, 0.6);
}

.general-switch .general-btn_switch:first-child {
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}

.general-switch .general-btn_switch:last-child {
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
