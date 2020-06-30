<template>
    <v-content>
        <div class="staticHero">
            <v-img src="../assets/images/img14.jpg">
                <v-row align="end" class="lightbox white--text pa-2 fill-height">
                    <v-col>
                        <v-container>
                            <div class="headline">Contact Us</div>
                        </v-container>
                    </v-col>
                </v-row>
            </v-img>
        </div>

        <ContactForm />

        <div class="googlemap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9401.985310595883!2d76.51753711960308!3d9.589594453343834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062ba08ee71797%3A0x40588937db593118!2sCentral%20Junction%2C%20Thirunakara%20Maidanam%2C%20Kottayam%2C%20Kerala%20686001!5e0!3m2!1sen!2sin!4v1593484383153!5m2!1sen!2sin" 
            width="100%" height="450"></iframe>
        </div>

    </v-content>
</template>

<script>
import ContactForm from '../components/ContactForm'
    export default {
        name: 'Contact',
        components : {
            ContactForm
        },
        data() {
            return {

            }
        }
    }
</script>