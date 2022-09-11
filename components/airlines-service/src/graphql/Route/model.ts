import {Prisma} from '@prisma/client';
import {Context} from '../../context';

export const RouteModel = {
    async findByAirlineId(id: number, {dep, arr}: { dep?: string | null, arr?: string | null }, context: Context) {
        const wherePart = {
            airlineId: id,
            dep: dep ?? undefined,
            arr: arr ?? undefined,
        }
        return await this.findMany({...wherePart}, context);
    },
    // DB queries
    async findMany(where: Prisma.RouteWhereInput, context: Context) {
        return await context.prisma.route.findMany({where});
    },
};
