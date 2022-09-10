import {RESTDataSource} from "apollo-datasource-rest";

export interface ServiceDto {
    id: number
    name: string
}

export interface CityDto {
    id: number
    name: string
}

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

export interface AirportsService extends RESTDataSource {
    getAllAirports(): Promise<AirportDto[]>
    getAirport(id: number): Promise<AirportDto>
    getCountry(id: number): Promise<CountryDto>
    getCity(id: number): Promise<CityDto>
    getService(id: number): Promise<ServiceDto>
}