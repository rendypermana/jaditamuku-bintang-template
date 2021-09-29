<template>
<div>
    <div class="wishes-img">
        <!-- <img src="../../assets/template-three/images/hi_res/wishes.jpg" /> -->
        <b-carousel
            id="carousel-1"
            ref="myCarousel"
            fade
            :interval="3000"
            background="#ababab"
            style="text-shadow: 1px 1px 2px #333;"
        >
            <b-carousel-slide :img-src="slide1"></b-carousel-slide>
            <b-carousel-slide :img-src="slide2"></b-carousel-slide>
            <b-carousel-slide :img-src="slide3"></b-carousel-slide>
            <b-carousel-slide :img-src="slide4"></b-carousel-slide>
            <b-carousel-slide :img-src="slide5"></b-carousel-slide>
            <b-carousel-slide :img-src="slide6"></b-carousel-slide>
            <b-carousel-slide :img-src="slide7"></b-carousel-slide>
            <b-carousel-slide :img-src="slide8"></b-carousel-slide>
        </b-carousel>
    </div>
    <div class="wishes-two">
        <div class="container">
            <div class="wishes-two-title">
                <h2>WEDDING WISHES</h2>
                <h5 class="font-hipster">Write a message for us</h5>
            </div>
            <div class="form-wishes">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control wishes-input" v-model="param.nama" maxlength="250">
                </div>
                <div class="form-group">
                    <label>Your wishes</label>
                    <textarea class="form-control wishes-input" v-model="param.pesan" maxlength="250"></textarea>
                </div>
                <div class="btn-submit-wishes">
                    <button class="btn btn-wishes" v-if="loadingKirim">Loading...</button>
                    <button class="btn btn-wishes" @click="sendUcapan" :disabled="!buttonActive" v-else>Submit</button>
                </div>
            </div>
            <div class="text-center load-two" v-if="loadingData">
                <b-spinner label="Spinning"></b-spinner>
            </div>
            <div class="wishes-list-two" v-else>
                <div class="wish-two" v-for="(item, index) in ucapanList" :key="index">
                    <div class="name">{{item.nama}}</div>
                    <div class="wishes">{{item.pesan}}</div>
                </div>
            </div>
            <div class="load-data text-center" v-if="ucapanData.last_page > 1 && arrPage !== ucapanData.last_page">
                <div class="load-loed load-two" v-if="loadingMore">
                    <b-spinner label="Spinning"></b-spinner>
                </div>
                <button class="btn btn-wishes" @click="loadMore" v-else>Load More</button>
            </div>
        </div>
        <div class="thankyou">
            <div class="thanks">Thank You</div>
            <div class="bride">Bintang & Edward</div>
        </div>
    </div>
</div>
</template>
<script>
import slide1 from '@/assets/template-three/images/hi_res/wishes.jpg'
import slide2 from '@/assets/template-three/images/hi_res/wishes2.jpg'
import slide3 from '@/assets/template-three/images/hi_res/wishes3.jpg'
import slide4 from '@/assets/template-three/images/hi_res/wishes4.jpg'
import slide5 from '@/assets/template-three/images/hi_res/wishes5.jpg'
import slide6 from '@/assets/template-three/images/hi_res/wishes6.jpg'
import slide7 from '@/assets/template-three/images/hi_res/wishes7.jpg'
import slide8 from '@/assets/template-three/images/hi_res/wishes8.jpg'
import { RepositoryAPI } from '@/api/api_repository';
const callApi  = RepositoryAPI.get('frontend_request');
export default {
    data() {
        return {
            ucapanList: [],
            ucapanData:[],
            modalShow: false,
            param:{
                kehadiran: "",
                hubungan: "",
                nama: "",
                pesan: "",
                id_user: "",
            },
            buttonActive: false,
            message: "",
            loadingKirim: false,
            loadingData: false,
            loadingMore: false,
            arrPage: 1,
            idUser: null,
            slide1: slide1,
            slide2: slide2,
            slide3: slide3,
            slide4: slide4,
            slide5: slide5,
            slide6: slide6,
            slide7: slide7,
            slide8: slide8,
        }
    },
    mounted(){
       this.fetchData();
    },
    methods:{
        async fetchData() {
            try {
                const data = await callApi.getFastUser('bintangdanedward');
                this.indexData(data.data.response.id);
                this.param.id_user = data.data.response.id;
                this.idUser = data.data.response.id;
            } catch( error ) {
                console.log( error );
            }
        },

        async sendUcapan() {
            this.loadingKirim = true
            try {
                const data = await callApi.postWish(this.param);
                if (data.data.success = true) {
                    this.loadingKirim = false;
                    this.modalShow = false;
                    this.message = data.data.message ;
                    this.resetData()
                    this.fetchData()
                }
            } catch( error ) {
                console.log( error )
                this.loadingKirim = false;
            }
        },

        resetData() {
            this.param.kehadiran = "";
            this.param.nama = "";
            this.param.hubungan = "";
            this.param.pesan = "";
        },

        async indexData(id) {
            try {
                this.loadingData = true;
                const data = await callApi.getWish(id);
                if (data.status == 200) {
                    this.loadingData = false;
                    this.ucapanData = data.data.response;
                    this.ucapanList = data.data.response.data;
                } else {
                    this.message = 'Gagal load data';
                }
            } catch(error) {
                console.log(error);
                this.loadingData = false;
            }
        },

        async loadMore() {
            try {
                this.loadingMore = true;
                this.arrPage += 1;
                const data = await callApi.loadMore(this.idUser, this.arrPage);
                if (data.status == 200) {
                    this.ucapanData = data.data.response;
                    data.data.response.data.forEach((idx) => {
                        this.ucapanList.push(idx);
                    });
                    this.loadingMore = false;
                } else {
                    this.message = 'Gagal load data';
                }
            } catch(error) {
                console.log(error);
            }
        }

    },
    watch:{
        param:{
            deep: true,
            handler(val){
                if(val.nama !== "" && val.pesan !== "" && val.nama.length > 3 && val.pesan.length > 5){
                    this.buttonActive = true
                }else{
                    this.buttonActive = false
                }
            }
        }
    }

}
</script>