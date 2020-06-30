<template>
  <v-container>
    <v-toolbar flat>
      <v-toolbar-title>Photography</v-toolbar-title>
      <v-spacer></v-spacer>

      <toolbar-items class="hidden-xs-only">
        <v-btn text>
          <router-link class="black--text" to="/">Home</router-link>
        </v-btn>

        <v-btn text>
          <router-link class="black--text" to="/about">About</router-link>
        </v-btn>

        <v-btn text>
          <router-link class="black--text" to="/contact">Contact</router-link>
        </v-btn>
      </toolbar-items>

      <div class="hidden-sm-and-up">
        <!-- Vue HTML Markup -->

        <template>
          <v-menu>
            <template v-slot:activator="{ on }">
              <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
            </template>

            <v-list class="responsiveMenu">
              <v-list-item>
                <v-list-item-title><router-link to="/">Home</router-link></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title><router-link to="/about">About</router-link></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title><router-link to="/contact">Contact</router-link></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </div>

    </v-toolbar>
  </v-container>
</template>

<script>
  export default {
    name: 'Header',

    data: () => ({

    }),
  }
</script>