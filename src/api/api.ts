import {
  Category,
  Dataset,
  DatasetUpdate,
} from './api-definition';

const addressCategory: Category = {
  id: '3',
  name: 'Address',
  best_representation: {
    statistics: {
      null_fraction: 0.44280141592025757,
      distinct: -0.14485275745391846,
      most_common: [
        {
          value: {
            text: 'ST5'
          },
          frequency: 0.0011326454
        },
        {
          value: {
            text: 'CR0'
          },
          frequency: 0.0010697206
        },
        {
          value: {
            text: 'N16'
          },
          frequency: 0.0010697206
        },
        {
          value: {
            text: 'SE1'
          },
          frequency: 0.0010067959
        },
        {
          value: {
            text: 'BB2'
          },
          frequency: 0.00094387116
        },
        {
          value: {
            text: 'BN3'
          },
          frequency: 0.00094387116
        },
        {
          value: {
            text: 'BA2'
          },
          frequency: 0.00088094641
        },
        {
          value: {
            text: 'LE2'
          },
          frequency: 0.00088094641
        },
        {
          value: {
            text: 'LE3'
          },
          frequency: 0.00088094641
        },
        {
          value: {
            text: 'LE4'
          },
          frequency: 0.00088094641
        },
        {
          value: {
            text: 'LE9'
          },
          frequency: 0.00088094641
        },
        {
          value: {
            text: 'NE28'
          },
          frequency: 0.00088094641
        },
        {
          value: {
            text: 'NG2'
          },
          frequency: 0.00088094641
        },
        {
          value: {
            text: 'SE15'
          },
          frequency: 0.00088094641
        },
        {
          value: {
            text: 'LE67'
          },
          frequency: 0.00081802165
        },
        {
          value: {
            text: 'MK41'
          },
          frequency: 0.00081802165
        },
        {
          value: {
            text: 'NG19'
          },
          frequency: 0.00081802165
        },
        {
          value: {
            text: 'NR31'
          },
          frequency: 0.00081802165
        },
        {
          value: {
            text: 'ST7'
          },
          frequency: 0.00081802165
        },
        {
          value: {
            text: 'SW19'
          },
          frequency: 0.00081802165
        },
        {
          value: {
            text: 'CO10'
          },
          frequency: 0.0007550969
        },
        {
          value: {
            text: 'CV3'
          },
          frequency: 0.0007550969
        },
        {
          value: {
            text: 'CV6'
          },
          frequency: 0.0007550969
        },
        {
          value: {
            text: 'E14'
          },
          frequency: 0.0007550969
        },
        {
          value: {
            text: 'GL52'
          },
          frequency: 0.0007550969
        },
        {
          value: {
            text: 'LU3'
          },
          frequency: 0.0007550969
        },
        {
          value: {
            text: 'M16'
          },
          frequency: 0.0007550969
        },
        {
          value: {
            text: 'M22'
          },
          frequency: 0.0007550969
        },
        {
          value: {
            text: 'M33'
          },
          frequency: 0.0007550969
        },
        {
          value: {
            text: 'SE6'
          },
          frequency: 0.0007550969
        },
        {
          value: {
            text: 'SN3'
          },
          frequency: 0.0007550969
        },
        {
          value: {
            text: 'SO15'
          },
          frequency: 0.0007550969
        },
        {
          value: {
            text: 'BA14'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'BB1'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'BB12'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'BS16'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'CF24'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'CM1'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'CV5'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'DD4'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'E1'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'FY8'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'HD4'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'HD8'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'L4'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'LU7'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'N1'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'NE34'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'OX4'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'PO19'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'PR9'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'RG12'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'RG30'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'S75'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'SW11'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'SW18'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'SW6'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'W3'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'WA10'
          },
          frequency: 0.00069217215
        },
        {
          value: {
            text: 'BS5'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'CV2'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'CW8'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'CW9'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'DH8'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'DY11'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'FY4'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'FY5'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'GL51'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'HA4'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'LE12'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'ME15'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'ML1'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'NE10'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'NE5'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'NG17'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'NG9'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'NN14'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'OL16'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'OL2'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'PE1'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'PO7'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'PR4'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'PR7'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'RG1'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'RM16'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'S20'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'SE13'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'SE9'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'SG6'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'SS9'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'ST4'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'WA9'
          },
          frequency: 0.0006292474
        },
        {
          value: {
            text: 'AL1'
          },
          frequency: 0.00056632271
        },
        {
          value: {
            text: 'B44'
          },
          frequency: 0.00056632271
        },
        {
          value: {
            text: 'BL4'
          },
          frequency: 0.00056632271
        },
        {
          value: {
            text: 'BL9'
          },
          frequency: 0.00056632271
        },
        {
          value: {
            text: 'BN17'
          },
          frequency: 0.00056632271
        },
        {
          value: {
            text: 'BR2'
          },
          frequency: 0.00056632271
        },
        {
          value: {
            text: 'BS15'
          },
          frequency: 0.00056632271
        },
        {
          value: {
            text: 'BT47'
          },
          frequency: 0.00056632271
        }
      ],
    },
    representation_id: '4',
    representation_name: 'Outward Code',
  },
}
const dataset1: Dataset = {
  dataset_id: '537867f1-6dc2-41fa-8950-eec0ff0f4061',
  name: 'dataset1',
  created_at: '2019-05-22T10:51:41.272178Z',
  updated_at: '2019-05-22T10:51:41.272178Z',
  stats: {
    row_count: '875693',
    keys: [
      {
        id: '51',
        label: 'Email',
        null_fraction: 0.907800018787384,
        distinct: 4918
      },
    ],
    categories: [
      {
        id: '2',
        name: 'Gender',
        best_representation: {
          statistics: {
            null_fraction: 0.09092625230550766,
            distinct: 3,
            most_common: [
              {
                value: {
                  text: 'Male'
                },
                frequency: 0.44663981
              },
              {
                value: {
                  text: 'Female'
                },
                frequency: 0.44116536
              },
              {
                value: {
                  text: 'Other'
                },
                frequency: 0.021268563
              }
            ],
          },
          representation_id: '2',
          representation_name: 'Binary and Other',
        },
      },
    ],
  },
};

const dataset2: Dataset = {
  dataset_id: '2edc4cff-de7e-4a6f-9c72-2ff1f9506cdb',
  name: 'dataset2',
  created_at: '2019-05-22T10:51:41.272178Z',
  updated_at: '2019-05-22T10:51:41.272178Z',
  stats: {
    row_count: '162362',
    keys: [
      {
        id: '52',
        label: 'UDPRN',
        null_fraction: 0.5772333145141602,
        distinct: 9378
      },
      {
        id: '56',
        label: 'UDPRN::Forename',
        null_fraction: 0.5772666931152344,
        distinct: -0.367684543132782
      },
      {
        id: '57',
        label: 'UDPRN::FullName',
        null_fraction: 0.5772666931152344,
        distinct: -0.41691404581069946
      }
    ],
    categories: [
      addressCategory,
    ],
  },
};

const dataset3: Dataset = {
  dataset_id: '7d463167-4ffb-48cf-8c00-e6da7946fd8e',
  name: 'dataset3',
  created_at: '2019-05-22T10:51:41.272178Z',
  updated_at: '2019-05-22T10:51:41.272178Z',
  stats: {
    row_count: '74067',
    keys: [],
    categories: [
      {
        id: '159762446982987900',
        name: 'Custom',
        best_representation: {
          statistics: {
            null_fraction: 0.02419999986886978,
            distinct: -0.1618669629096985,
            most_common: [],
          },
          representation_id: '2',
          representation_name: 'Custom',
        },
      },
      addressCategory,
      {
        id: '2',
        name: 'Gender',
        best_representation: {
          statistics: {
            null_fraction: 0.06082625230550766,
            distinct: 3,
            most_common: [
              {
                value: {
                  text: 'Male'
                },
                frequency: 0.42663981
              },
              {
                value: {
                  text: 'Female'
                },
                frequency: 0.46116536
              },
              {
                value: {
                  text: 'Other'
                },
                frequency: 0.021268563
              }
            ],
          },
          representation_id: '2',
          representation_name: 'Binary and Other',
        },
      },
    ],
  },
};

const datasets = [dataset1, dataset2, dataset3];

/**
 * Returns a list of all available datasets.
 */
export const getDatasets = () => Promise.resolve(datasets);

/**
 * Updates a dataset.
 *
 * @param id ID of the dataset.
 * @param update New values for the dataset.
 */
export const updateDataset = (id: string, update: DatasetUpdate): Promise<Dataset> => {
  const dataset = datasets.find(({ dataset_id }) => dataset_id === id);

  if (!dataset) {
    Promise.reject('Dataset not found');
    return;
  }

  const validName = /^[a-zA-Z0-9]{3,20}$/g.test(update.name || '');

  if (!validName) {
    Promise.reject('Dataset name may only contain alphanumeric characters');
    return;
  }

  dataset.name = update.name;
  dataset.updated_at = new Date().toISOString();

  Promise.resolve(dataset);
}
