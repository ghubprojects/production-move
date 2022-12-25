import http from '~/utils/httpRequest';

const AccountDataService = {
    create: async (data) => {
        try {
            const res = await http.post('/accounts', data);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    },

    findAll: async (conditions) => {
        try {
            const queries = [];
            for (let key in conditions) queries.push(`${key}=${conditions[key]}`);
            const queryString = queries.length ? `?${queries.join('&')}` : '';

            const res = await http.get(`/accounts${queryString}`);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    },

    update: async (userId, data) => {
        try {
            const res = await http.put(`/accounts/${userId}`, data);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    },

    delete: async (conditions) => {
        try {
            const queries = [];
            for (let key in conditions) queries.push(`${key}=${conditions[key]}`);
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
