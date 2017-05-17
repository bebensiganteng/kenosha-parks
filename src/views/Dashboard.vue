<template>
  <div class="container-fluid">
    <b-navbar toggleable type="inverse" variant="success">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-link class="navbar-brand" to="#">
        <span>Dashboard.vue</span>
      </b-link>
      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar>
          <b-nav-item-dropdown text="Events">
            <b-dropdown-item to="#">Create Topic</b-dropdown-item>
            <b-dropdown-item @click="$root.$emit('show::modal','modal1')">Create Event</b-dropdown-item>
            <b-dropdown-item to="#">Edit Event</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav>

      <b-nav is-nav-bar>
        <b-nav-item-dropdown text="Notifications">
          <b-dropdown-item to="#">Compose Message</b-dropdown-item>
          <b-dropdown-item to="#">jdfkals;</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>

      </b-nav>    
    </b-collapse>
    <b-button class="btn-link" href="">Log out</b-button>
  </b-navbar>

  

  <div class="container">
    <h1>map</h1>

  </div>

  <div class="container">
    <h5>Upcoming events</h5>

    <table class="table table-striped ">
  <thead>
    <tr>
      <th>Event</th>
      <th>Park</th>
      <th>Address</th>
      <th>Contact</th>
      <th>Phone</th>
      <th>Starts</th>
      <th>Ends</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">event1</th>
      <td>park1</td>
      <td>123 44ave kenosha wi</td>
      <td>jfkasl;jdkl;as</td>
      <td>(123)456-7890</td>
      <td>2017-01-21 1:00pm</td>
      <td>2017-01-21 2:00pm</td>
    </tr>
    <tr>
      <th scope="row">event2</th>
      <td>park1</td>
      <td>123 44ave kenosha wi</td>
      <td>jfkasl;jdkl;as</td>
      <td>(123)456-7890</td>
      <td>2017-01-21 1:00pm</td>
      <td>2017-01-21 2:00pm</td>
    </tr>
    <tr>
      <th scope="row">event3</th>
      <td>park1</td>
      <td>123 44ave kenosha wi</td>
      <td>jfkasl;jdkl;as</td>
      <td>(123)456-7890</td>
      <td>2017-01-21 1:00pm</td>
      <td>2017-01-21 2:00pm</td>
    </tr>
  </tbody>
</table>
  </div>


</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.btn-link {
  color: black;
  float: right;
}

.container-fluid {
  background-color: lightgray;
  height: 100vh;
  padding: 0;
}

.container {
  background-color: white;
  padding: 15px;
  margin-top: 30px;
}
</style>
