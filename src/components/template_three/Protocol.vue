<template>
    <div class="protocol-popup" id="protocol" v-if="showing">
        <div class="popup">
            <span><b-icon icon="x" @click="close"></b-icon></span>
            <div class="wording-popup">
                <p>This event is carried out in compliance with</p>
                <h3>Health Protocol</h3>
                <p>As Follows :</p>
            </div>
            <img src="../../assets/template-three/images/protocol.png">
            <div class="wording-popup-bottom">
                <p>Without diminishing respect in order to reduce the spread of Coronavirus, please follow health protocols and arrive on time according to the time stated on the invitation.</p>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: {
        showing: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isShow: false,
        }
    },
    methods: {
        close() {
            this.$emit('closeProtocol');
        }
    }
}
</script>

<style scoped>
#protocol{
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.7);
    z-index: 99999;
}
.popup {
    position: absolute;
    left: 0;
    right: 0;
    top: 30px;
    background: #C9D3E6;
    margin: 15px;
    padding: 15px
}
.popup span{
    position: absolute;
    right: 15px;
    cursor: pointer;
    font-size: 27px;
}
/* .popup img{
    width: 100%;
} */
.wording-popup {
    margin-top: 60px;
    margin-bottom: 40px;
}
.wording-popup p{
    text-align: center;
    color: #0F1F3A;
    line-height: 0.5;
}
.wording-popup-bottom {
    margin-top: 30px;
}
.wording-popup-bottom p{
    text-align: center;
    color: #0F1F3A;
    line-height: 1.3;
}
.wording-popup h3{
    text-align: center;
    color: #0F1F3A;
    font-weight: 600;
}
</style>