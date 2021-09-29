<template>
<div class="couple-simple">
    <div class="container">
        <div class="capsuled">
            <div class="section-row">
                <b-row>
                    <b-col>
                        <div class="simple-left-top">
                            <h3>Bintang Maharani Hutabarat, S.AB</h3>
                            <p>
                                Daughter of<br>
                                Mr. Tulus Hutabarat &<br> Mrs. Eugenia Siahaan
                            </p>
                            <div class="ige">
                                <span>bintangmhrn</span>
                                <img 
                                    src="../../assets/template-three/images/instagram_abu.png" 
                                    @click="igeCw"
                                />
                            </div>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="simple-right-top">
                            <img src="../../assets/template-three/images/pengantin_wanita.jpg" />
                        </div>
                    </b-col>
                </b-row>
            </div>
            <div class="section-row">
                <b-row>
                    <b-col>
                        <div class="simple-right-bottom">
                            <img src="../../assets/template-three/images/pengantin_pria.jpg" />
                        </div>
                    </b-col>
                    <b-col>
                        <div class="simple-left-bottom">
                            <h3>Edward Octovianus Sitompul, S.E</h3>
                            <p>
                                Son of<br>
                                Mr. Syamsir Sitompul &<br> Mrs. Nurmaida Hulu
                            </p>
                            <div class="ige">
                                <img 
                                    src="../../assets/template-three/images/instagram_abu.png" 
                                    @click="igeCo"
                                />
                                <span>edwardsitompul26 </span>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
</div>
</template>
<script>

export default {
    data() {
        return {}
    },
    methods: {
        igeCw() {
            let url = 'https://www.instagram.com/bintangmhrn/';
            window.open(url);
        },
        igeCo() {
            let url = 'https://www.instagram.com/edwardsitompul26/';
            window.open(url);
        }
    }
}
</script>
