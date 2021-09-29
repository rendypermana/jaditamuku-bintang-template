import {json} from '@/api/config';

export default {
    getData(){
        return json.get('getUcapan')
    },
    loadMore(page){
        return json.get('getUcapan?page='+page)
    },
    postData(data){
        return json.post('kirimUcapan', data)
    },
    getPesan(){
        return json.get('getPesan')
    },
    loadPesan(page){
        return json.get('getPesan?page='+page)
    },
    postPesan(data){
        return json.post('kirimPesan', data)
    }
}
