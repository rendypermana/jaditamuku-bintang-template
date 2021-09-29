import {json} from '@/api/config';

export default {
    getFastUser(url) {
        return json.get('fast-user/' + url);
    },
    postWish(data) {
        return json.post('send-wish', data);
    },
    getWish(id_user) {
        return json.get('get-wish/' + id_user);
    },
    loadMore(id_user, page){
        return json.get('get-wish/' + id_user + '?page=' + page);
    },
    postRsvp(data){
        return json.post('send-rsvp', data);
    },
}
