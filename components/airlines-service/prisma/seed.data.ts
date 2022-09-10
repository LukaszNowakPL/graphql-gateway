import {Airline, Manufacturer} from "./seed.types";

export    const airlines: Airline[] = [
        {name: 'LOT', countryOfRegistration: 1, routes: [
                {dep: 'WAW', arr: 'WRO', flightNumber: 'LO1'},
                {dep: 'WRO', arr: 'WAW', flightNumber: 'LO2'},
                {dep: 'WAW', arr: 'WRO', flightNumber: 'LO3'},
                {dep: 'WRO', arr: 'WAW', flightNumber: 'LO4'},
                {dep: 'WAW', arr: 'FRA', flightNumber: 'LO11'},
                {dep: 'FRA', arr: 'WAW', flightNumber: 'LO12'},
                {dep: 'WAW', arr: 'MUC', flightNumber: 'LO13'},
                {dep: 'MUC', arr: 'WAW', flightNumber: 'LO14'},
                {dep: 'WAW', arr: 'BCN', flightNumber: 'LO21'},
                {dep: 'BCN', arr: 'WAW', flightNumber: 'LO22'},
                {dep: 'WAW', arr: 'ZRH', flightNumber: 'LO31'},
                {dep: 'ZRH', arr: 'WAW', flightNumber: 'LO32'},
                {dep: 'WAW', arr: 'LHR', flightNumber: 'LO41'},
                {dep: 'LHR', arr: 'WAW', flightNumber: 'LO42'},
            ]},
        {name: 'Lufthansa', countryOfRegistration: 2, routes: [
                {dep: 'FRA', arr: 'MUC', flightNumber: 'LH1'},
                {dep: 'MUC', arr: 'FRA', flightNumber: 'LH2'},
                {dep: 'FRA', arr: 'MUC', flightNumber: 'LH102'},
                {dep: 'MUC', arr: 'FRA', flightNumber: 'LH101'},
                {dep: 'FRA', arr: 'WAW', flightNumber: 'LH11001'},
                {dep: 'WAW', arr: 'FRA', flightNumber: 'LH11002'},
                {dep: 'FRA', arr: 'BCN', flightNumber: 'LH11003'},
                {dep: 'BCN', arr: 'FRA', flightNumber: 'LH11004'},
                {dep: 'MUC', arr: 'BCN', flightNumber: 'LH12001'},
                {dep: 'BCN', arr: 'MUC', flightNumber: 'LH12002'},
                {dep: 'FRA', arr: 'LHR', flightNumber: 'LH11005'},
                {dep: 'LHR', arr: 'FRA', flightNumber: 'LH11006'},
                {dep: 'FRA', arr: 'LHR', flightNumber: 'LH11007'},
                {dep: 'LHR', arr: 'FRA', flightNumber: 'LH11008'},
                {dep: 'MUC', arr: 'LHR', flightNumber: 'LH12003'},
                {dep: 'LHR', arr: 'MUC', flightNumber: 'LH12004'},
                {dep: 'FRA', arr: 'ZRH', flightNumber: 'LH11009'},
                {dep: 'ZRH', arr: 'FRA', flightNumber: 'LH11010'}
            ]},
        {name: 'Wizz Air', countryOfRegistration: 3, routes: [
                {dep: 'WAW', arr: 'LTN', flightNumber: 'W61001'},
                {dep: 'LTN', arr: 'WAW', flightNumber: 'W61002'},
                {dep: 'WAW', arr: 'LTN', flightNumber: 'W61003'},
                {dep: 'LTN', arr: 'WAW', flightNumber: 'W61004'},
                {dep: 'WAW', arr: 'BCN', flightNumber: 'W61005'},
                {dep: 'BCN', arr: 'WAW', flightNumber: 'W61006'},
                {dep: 'WAW', arr: 'ZRH', flightNumber: 'W61007'},
                {dep: 'ZRH', arr: 'WAW', flightNumber: 'W61008'},
                {dep: 'LTN', arr: 'BCN', flightNumber: 'W61009'},
                {dep: 'BCN', arr: 'LTN', flightNumber: 'W61010'},
            ]},
        {name: 'Ryanair', countryOfRegistration: 4, routes: [
                {dep: 'STN', arr: 'WMI', flightNumber: 'FR1'},
                {dep: 'WMI', arr: 'STN', flightNumber: 'FR2'},
                {dep: 'STN', arr: 'WMI', flightNumber: 'FR3'},
                {dep: 'WMI', arr: 'STN', flightNumber: 'FR4'},
                {dep: 'STN', arr: 'BCN', flightNumber: 'FR5'},
                {dep: 'BCN', arr: 'STN', flightNumber: 'FR6'},
                {dep: 'STN', arr: 'BCN', flightNumber: 'FR7'},
                {dep: 'BCN', arr: 'STN', flightNumber: 'FR8'},
                {dep: 'WRO', arr: 'STN', flightNumber: 'FR101'},
                {dep: 'STN', arr: 'WRO', flightNumber: 'FR102'},
                {dep: 'WRO', arr: 'BCN', flightNumber: 'FR103'},
                {dep: 'BCN', arr: 'WRO', flightNumber: 'FR104'},
            ]},
        {name: 'Vueling', countryOfRegistration: 5, routes: [
                {dep: 'BCN', arr: 'MAD', flightNumber: 'VY1'},
                {dep: 'MAD', arr: 'BCN', flightNumber: 'VY2'},
                {dep: 'BCN', arr: 'PMI', flightNumber: 'VY3'},
                {dep: 'PMI', arr: 'BCN', flightNumber: 'VY4'},
                {dep: 'BCN', arr: 'ALC', flightNumber: 'VY5'},
                {dep: 'ALC', arr: 'BCN', flightNumber: 'VY6'},
                {dep: 'BCN', arr: 'MUC', flightNumber: 'VY1001'},
                {dep: 'MUC', arr: 'BCN', flightNumber: 'VY1002'},
                {dep: 'BCN', arr: 'ZRH', flightNumber: 'VY1101'},
                {dep: 'ZRH', arr: 'BCN', flightNumber: 'VY1102'},
                {dep: 'BCN', arr: 'LHR', flightNumber: 'VY1201'},
                {dep: 'LHR', arr: 'BCN', flightNumber: 'VY1202'},
            ]},
        {name: 'SWISS', countryOfRegistration: 6, routes: [
                {dep: 'ZRH', arr: 'WAW', flightNumber: 'LX101'},
                {dep: 'WAW', arr: 'ZRH', flightNumber: 'LX102'},
                {dep: 'ZRH', arr: 'MUC', flightNumber: 'LX201'},
                {dep: 'MUC', arr: 'ZRH', flightNumber: 'LX202'},
                {dep: 'ZRH', arr: 'FRA', flightNumber: 'LX211'},
                {dep: 'FRA', arr: 'ZRH', flightNumber: 'LX212'},
                {dep: 'ZRH', arr: 'BCN', flightNumber: 'LX301'},
                {dep: 'BCN', arr: 'ZRH', flightNumber: 'LX302'},
                {dep: 'ZRH', arr: 'LHR', flightNumber: 'LX401'},
                {dep: 'LHR', arr: 'ZRH', flightNumber: 'LX402'},
                {dep: 'ZRH', arr: 'LHR', flightNumber: 'LX403'},
                {dep: 'LHR', arr: 'ZRH', flightNumber: 'LX404'},
            ]}
    ];


export    const manufacturers: Manufacturer[] = [
        {name: 'Boeing', country: 7, aircrafts: [
                {name: 'B737-800', capacity: 189},
                {name: 'B737 MAX 8', capacity: 189},
                {name: 'B787-8', capacity: 290},
                {name: 'B787-9', capacity: 330}
            ]},
        {name: 'Airbus', country: 8, aircrafts: [
                {name: 'A319', capacity: 160},
                {name: 'A320', capacity: 180},
                {name: 'A321', capacity: 220},
            ]},
        {name: 'Embraer', country: 9, aircrafts: [
                {name: 'E170', capacity: 70},
                {name: 'E175', capacity: 82},
                {name: 'E195', capacity: 108}
            ]},
        {name: 'Bombardier', country: 10, aircrafts: [
                {name: 'DHC-8', capacity: 80},
                {name: 'CRJ-900', capacity: 90}
            ]},
    ]
