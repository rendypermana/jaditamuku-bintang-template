<template>
    <div class="template-two">
        <keep-alive>
            <component 
                :is="pageSelect" 
                :data-user="dataUser"
                @openPage="open"
            >
            </component>
        </keep-alive>
    </div>
</template>
<script>
import "@/assets/template-three/css/style.css"
import "@/assets/template-three/css/device.css"
import FirstPage from "@/components/template_three/FirstPage";
import InvitationPage from "@/components/template_three/InvitationPage";
export default {
    props: ["dataUser"],
    data(){
        return{
            pageSelect: "first-page",
        }
    },
    components: {
        FirstPage,
        InvitationPage,
    },
    methods: {
        open(val) {
            this.pageSelect = val;
        }
    }
}
</script>