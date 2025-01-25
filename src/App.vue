<script>
export default {
  data() {
    return {
      isHidden: true,
      left: "",
    }
  },
  methods: {
    updateHidden() {
      this.isHidden = !this.isHidden;
      if(this.isHidden === true) {
        this.left = "-70vw";
      } else {
        this.left = 0;
      }
    },
    isCurrent(location) {
      return this.$route.path == location;
    },
    isCurrentDocs() {
      return this.$route.path.match("/docs");
    }
  }
}
</script>

<template>
  <nav>
    <RouterLink to="/" class="website-logo">
      <img src="./assets/logo_notext.svg" style="padding: 0.3rem;">
    </RouterLink>
    <ul :style="{left: left}">
      <li><RouterLink to="/"  :class="{ current: isCurrent('/') }">Home</RouterLink></li>
      <li><RouterLink to="/docs" :class="{ current: isCurrent('/docs/introduction'), current: isCurrentDocs('/docs/introduction') }">Docs</RouterLink></li>
    </ul>
    <button class="menu-collapse" v-on:click="updateHidden"><i class="bi bi-list"></i></button>
  </nav>
  <main>
    <header class="page-header" v-if="$route.path == '/'">
      <div class="row">
        <img src="./assets/logo.svg" class="mw-25">
      </div>
      <div class="row">
        <h3>Lightweight, accessible, and developer-friendly CSS framework</h3>
      </div>
      <div class="row">
        <RouterLink to="/docs" class="button big primary"><i class="bi bi-book-half"></i>Read the docs</RouterLink>
      </div>
      <div class="row">
        <h4 class="badge information">Current version: <strong>1.0.6</strong></h4>
      </div>
    </header>
    <div class="wrapper">
      <RouterView />
    </div>
  </main>
  <footer>
    <div class="wrapper">
      <hr>
      <p>Created by: <a href="https://github.com/y4ch0">y4ch0</a> @ &copy; 2025 | Licensed under CC BY-SA 4.0</p>
      <p>Website created with: <a href="//vuejs.org">Vue.js</a>, <a href="/">SimplyWCAG.css</a>, <a href="//icons.getbootstrap.com">Bootstrap icons</a></p>
    </div>
  </footer>
</template>

<style scoped>
header {
  background-image: url("./assets/website_bg.png");
  background-position: bottom;
  background-repeat: no-repeat;
  background-color: rgba(255,255,255,0);
  width: 100%;
  min-height: 500px;
  margin-top: -3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding-top: 3rem;
}
header .row {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
img.mw-25 {
  max-width: 25%;
}
h3 {
  font-weight: normal;
  font-size: 1.8rem;
}
@media screen and (max-width: 768px) {
  img.mw-25 {
    max-width: 90%;
  }
  header .row {
    width: 90%;
    flex-direction: column;
    text-align: center;
  }
}
</style>