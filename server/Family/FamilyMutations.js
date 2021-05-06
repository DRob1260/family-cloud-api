import {FamilyTC} from './FamilyTC';

export const FamilyMutations = {
    familyCreateOne: FamilyTC.mongooseResolvers.createOne(),
    familyCreateMany: FamilyTC.mongooseResolvers.createMany(),
    familyCreateRandom: FamilyTC.getResolver("familyCreateRandom"),
    familyUpdateById: FamilyTC.mongooseResolvers.updateById(),
    familyUpdateOne: FamilyTC.mongooseResolvers.updateOne(),
    familyUpdateMany: FamilyTC.mongooseResolvers.updateMany(),
    familyRemoveById: FamilyTC.mongooseResolvers.removeById(),
    familyRemoveMany: FamilyTC.mongooseResolvers.removeMany()
}
