<template>
    <div class="heroBlock">
        <v-carousel cycle hide-delimiters>
            <v-carousel-item v-for="item in items" :key="item.id" :src="item.src" reverse-transition="fade-transition"
                transition="fade-transition">
                <v-row class="title fill-height hidden-xs-only" align="center" justify="center">{{ item.title }}</v-row>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
    export default {
        name: "Hero",
        data() {
            return {
                items: [{
                        id: 1,
                        src: require("../assets/images/img-carousel1.jpg"),
                        title: "We are creative"
                    },
                    {
                        id: 2,
                        src: require("../assets/images/img-carousel2.jpg"),
                        title: "We are hard worker"
                    },
                    {
                        id: 3,
                        src: require("../assets/images/img-carousel3.jpg"),
                        title: "We are professional"
                    }
                ]
            };
        }
    };
</script>