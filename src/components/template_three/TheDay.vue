<template>
<div>
    <div class="the-day">
        <div class="area-card-day">
            <div class="container">
                <b-row>
                    <b-col >
                        <!-- CARD 1 -->
                        <div class="card-the-day banteng-day" data-aos="fade-up">
                            <!-- <div class="img-the-day">
                                <b-carousel
                                    id="carousel-1"
                                    class="slider-couple"
                                    ref="myCarousel"
                                    indicators
                                    :interval="3000"
                                    background="#ababab"
                                    style="text-shadow: 1px 1px 2px #333;"
                                >
                                    <b-carousel-slide :img-src="engagement1" class="couple-img"></b-carousel-slide>
                                    <b-carousel-slide :img-src="engagement2" class="couple-img"></b-carousel-slide>
                                </b-carousel>
                            </div> -->
                            <div class="img-the-day">
                                <img src="../../assets/template-three/images/engagement_1.jpg">
                            </div>
                            <div class="content-card-day">
                                <div class="the-day-title">Holy Matrimony</div>
                                <div class="br-mprt"></div>
                                <div class="the-day-text">
                                    Saturday, 25th September 2021<br>
                                    09.30 AM - FINISH
                                </div>
                                <div class="place-text">
                                    Gereja HKBP DUREN SAWIT
                                    <div class="detail-address">
                                        Jl. Lkr. Duren Sawit No.6, Jakarta Timur
                                    </div>
                                </div>
                                <div class="button-the-day">
                                    <div class="btn-calendar" @click="locationHoly">
                                        <b-icon icon="geo-alt-fill" class="white"></b-icon>
                                        <span>View Location</span>
                                    </div>
                                    <div class="btn-calendar" @click="calendarEngagement">
                                        <b-icon icon="calendar2-check" class="white"></b-icon>
                                        <span>Save to calendar</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- CARD2 -->
                        <div class="card-the-day banteng-day" data-aos="fade-up">
                            <!-- <div class="img-the-day">
                                <b-carousel
                                    id="carousel-1"
                                    class="slider-couple"
                                    ref="myCarousel"
                                    indicators
                                    :interval="3000"
                                    background="#ababab"
                                    style="text-shadow: 1px 1px 2px #333;"
                                >
                                    <b-carousel-slide :img-src="engagement1" class="couple-img"></b-carousel-slide>
                                    <b-carousel-slide :img-src="holy2" class="couple-img"></b-carousel-slide>
                                </b-carousel>
                            </div> -->
                            <div class="img-the-day">
                                <img src="../../assets/template-three/images/streaming.jpg">
                            </div>
                            <div class="content-card-day">
                                <div class="the-day-title">Wedding Reception</div>
                                <div class="br-mprt"></div>
                                <div class="the-day-text">
                                    Saturday, 25th September 2021<br>
                                    11.00 AM - FINISH
                                </div>
                                <div class="place-text">
                                    Gedung Mulia & Raja
                                    <div class="detail-address">
                                        Jl. Kb. Nanas No.70, RT.10/RW.2, Cipinang Besar Sel., Kecamatan Jatinegara, Kota Jakarta Timur
                                    </div>
                                </div>
                                <div class="button-the-day">
                                    <div class="btn-calendar" @click="locationEngagement">
                                        <b-icon icon="geo-alt-fill" class="white"></b-icon>
                                        <span>View Location</span>
                                    </div>
                                    <div class="btn-calendar" @click="calendarWedding">
                                        <b-icon icon="calendar2-check" class="white"></b-icon>
                                        <span>Save to calendar</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- CARD 3 -->
                        <div class="card-the-day banteng-day" data-aos="fade-up">
                            <div class="img-the-day">
                                <img src="../../assets/template-three/images/kawin.jpg">
                            </div>
                            <div class="content-card-day">
                                <div class="the-day-title">Live Streaming</div>
                                <div class="br-mprt"></div>
                                <div class="the-day-text">
                                    <!-- Bintang & Edward<br>
                                    Live Streaming of Holy Matrimony -->
                                    The Holy Matrimony of <br>Bintang & Edward 
                                </div>
                                <!-- <div class="jarak"></div> -->
                                <div class="place-text">
                                    <div class="detail-address">
                                        We know that it is a tricky situation that we cannot have your physical presence on our wedding day, but we would be glad to share our happiness with you via live streaming. <br>Please click the button below to watch our wedding ceremony:
                                    </div>
                                </div>
                                <div class="button-the-day">
                                    <div class="btn-calendar" @click="streaming">
                                        <!-- <img src="../../assets/template-three/images/logo-zoom.png"> -->
                                        <b-icon icon="camera-video-fill" class="white"></b-icon>
                                        <span>Live Streaming</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <!-- <div class="wedding-agenda" data-aos="fade-up">
                            <div class="name">CHRISMAN & HELENA</div>
                            <div class="title">Live Wedding</div>
                            <div class="img-daun">
                                <img src="../../assets/template-three/images/daun.png">
                            </div>
                            <div class="semboyan">
                                We know that it is a tricky situation that we cannot have your physical presence on our wedding day, but we would be glad to share our happiness with you via live streaming. Please click the button below to watch our wedding ceremony. 
                            </div>
                        </div>
                        <div class="live-cam">
                            <div class="btn-cam" @click="streaming">
                                <span>
                                    <b-icon icon="eye" class="white"></b-icon>
                                </span>
                                LIVE WEDDING
                            </div>
                        </div> -->
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import engagement1 from "@/assets/template-three/images/engagement_1.jpg";
import engagement2 from "@/assets/template-three/images/engagement_2.jpg";
import holy2 from "@/assets/template-three/images/holy_2.jpg";
export default {
    data() {
        return {
            slide: 0,
            engagement1 : engagement1,
            engagement2: engagement2,
            holy2: holy2,
        }
    },
    methods: {
        streamingEngagement() {
            let url = 'https://bit.ly/EdwardBintang';
            window.open(url);
        },
        streaming() {
            let url = 'https://bit.ly/HMEdwardBintang';
            window.open(url);
        },
        calendar() {
            let url = 'https://www.google.com/calendar/render?action=TEMPLATE&text=Helena+%26+Chrisman+Wedding&location=HKBP+RAWAMANGUN&dates=20211004T080000Z%2F20210815T093000Z';
            window.open(url);
        },
        locationEngagement() {
            let url = 'https://goo.gl/maps/eAq27GwVi8kZ2HBM6';
            window.open(url);
        },
        locationHoly() {
            let url = 'https://goo.gl/maps/pCscMfctfP7Zkirp8';
            window.open(url);
        },
        calendarEngagement() {
            let url = 'https://www.google.com/calendar/render?action=TEMPLATE&text=The+Holy+Matrimony+Of+Bintang+%26+Edward&dates=20210925T023000Z%2F20210925T033000Z';
            window.open(url);
        },
        calendarWedding() {
            let url = 'https://www.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+Reception+Of+Bintang+%26+Edward&dates=20210925T040000Z%2F20210925T080000Z';
            window.open(url);
        }
    }
}
</script>
<style scoped>
.banteng-day {
    margin-bottom: 40px;
}
.jarak{
    margin-top: 40px;
}
</style>