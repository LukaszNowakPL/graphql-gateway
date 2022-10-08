import {Prisma} from '@prisma/client';
import {Context} from '../../context';
import {NexusGenArgTypes} from '../../../nexus-typegen';

export const AirlineModel = {
    async findByAirport(name: string, context: Context) {
        return await this.findMany({routes: {some: {OR: [{dep: name}, {arr: name}]}}}, context);
    },
    async findByAircraftId(id: number, context: Context) {
        return await this.findMany({aircrafts: {some: {id}}}, context);
    },
    async findById(id: number, context: Context) {
        return await this.findUnique({id}, context);
    },
    async createAirline({name, countryOfRegistration, aircrafts}: NexusGenArgTypes['Mutation']['addAirline'], context: Context) {
        return await this.create(
            {
                name,
                countryOfRegistration,
                aircrafts: {
                    connect: aircrafts.map(id => {
                        return {id};
                    }),
                },
            },
            context,
        );
    },
    // DB queries
    async findMany(where: Prisma.AirlineWhereInput, context: Context) {
        return await context.prisma.airline.findMany({where});
    },
    async findUnique({id}: Prisma.AirlineWhereUniqueInput, context: Context) {
        return await context.prisma.airline.findUnique({where: {id}});
    },
    async create(data: Prisma.AirlineCreateInput, context: Context) {
        return await context.prisma.airline.create({data});
    },
};
