export interface Route {
    dep: string
    arr: string
    flightNumber: string
}

export interface RouteWithAirline extends Route{
    airlineId: number
}

export interface Airline {
    name: string,
    countryOfRegistration: number
    routes: Route[]
}

export interface Manufacturer {
    name: string
    country: number
    aircrafts: Aircraft[]
}

export interface Aircraft {
    name: string
    capacity: number
}

export interface AircraftWithManufacturer extends Aircraft {
    manufacturerId: number
}