export interface CountryDto {
    id: number
    name: string
}

export interface AirportDto {
    id: number
    country_id: number
    name: string
    airport: Airport
}

interface Airport {
    city: number
    name: string
    iata: string
    pax?: number
    services?: number[]
}