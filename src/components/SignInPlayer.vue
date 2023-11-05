<template>
    <v-dialog max-width="600px" v-model="dialog">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on">Zapisz zawodnika</v-btn>
        </template>
        <v-form ref="form">
            <v-card>
                <v-card-title>Zapisz zawodnika na turniej</v-card-title>
                <v-divider></v-divider>
                <v-card-text class="pt-5 pb-0">
                    <v-text-field label="Zawodnik" v-model="title" outlined color="indigo"
                        :rules="inputRules"></v-text-field>
                    <v-text-field label="Turniej" v-model="title" outlined color="indigo"
                        :rules="inputRules"></v-text-field>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-action class="d-flex justify-end pa-3">
                    <v-btn class="mr-3" color="indigo" text @click="dialog = false">Anuluj</v-btn>
                    <v-btn class="indigo white--text" @click="validate">Zapisz zawodnika na turniej</v-btn>
                </v-card-action>
            </v-card>
        </v-form>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            dateMenu: false,
            title: '',
            info: '',
            dueDate: null,
            inputRules: [
                v => v.length > 0 || 'Please provide the input'
            ]
        }
    },
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.$emit('addedProject', this.title);
                this.dialog = false;
            }
        }
    }
}
</script>