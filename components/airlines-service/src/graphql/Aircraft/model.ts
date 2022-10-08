import {Prisma} from '@prisma/client';
import {Context} from '../../context';

export const AircraftModel = {
    async findByAirlineId(id: number, context: Context) {
        return await this.findMany({airlines: {some: {id}}}, context);
    },
    async findByManufacturerId(manufacturerId: number, context: Context) {
        return await this.findMany({manufacturerId}, context);
    },
    async findAll(context: Context) {
        return await this.findMany({}, context);
    },
    // DB queries
    async findMany(where: Prisma.AircraftWhereInput, context: Context) {
        return await context.prisma.aircraft.findMany({where});
    },
};
