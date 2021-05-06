import {FamilyTC} from './FamilyTC';

export const FamilyQueries = {
    familyById: FamilyTC.mongooseResolvers.findById(),
    familyByIds: FamilyTC.mongooseResolvers.findByIds(),
    familyOne: FamilyTC.mongooseResolvers.findOne(),
    familyMany: FamilyTC.mongooseResolvers.findMany(),
    familyCount: FamilyTC.mongooseResolvers.count(),
    familyConnection: FamilyTC.mongooseResolvers.connection(),
    familyPagination: FamilyTC.mongooseResolvers.pagination()
}
