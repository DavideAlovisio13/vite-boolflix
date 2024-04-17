<template>
  <header>
    <h1>{{ title }}</h1>
    <nav>
      <ul>
        <li v-for="item in menuItems" :key="item.id">{{ item.label }}</li>
      </ul>
    </nav>
    <div>
        
    </div>
  </header>
</template>

<script>
import { store } from "../store/store.js";
export default {
  data() {
    return {
      title: "My App",
      store,
      menuItems: [
        { id: 1, label: "Home" },
        { id: 2, label: "About" },
        { id: 3, label: "Contact" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #f2f2f2;
  padding: 20px;

  h1 {
    margin: 0;
  }

  nav ul {
    list-style-type: none;
    padding: 0;
  }

  nav li {
    display: inline-block;
    margin-right: 10px;
  }
}
</style>
