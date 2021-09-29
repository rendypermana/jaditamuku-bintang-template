<template>
    <div class="first-page" id="hero">
        <!-- <div class="container text-center title-center" data-aos="fade-up">
            <span>Our Wedding</span>
            <h1 class="title">Nur Laela & Putra</h1>
            <button class="btn btn-invite" @click="openInvitation">Open Invitation</button>
        </div> -->
        <div class="container text-center title-center " data-aos="fade-up">
            <div class="no-photo">
                <span>Our Wedding</span>
                <h1 class="title">Laela & Fither</h1>
                <button class="btn btn-invite" @click="openInvitation">Open Invitation</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    methods:{
        openInvitation(){
            this.$router.push({name: 'MainPage'})
        }
    }
}
</script>
<style scoped>

</style>