<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-left">Good morning, Jhon</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link mx-3" to="/">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link mx-3" to="/user_analytics">User analytics</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link mx-3" to="/global_analytics">Global analytics</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
        data() {
            return {
            }
        }
    }
</script>

<style>

</style>
