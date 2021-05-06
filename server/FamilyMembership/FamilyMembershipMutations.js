import { FamilyMembershipTC } from "./FamilyMembershipTC";

export const FamilyMembershipMutations = {
	familyMembershipCreateOne: FamilyMembershipTC.mongooseResolvers.createOne(),
	familyMembershipCreateMany: FamilyMembershipTC.mongooseResolvers.createMany(),
	familyMembershipUpdateById: FamilyMembershipTC.mongooseResolvers.updateById(),
	familyMembershipUpdateOne: FamilyMembershipTC.mongooseResolvers.updateOne(),
	familyMembershipUpdateMany: FamilyMembershipTC.mongooseResolvers.updateMany(),
	familyMembershipRemoveById: FamilyMembershipTC.mongooseResolvers.removeById(),
	familyMembershipRemoveMany: FamilyMembershipTC.mongooseResolvers.removeMany()
};
