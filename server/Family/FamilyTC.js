import {FamilyModel} from './FamilyModel';
import {composeMongoose} from 'graphql-compose-mongoose';
import {UserTC} from '../User/UserTC';

const FamilyTC = composeMongoose(FamilyModel, {});

FamilyTC.addResolver({
    name: "familyCreateRandom",
    type: FamilyTC,
    args: { record: FamilyTC.getInputType() },
    resolve: async () => {
        let family = new FamilyModel({
            surname: faker.name.lastName(),
            city: faker.address.city(),
            state: faker.address.state()
        });
        return await family.save();
    },
});

FamilyTC.addRelation(
    "familyUsers",
    {
        resolver: () => UserTC.mongooseResolvers.dataLoaderMany(),
        prepareArgs: {
            _ids: (source) => source.familyUserIds
        },
        projection: { familyUserIds: 1 }
    }
);

export { FamilyTC };
