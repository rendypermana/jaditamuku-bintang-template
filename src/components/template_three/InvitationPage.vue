<template>
    <div class="invitation-page">
        <hero-banner></hero-banner>
        <couples></couples>
        <couple-simple></couple-simple>
        <the-day></the-day>
        <count-down></count-down>
        <!-- <story-us></story-us> -->
        <wedding-gift></wedding-gift>
        <!-- <count-down></count-down> -->
        <moment-gallery></moment-gallery>
        <wedding-wishes></wedding-wishes>
        <footer-page></footer-page>
        <div class="play-sound">
            <b-icon icon="pause-fill" style="width: 25px; height: 30px;" @click="soundPause" v-if="audios.isPlaying"></b-icon>
            <b-icon icon="play-fill" style="width: 25px; height: 30px;" @click="soundPlay" v-else></b-icon> 
        </div>
        <!-- <b-modal 
            v-model="modalShow"
            hide-footer 
            centered
            class="modal-protocol"
        >
            <div class="protocol-img">
                <img src="../../assets/template-three/images/protocol.png" />
            </div>
        </b-modal> -->
        <protocol
            :showing="modalShow"
            @closeProtocol="closeModal"
        >
        </protocol>
    </div>
</template>
<script>
import HeroBanner from "@/components/template_three/HeroBanner";
import Couples from "@/components/template_three/CouplePage";
import MatchPage from "@/components/template_three/MatchPage";
import TheDay from "@/components/template_three/TheDay";
import CountDown from "@/components/template_three/CountDown";
import MomentGallery from "@/components/template_three/MomentGallery";
import StoryUs from "@/components/template_three/StoryUs";
import WeddingWishes from "@/components/template_three/WeddingWishes";
import FooterPage from "@/components/template_three/Footer";
import WeddingGift from "@/components/template_three/WeddingGift";
import CoupleSimple from "@/components/template_three/CoupleSimple";
import Protocol from "@/components/template_three/Protocol";
import sound from '@/assets/template-three/sound/lagu.mp3'
export default {
    data() {
        return {
            currentTime: '',
            musik: true,
            audios: {
                id: 'musikkita',
                name: 'Musik Kita',
                file: new Audio(sound),
                isPlaying: true
            },
            modalShow: false,
            modalUdah: false,
        }
    },
    components: {
        HeroBanner,
        Couples,
        MatchPage,
        TheDay,
        CountDown,
        MomentGallery,
        WeddingWishes,
        FooterPage,
        StoryUs,
        WeddingGift,
        CoupleSimple,
        Protocol,
    },
    created(){
        this.audios.file.loop = true;
        this.audios.file.play();
        this.audios.isPlaying = true;
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods:{
        soundPlay(){
            this.audios.file.loop = true
            this.audios.isPlaying = true
            this.audios.file.play();
        },
        soundPause(){
            this.audios.file.loop = true
            this.audios.isPlaying = false
            this.audios.file.pause();
        },
        closeModal() {
            this.modalShow = false;
        },
        handleScroll (event) {
            if (this.modalUdah == false) {
                this.modalShow = true;
                this.modalUdah = true;
            }
        },
    },
}
</script>
<style scoped>
.play-sound {
    background-color: #fff;
    bottom: 40px;
    right: 15px;
    box-shadow: -1px 3px 7px rgb(0 0 0 / 27%);
    z-index: 999;
    position: fixed;
    padding: 8px 13px;
    border-radius: 100%;
}
</style>