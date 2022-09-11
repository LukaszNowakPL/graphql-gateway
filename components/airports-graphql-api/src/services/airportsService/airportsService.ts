const { RESTDataSource } = require('apollo-datasource-rest');

class AirportsServiceApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:6001/';
    }

    async getAllAirports() {
        return await this.get('airports');
    }

    async getAirport(id: number) {
        return await this.get(`airports/${id}`);
    }

    async getAllCountries() {
        return await this.get('countries');
    }

    async getCountry(id: number) {
        return await this.get(`countries/${id}`);
    }

    async getAllCities() {
        return await this.get('cities');
    }

    async getCity(id: number) {
        return await this.get(`cities/${id}`);
    }

    async getAllServices() {
        return await this.get('services');
    }

    async getService(id: number) {
        return await this.get(`services/${id}`);
    }
}

module.exports = AirportsServiceApi;