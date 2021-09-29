import ucapan_request from '@/api/ucapan_request.js'
import frontend_request from '@/api/frontend_request.js'

const repositories = {
    ucapan_request: ucapan_request,
    frontend_request: frontend_request,
};


export const RepositoryAPI = {
    get : name => repositories[name]
};