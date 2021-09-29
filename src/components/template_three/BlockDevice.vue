<template>
    <div class="device">
        <div class="warning-device">
            Kami menyarankan anda untuk membuka undangan di handphone
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .device {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.9);
        z-index: 99999;
    }
    .warning-device {
        background-color: #9c7c53;
        color: #fff;
        position: relative;
        padding: 15px;
        margin: 15% 30% 0% 30%;
        text-align: center;
    }
</style>