import { AccountTC } from "./AccountTC";

export const AccountQueries = {
	accountById: AccountTC.mongooseResolvers.findById(),
	accountByIds: AccountTC.mongooseResolvers.findByIds(),
	accountOne: AccountTC.mongooseResolvers.findOne(),
	accountMany: AccountTC.mongooseResolvers.findMany(),
	accountCount: AccountTC.mongooseResolvers.count(),
	accountConnection: AccountTC.mongooseResolvers.connection(),
	accountPagination: AccountTC.mongooseResolvers.pagination()
};
