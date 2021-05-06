import {FamilyEventTC} from "./FamilyEventTC";

export const FamilyEventMutations = {
	familyEventCreateOne: FamilyEventTC.mongooseResolvers.createOne(),
	familyEventCreateMany: FamilyEventTC.mongooseResolvers.createMany(),
	familyEventUpdateById: FamilyEventTC.mongooseResolvers.updateById(),
	familyEventUpdateOne: FamilyEventTC.mongooseResolvers.updateOne(),
	familyEventUpdateMany: FamilyEventTC.mongooseResolvers.updateMany(),
	familyEventRemoveById: FamilyEventTC.mongooseResolvers.removeById(),
	familyEventRemoveMany: FamilyEventTC.mongooseResolvers.removeMany()
};
