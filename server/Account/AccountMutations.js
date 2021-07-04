import {AccountTC} from "./AccountTC";

export const AccountMutations = {
	accountCreateOne: AccountTC.mongooseResolvers.createOne(),
	accountCreateMany: AccountTC.mongooseResolvers.createMany(),
	accountUpdateById: AccountTC.mongooseResolvers.updateById(),
	accountUpdateOne: AccountTC.mongooseResolvers.updateOne(),
	accountUpdateMany: AccountTC.mongooseResolvers.updateMany(),
	accountRemoveById: AccountTC.mongooseResolvers.removeById(),
	accountRemoveMany: AccountTC.mongooseResolvers.removeMany()
};
