module.exports = /* GraphQL */ `
      extend type Manufacturer {
        countryDetails: Country!
      }
      extend type Airline {
        countryInfo: Country!
      }
      extend type Route {
        depAirport: Airport!
        arrAirport: Airport!
      }
    `
