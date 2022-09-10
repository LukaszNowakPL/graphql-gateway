import {Prisma} from '@prisma/client';
import {Context} from '../../context';

export const RouteModel = {
    async findByAirlineId(id: number, context: Context) {
        return await this.findMany({airlineId: id}, context);
    },
    // DB queries
    async findMany(where: Prisma.RouteWhereInput, context: Context) {
        return await context.prisma.route.findMany({where});
    },
};
