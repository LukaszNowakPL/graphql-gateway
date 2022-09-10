import {PrismaClient} from '@prisma/client';
import {AircraftWithManufacturer, Airline, Manufacturer, RouteWithAirline} from "./seed.types";
import {airlines, manufacturers} from "./seed.data";
const prisma = new PrismaClient();

async function main() {
    // Seeding with airlines and routes
    const createAirline = async ({routes, ...airline}: Airline) => {
        const newAirline = await prisma.airline.create({data: {...airline}});
        await routes.forEach(route => createRoute({...route, airlineId: newAirline.id}))
    }
    const createRoute = async (data: RouteWithAirline) => {
        await prisma.route.create({data});
    }
    await airlines.forEach(createAirline)

    // seeding with manufacturers and aircrafts
    const createManufacturer = async ({aircrafts, ...manufacturer}: Manufacturer) => {
        const newManufacturer = await prisma.manufacturer.create({data: {...manufacturer}});
        await aircrafts.forEach(aircraft => createAircraft({...aircraft, manufacturerId: newManufacturer.id}))
    }
    const createAircraft = async (data: AircraftWithManufacturer) => {
        await prisma.aircraft.create({data});
    }
    await manufacturers.forEach(createManufacturer)
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
