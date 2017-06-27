<template>
  <v-app>
    <v-navigation-drawer v-if="this.$store.getters.authenticated" persistent v-model="drawer" light>
      <v-list dense>
        <template v-for="item in items" v-bind:key="item.name">
          <v-list-item v-if="!item.divider">
            <v-list-tile :to="item.to">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
          <v-divider dark class="my-4"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar v-if="this.$store.getters.authenticated" class="teal" light>
      <v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Kenosha Parks</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn light icon @click.native.stop="logout">
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-container fluid>
        <transition name="slide">
          <router-view></router-view>
        </transition>
      </v-container>
    </main> 
    <v-footer v-if="this.$store.getters.authenticated" class="teal">
      <span>Developed by <a href="http://appfactoryuwp.com/" class="kick-back" target="_blank">Parkside App Factory</a></span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'logout'
    ])
  },
  data () {
    return {
      drawer: false,
      items: [
        { icon: 'announcement', text: 'Notifications', to: '/#/notifications' }
      ]
    }
  },
  computed: {
    pageTitle: {
      get () {
        return this.$store.state.pageTitle
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.kick-back {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}
</style>

