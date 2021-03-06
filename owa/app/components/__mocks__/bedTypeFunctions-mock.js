import _ from 'lodash';

import {bedTypes} from 'utilities/__tests__/testData.json';

const bedTypeFunctionsMock = {
    setState: (stateData) => jest.fn(),
    getBedTypes: () => {
        return bedTypes;
    },
    getBedTypeByUuid: (bedTypeUuid) => {
        return _.find(bedTypes, function(bedType) {
            return bedType.uuid == bedTypeUuid;
        });
    },
    getBedTypeName: (bedTypeName) => {
        return _.find(bedTypes, function(bedType) {
            return bedType.name == bedTypeName;
        });
    },
    fetchBedTypes: () => {
        return bedTypes;
    },
    notify: (notifyType, message) => jest.fn()
};

export default bedTypeFunctionsMock;
