<template>
    <v-container>
        <v-footer padless>
            <v-card flat tile class="text-center">
                <v-card-text>
                    <v-btn v-for="icon in icons" :key="icon" class="mx-6" icon>
                        <v-icon size="30px">{{ icon }}</v-icon>
                    </v-btn>
                </v-card-text>

                <v-card-text class="pt-0">
                    Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum.
                    Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur
                    dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada.
                    Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel
                    diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text>
                    {{ new Date().getFullYear() }} — <strong>Photography Vuetify Website</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-container>
</template>

<script>
    export default {
        name: 'Footer',
        data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-instagram',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-github',
        'mdi-youtube'
      ]
    })
    }
</script>