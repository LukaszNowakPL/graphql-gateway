import {extendType, nonNull, stringArg} from 'nexus';
import {RouteModel} from './model';

export const routeQuery = extendType({
    type: 'Query',
    definition(t) {
        // admin
        t.nonNull.list.nonNull.field('routes', {
            type: 'Route',
            args: {
                dep: nonNull(stringArg()),
            },
            async resolve(_, {dep}, context) {
                return await RouteModel.findByDepartingAirport(dep, context);
            },
        });
    },
});
