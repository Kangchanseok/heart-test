<template>
<v-app id="app">
    <v-row class="fill-height overflow-y-auto" dense>
        <v-col
            cols="12"
            lg="4"
            md="6"
            v-for="(item, idx) in items"
            :key="idx"
            no-gutters
        >
            <v-sheet min-height="100" class="fill-height" color="transparent">
                <v-lazy
                    class="fill-height"
                    v-model="item.isActivate"
                    :options="{threshold: .5}"
                >
                    <v-card class="fill-height" rounded hover>
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <v-card-title></v-card-title>
                            <v-card-subtitle
                                ></v-card-subtitle
                            >
                            <v-card-text></v-card-text>
                        </div>
                    </v-card>
                </v-lazy>
            </v-sheet>
        </v-col>
    </v-row>
</v-app>
</template>

<script>
    export default {
        name:'app',
        data() {
            return {
                items: [
                    { title: "title1", subtitle: "subtitle1", text: "text1" },
                    { title: "title2", subtitle: "subtitle2", text: "text2" },
                    { title: "title3", subtitle: "subtitle3", text: "text3" },
                    /* ... */
                    // item must not have "isActivate" key & value
                ],
            }
        },
    }
</script>