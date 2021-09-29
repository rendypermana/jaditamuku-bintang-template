<template>
    <div class="couples">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="logo-bintang">
                        <img src="../../assets/template-three/images/logo_bintang.png" />
                    </div>
                    <div class="starwars">#STARWARDS</div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card card-couple" data-aos="fade-up">
                        <div class="title-card">We Found Love</div>
                        <!-- <b-carousel
                            id="carousel-1"
                            class="slider-couple"
                            ref="myCarousel"
                            indicators
                            :interval="3000"
                            background="#ababab"
                            style="text-shadow: 1px 1px 2px #333;"
                        >
                            <b-carousel-slide :img-src="slideOne" class="couple-img"></b-carousel-slide>
                        </b-carousel> -->
                        <div class="img-single-banteng">
                            <img :src="slideOne" />
                        </div>
                        <div class="text-couple">
                            “And above all these: Put on love, which binds everything together in perfect harmony.” <br>Colossians 3:14
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import slideOne from "@/assets/template-three/images/couple_slide1.jpg";
export default {
    data() {
        return {
            slide: 0,
            slideOne: slideOne,
        }
    },
}
</script>
<style scoped>

</style>