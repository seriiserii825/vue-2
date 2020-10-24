<template>
  <header>
    <nav>
      <ul>
        <router-link tag="li" exact to="/teams">
          <base-link>Teams</base-link>
        </router-link>
        <router-link tag="li" exact to="/users">
          <base-link>Users</base-link>
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;

  &.router-link-active a {
    background-color: darken(#f1a80a, 5%);
  }
}

</style>
