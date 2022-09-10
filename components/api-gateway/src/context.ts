import {AirportsService} from "./services/airportsService/types";

export interface Context {
    dataSources: {
        airportsApi: AirportsService
    }
}
