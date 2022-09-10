export type AirportService = {
    getCountryUrl: (id: number) => string
    getAirportsUrl: () => string
    getAirportUrl: (id: number) => string
}

export class airportsService {
    readonly urls = {
        base: 'http://localhost:5002',
        countries: '/countries',
        country: '/countries/:id',
        airports: '/airports',
        airport: 'airports/:id',
    }

    private wrapUrl = (internalUrl: string) => {
        return `${this.urls.base}${internalUrl}`
    }

    getCountryUrl = (id: number) => {
        return this.wrapUrl(this.urls.country.replace(':id', id.toString()))
    }

    getAirportsUrl = () => {
        return this.wrapUrl(this.urls.airports)
    }

    getAirportUrl = (id: number) => {
        return this.wrapUrl(this.urls.airport.replace(':id', id.toString()))
    }
}
