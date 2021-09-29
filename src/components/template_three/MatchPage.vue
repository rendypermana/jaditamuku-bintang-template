<template>
<div>
    <div class="panganten">
        <h1>HAHAHAHAHAH</h1>
    </div>

    <!-- <div class="separator-2"></div> -->
    <b-modal 
        v-model="modalShow"
        hide-footer 
        centered
        modal-class="modal-bride"
    >
        <div class="bride-data" v-if="brideData !== null">
           <div class="name-bride">
               {{brideData.name}} 
           </div>
            <div class="bride-parents" v-if="brideData.gender == 'female'">
                Daughter of: <br>
                {{brideData.father}} & <br>
                {{brideData.mother}}
            </div>
            <div class="bride-parents" v-else>
                Son of: <br>
                {{brideData.father}} & <br>
                {{brideData.mother}}
            </div>
        </div>
    </b-modal>
</div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        female() {
            let url = 'https://www.instagram.com/helensgn/';
            window.open(url);
        },
        male() {
            let url = 'https://www.instagram.com/ckpanggabean/';
            window.open(url);
        }
    }
}
</script>
<style scoped>

</style>