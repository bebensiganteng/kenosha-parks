<template>
  <v-app>
    <v-navigation-drawer v-if="this.$store.getters.authenticated" persistent v-model="drawer" light>
      <v-list dense>
        <template v-for="item in items">
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
          <v-divider dark v-else="item.divider" class="my-4" />
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar v-if="this.$store.getters.authenticated" class="teal">
      <v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Kenosha Farmers' Market &mdash; {{ pageTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn light icon @click.native.stop="logout">
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-container fluid>
        <transition name="slide">
          <router-view />
        </transition>
      </v-container>
    </main> 
    <v-footer v-if="this.$store.getters.authenticated" class="teal">
      <span>© 2017</span>
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
      drawer: true,
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

</style>

