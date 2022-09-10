const { RESTDataSource } = require('apollo-datasource-rest');

class AirportsServiceApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:5002/';
    }

    async getAllAirports() {
        return await this.get('airports');
    }

    async getAirport(id: number) {
        return await this.get(`airports/${id}`);
    }

    async getCountry(id: number) {
        return await this.get(`countries/${id}`);
    }

    async getCity(id: number) {
        return await this.get(`cities/${id}`);
    }

    async getService(id: number) {
        return await this.get(`services/${id}`);
    }
}

module.exports = AirportsServiceApi;