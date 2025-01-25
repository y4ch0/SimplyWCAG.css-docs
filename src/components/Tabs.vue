<template>
    <div class="tabs-box">
      <ul class="tabs">
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ current: activeTab === index }"
          @click="changeTab(index, $event)"
        >
          <a href="#" class="tab-button">{{ tab.label }}</a>
        </li>
      </ul>
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        v-show="activeTab === index"
        class="content"
        v-html="tab.content"
      ></div>
    </div>
</template>
  
<script>
  export default {
    name: "Tabs",
    props: {
      tabs: {
        type: Array,
        required: true,
        default: () => [],
      },
    },
    data() {
      return {
        activeTab: 0,
      };
    },
    methods: {
      changeTab(index, event) {
        event.preventDefault();
        this.activeTab = index;
      },
    },
  };
</script>