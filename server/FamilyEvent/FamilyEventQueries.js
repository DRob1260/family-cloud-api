import { FamilyEventTC } from "./FamilyEventTC";

export const FamilyEventQueries = {
	familyEventById: FamilyEventTC.mongooseResolvers.findById(),
	familyEventByIds: FamilyEventTC.mongooseResolvers.findByIds(),
	familyEventOne: FamilyEventTC.mongooseResolvers.findOne(),
	familyEventMany: FamilyEventTC.mongooseResolvers.findMany(),
	familyEventCount: FamilyEventTC.mongooseResolvers.count(),
	familyEventConnection: FamilyEventTC.mongooseResolvers.connection(),
	familyEventPagination: FamilyEventTC.mongooseResolvers.pagination()
};
