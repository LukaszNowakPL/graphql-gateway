import {Prisma} from '@prisma/client';
import {Context} from '../../context';

export const ManufacturerModel = {
    async findById(id: number, context: Context) {
        return await this.findUnique({id}, context);
    },
    async findByCountryId(id: number, context: Context) {
        return await this.findMany({country: id}, context);
    },
    // DB queries
    async findUnique({id}: Prisma.ManufacturerWhereUniqueInput, context: Context) {
        return await context.prisma.manufacturer.findUnique({where: {id}});
    },
    async findMany(where: Prisma.ManufacturerWhereInput, context: Context) {
        return await context.prisma.manufacturer.findMany({where});
    },
};
