// import {v4 as uuid} from 'uuid'
import http from '~/utils/httpRequest';

const AccountDataService = {
    create: async (data) => {
        try {
            console.log(7, 'create');
            console.log('Creating account with:', data);
            // const uniqueSmallID = uuid().slice(0,8)
            const res = await http.post('/accounts', data);
            console.log('res create', res);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    },

    findAll: async (conditions) => {
        try {
            console.log(4, 'findAll');
            console.log('Finding account by: ', conditions);
            const queries = [];
            for (let key in conditions)
                if (conditions[key]) queries.push(`${key}=${conditions[key]}`);
            const queryString = queries.length ? `?${queries.join('&')}` : '';

            console.log('queryString:', queryString);
            const res = await http.get(`/accounts${queryString}`);
            console.log('res findAll', res);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    },

    update: async (id, data) => {
        try {
            const res = await http.put(`/accounts/${id}`, data);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    },

    delete: async (conditions) => {
        try {
            const queries = [];
            for (let key in conditions)
                if (conditions[key]) queries.push(`${key}=${conditions[key]}`);
            const queryString = queries.length ? `?${queries.join('&')}` : '';

            const res = await http.delete(`/accounts${queryString}`);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    },

    deleteAll: async () => {
        try {
            const res = await http.delete(`/accounts`);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    },
};

export default AccountDataService;
