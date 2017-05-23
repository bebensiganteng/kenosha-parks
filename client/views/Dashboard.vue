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
            <b-dropdown-item @click="$root.$emit('show::modal','modal3')">Create Topic</b-dropdown-item>
            <b-dropdown-item @click="$root.$emit('show::modal','modal1')">Create Event</b-dropdown-item>
            <b-dropdown-item to="#">Edit Event</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav>

      <b-nav is-nav-bar>
        <b-nav-item-dropdown text="Notifications">
          <b-dropdown-item @click="$root.$emit('show::modal','modal2')">Compose Message</b-dropdown-item>
          <b-dropdown-item to="#">jdfkals;</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>

      </b-nav>    
    </b-collapse>
    <b-button class="btn-link" @click="logout">Log out</b-button>
  </b-navbar>


<!-- Create Event Modal -->
  <b-modal id="modal1" title="Create Event" >
    
    <div class="form-group row">
      <label for="name" class="col-3 col-form-label">Name</label>
        <div class="col">
          <input class="form-control" type="text" placeholder="Event Name" id="name">
        </div>
    </div>

    <div class="form-group row">
      <label for="description" class="col-3 col-form-label">Description</label>
        <div class="col">
          <textarea class="form-control" type="text" placeholder="Event Description" id="description"></textarea>
        </div>
    </div>

    <div class="form-group row">
      <label for="start" class="col-3 col-form-label">Start</label>
        <div class="col">
          <input class="form-control" type="text" placeholder="Start date and time" id="start">
        </div>
    </div>

    <div class="form-group row">
      <label for="end" class="col-3 col-form-label">End</label>
        <div class="col">
          <input class="form-control" type="text" placeholder="End date and time" id="end">
        </div>
    </div>

    <div class="form-group row">
      <label for="registration" class="col-3 col-form-label">Registration</label>
        <div class="col">
          <select class="form-control" id="registration">
            <option selected>Select Registration</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
    </div>

    <div class="form-group row">
      <label for="age-group" class="col-3 col-form-label">Age Group</label>
        <div class="col">
          <select class="form-control" id="age-group">
            <option selected>Select Age Group</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
    </div>

    <div class="form-group row">
      <label for="park" class="col-3 col-form-label">Park</label>
        <div class="col">
          <select class="form-control" id="park">
            <option selected>Select Park</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
    </div>

    <div class="form-group row">
      <label for="address" class="col-3 col-form-label">Address</label>
        <div class="col">
          <input class="form-control" type="text" placeholder="Event Address" id="address">
        </div>
    </div>
    
    <div class="form-group row">
      <label for="area" class="col-3 col-form-label">Area</label>
        <div class="col">
          <select class="form-control" id="area">
            <option selected>Select Indoors or Outdoors</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
    </div>

    <div class="form-group row">
      <label for="price" class="col-3 col-form-label">Price</label>
        <div class="col">
          <input class="form-control" type="text" placeholder="9.99" id="price">
        </div>
    </div>

    <div class="form-group row">
      <label for="organization" class="col-3 col-form-label">Organization</label>
        <div class="col">
          <input class="form-control" type="text" placeholder="Organization Name" id="organization">
        </div>
    </div>

    <div class="form-group row">
      <label for="contact" class="col-3 col-form-label">Primary Contact</label>
        <div class="col">
          <input class="form-control" type="text" placeholder="Name" id="contact">
        </div>
        <div class="col">
          <input class="form-control" type="text" placeholder="Phone">
        </div>
    </div>
    
  </b-modal>

  <!-- Compose Message Modal -->
  <b-modal id="modal2" title="Compose Message" >
    
    <div class="form-group">
      <label for="title">Title</label>
      <input class="form-control" type="text" placeholder="Enter a title" id="title">
    </div>

    <div class="form-group">
      <label for="message">Message</label>
      <textarea class="form-control" type="text" placeholder="Enter a message" id="message"></textarea>
    </div>

    <div class="form-group">
      <label for="topic">Topic</label>
          <select class="form-control" id="topic">
            <option selected>Select Indoors or Outdoors</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

  </b-modal>

    <!-- Create Topic Modal -->
  <b-modal id="modal3" title="Create Topic" >
    
    <p>Based on the publish/subscribe model, topic messaging allows you to send a message to multiple
      devices that have opted in to a particular topic. </p>
    <p>You compose topic messages as needed, and
      we'll handle routing and delivering the message reliably to the right devices.
    </p>

    <div class="alert alert-warning">
      <strong>Only letters allowed.</strong> Spaces will be replaced with an underscore. Numbers
      and special characters will be removed.
    </div>

    <div class="form-group row">
      <label for="name" class="col-3 col-form-label">Name</label>
        <div class="col">
          <input class="form-control" type="text" placeholder="Event Name" id="name">
        </div>
    </div>

    <div class="form-group row">
      <label for="description" class="col-3 col-form-label">Description</label>
        <div class="col">
          <textarea class="form-control" type="text" placeholder="Event Description" id="description"></textarea>
        </div>
    </div>

  </b-modal>
  

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
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'logout'
    ])
  }
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

.col-3 {
  text-align: right;
}

.row {
  margin-bottom: 20px;
}

</style>
