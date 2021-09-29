<template>
<div class="first-page">
    <div class="container">
        <div class="invite-first">
            <div class="title-left-first">
                <p v-if="guest">Dear, {{guest}}</p>
                <div class="invitation">You're Invited!</div>
                <p>The Wedding Celebration of</p>
                 <div class="text-bride" data-aos="fade-up" data-aos-duration="1000">
                    Bintang & Edward
                </div>
            </div>
            <div class="first-video">
                <video 
                    :autoplay="autoplay"
                    id="myVideo"
                    :controls="control"
                    class="banteng-video"
                    v-if="videoBg"
                >
                    <source :src="videoo" type="video/mp4">
                </video>
                <div class="banteng-video" v-else>
                    <p>Prewedding Bintang & Edward</p>
                    <img src="../../assets/template-three/images/capture.png">
                </div>
                <span><b-icon icon="play-fill" @click="playVid" v-if="playIcon"></b-icon></span>
            </div>
            <div class="button-first" >
                <div class="btn-open" @click="openInvitation">
                    <span><b-icon icon="heart-fill"></b-icon></span>
                    Open Invitation
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import bg_vid from '@/assets/template-three/video/cinematik.mp4';
export default {
    props: ["dataUser"],
    data () {
        return {
            guest: null,
            videoBg: false,
            videoo: bg_vid,
            control: false,
            playIcon: true,
            autoplay: false,
        }
    },
    mounted() {
        const guest = this.$route.query.to;
        const coba = guest.split(/[.,\/ -]/)
        var i, arr = []; 
        for(i = 0; i < coba.length; i++){
            const name = coba[i].charAt(0).toUpperCase() + coba[i].substring(1);
            arr.push(name);
        }
        const str = arr.toString().replace(/^[, ]+|[, ]+$|[, ]+/g, " ").trim();
        this.guest = str;
    },
    methods: {
        openInvitation() {
            this.$emit('openPage', 'invitation-page');
            this.pauseVid();
        },
        playVid() {
            this.videoBg = true;
            const vid = document.getElementById("myVideo");
            this.control = true;
            this.playIcon = !this.playIcon;
            this.autoplay = true;
            vid.play();
        },
        pauseVid() {
            const vid = document.getElementById("myVideo");
            vid.pause();
        }
    },
}
</script>
<style scoped>
.invite-three{
    position: fixed;
    bottom: 215px;
    text-align: center;
    margin-left: 0;
    width: 100%;
}
</style>