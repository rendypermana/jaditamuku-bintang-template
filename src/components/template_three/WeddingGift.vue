<template>
<div>
<div class="gift-three">
    <div class="container">
        <div class="rspv">
            <div class="title">RSVP</div>
            <p>
                We look forward to celebrate our wedding day with you. Please confirm your attendance, to help us estimate the total number of guests:
            </p>
            <div class="mess" v-if="rsvp">RSVP has been send</div>
            <div class="form-rsvp" v-else>
                <div class="mess" v-if="message">RSVP has been send</div>
                <div class="form-group">
                    <input 
                        type="text" 
                        class="form-control rspv-input"  
                        maxlength="250"
                        placeholder="Full Name"
                        v-model="param.name"
                    >
                    <textarea 
                        class="form-control rspv-input"  
                        maxlength="250"
                        placeholder="Address"
                        v-model="param.address"
                    >
                    </textarea>
                    <b-form-group v-slot="{ ariaDescribedby }" class="radio-rspv">
                        <b-form-radio 
                            class="rad-rspv" 
                            :aria-describedby="ariaDescribedby" 
                            name="some-radios" 
                            value="1"
                            v-model="hadir"
                            @click="resetHadir"
                        >
                            Yes, I will be there
                        </b-form-radio>
                        <b-form-radio 
                            class="rad-rspv"  
                            :aria-describedby="ariaDescribedby" 
                            name="some-radios" 
                            value="0"
                            v-model="hadir"
                        >
                            Sorry, I can’t come
                        </b-form-radio>
                        <input 
                            v-if="hadir == 1"
                            type="number" 
                            class="form-control rspv-input"  
                            maxlength="250"
                            placeholder="number of guests"
                            v-model="param.attendance"
                        >
                    </b-form-group>
                    <div class="rsvp-submit">
                        <button 
                            class="btn btn-rspv" 
                            @click="sendRsvp" 
                            v-if="!loading"
                            :disabled="disable"

                        >
                            Sent
                        </button>
                        <button class="btn btn-rspv" v-else>Loading...</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="gift-icon">
            <img src="../../assets/template-three/images/gift-box.png" />
        </div>
        <div class="title" data-aos="fade-up">WEDDING GIFT</div>
        <div class="text-gift-three">
            Your kind and blessing can be sent to this information below:
            <div class="small">“Click icon to see the details”</div>
            <div class="ico-gift-br">
                <b-row>
                    <b-col>
                        <div class="icon-gift flo-left" @click="openWoman" data-aos="fade-right">
                            <img src="../../assets/template-three/images/woman.png" />
                        </div>
                    </b-col>
                    <b-col>
                        <div class="icon-gift" @click="openMan" data-aos="fade-left">
                            <img src="../../assets/template-three/images/man.png" />
                        </div>
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
</div>

<!-- modal1 -->
<b-modal 
    v-model="womanModal"
    hide-footer 
    centered
    class="modal-gift woman"
>
    <div class="konten-modal">
        <div class="bank-img">
            <img src="../../assets/template-three/images/bca.png" />
        </div>
        <div class="modal-name">BINTANG MAHARANI</div>
        <div class="qr-bank">
            <img src="../../assets/template-three/images/qr-bca1.png" />
        </div>
        <div class="account-number">BCA - {{noRek1}} </div>
        <div class="form-copy">
            <b-row>
                <b-col cols="8">
                    <div class="rek-area" v-if="!copy1">{{noRek1}}</div>
                     <div class="rek-area" v-else>Number has been copied!</div>
                </b-col>
                <b-col>
                    <b-button @click="copyCode(noRek1)">COPY</b-button>
                </b-col>
            </b-row>
        </div>
    </div>
</b-modal>

<!-- modal2 -->
<b-modal 
    v-model="manModal"
    hide-footer 
    centered
    class="modal-gift woman"
>
    <div class="konten-modal">
        <div class="bank-img man-acc">
            <img src="../../assets/template-three/images/bca.png" />
        </div>
        <div class="modal-name">EDWARD OCTOVIANUS SITOMPUL</div>
        <div class="qr-bank">
            <img src="../../assets/template-three/images/qr-bca2.png" />
        </div>
        <div class="account-number man-acc">BCA - {{noRek2}} </div>
        <div class="form-copy">
            <b-row>
                <b-col cols="8">
                    <div class="rek-area" v-if="!copy2">{{noRek2}}</div>
                     <div class="rek-area" v-else>Number has been copied!</div>
                </b-col>
                <b-col>
                    <b-button @click="copyCode(noRek2)">COPY</b-button>
                </b-col>
            </b-row>
        </div>
    </div>
</b-modal>


</div>
</template>

<script>
import { RepositoryAPI } from '@/api/api_repository';
const callApi  = RepositoryAPI.get('frontend_request');
export default {
    data() {
        return {
            womanModal: false,
            manModal: false,
            noRek1: "7060174398",
            noRek2: "5345166057",
            copy1: false,
            copy2: false,
            param:{
                attendance: "",
                name: "",
                address: "",
                id_user: "",
            },
            hadir: "",
            loading: false,
            message: null,
            disable: true,
            rsvp: null,

        }
    },
    created() {
        this.fetchData();
        this.checkLocalRsvp();
    },
    methods: {
        openWoman() {
            this.womanModal = true;
        },
        openMan() {
            this.manModal = true;
        },
        copyCode(val){
            if(val == this.noRek1){
                this.copy1 = true;
                navigator.clipboard.writeText(val);
                setTimeout(() => { 
                    this.copy1 = false;
                }, 1000)
            }else{
                this.copy2 = true;
                navigator.clipboard.writeText(val);
                setTimeout(() => { 
                    this.copy2 = false;
                }, 1000)
            }
            
        },
        async fetchData() {
            try {
                const data = await callApi.getFastUser('bintangdanedward');
                this.param.id_user = data.data.response.id;
            } catch( error ) {
                console.log( error );
            }
        },
        async sendRsvp() {
            if(this.hadir == 0) {
                this.param.attendance = 0;
            }else if(this.hadir == 1 && this.param.attendance == ""){
                this.param.attendance = 1;
            }
            this.loading = true;
            try {
                const data = await callApi.postRsvp(this.param);
                if (data.data.success = true) {
                    this.message = data.data.message;
                    this.loading = false;
                    localStorage.setItem('rsvp', true);
                    this.rsvp = true;
                    this.resetData();
                }
            } catch( error ) {
                console.log( error );
                this.loading = false;
            }
        },
        resetData() {
            this.param.attendance = 0;
            this.param.name = "";
            this.param.address = "";
        },
        regexNumber(value) {
            const numberPattern = /\d+/g;
            return value.match(numberPattern);
        },
        resetHadir() {
            this.param.attendance = "";
        },
        checkLocalRsvp() {
            const localRsvp = localStorage.getItem('rsvp');
            if (!localRsvp || localRsvp == '' || localRsvp == null || localRsvp == undefined ){
                localStorage.setItem('rsvp', false);
                this.rsvp = false;
            } else {
                this.rsvp = true;
            }
        }
    },
    watch: {
        param: {
            deep: true,
            handler: function(val){
                if(val.name !== "" && val.address !== "" ){
                    this.disable = false;
                } else {
                    this.disable = true;
                }
            }
        },
        rspv: function(val){
            console.log(val)
        }
    }
}
</script>
<style scoped>
.mess {
    text-align: center;
    padding: 10px;
    background: #07FF7C;
    color: #fff;
    margin-bottom: 15px;
}
.num{
    color: #de1000;
}
.form-rsvp label {
    font-size: 16px;
}
</style>