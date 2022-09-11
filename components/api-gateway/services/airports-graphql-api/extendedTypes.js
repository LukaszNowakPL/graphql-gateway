module.exports = /* GraphQL */ `
      extend type Country {
        manufacturers: [Manufacturer!]!
      }
      extend type Airport {
        airlines: [Airline!]!
      }
    `
