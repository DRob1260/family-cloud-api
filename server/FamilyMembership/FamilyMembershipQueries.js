import { FamilyMembershipTC } from "./FamilyMembershipTC";

export const FamilyMembershipQueries = {
	familyMembershipById: FamilyMembershipTC.mongooseResolvers.findById(),
	familyMembershipByIds: FamilyMembershipTC.mongooseResolvers.findByIds(),
	familyMembershipOne: FamilyMembershipTC.mongooseResolvers.findOne(),
	familyMembershipMany: FamilyMembershipTC.mongooseResolvers.findMany(),
	familyMembershipCount: FamilyMembershipTC.mongooseResolvers.count(),
	familyMembershipPagination: FamilyMembershipTC.mongooseResolvers.pagination()
};
