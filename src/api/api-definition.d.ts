/**
 * Dataset represents data about a Dataset.
 */
export interface Dataset {
    /**
     * DatasetID is the ID of this Dataset. This is equivalent to a bunker ID.
     * Output only.
     */
    dataset_id: string;
    /**
     * Name is the name of the Dataset.
     */
    name: string;
    /**
     * CreatedAt is the time when the Dataset was created.
     */
    created_at: string; // date-time
    /**
     * UpdatedAt is the time when the Dataset was last updated.
     */
    updated_at: string; // date-time
    /**
     * Stats contains statistical information about the Dataset.
     */
    stats: DatasetDescription;
}

/**
 * DatasetUpdate lists the fields to be changed when updating a dataset.
 */
export interface DatasetUpdate {
    /**
     * Name is the name of the Dataset. Must only contain alphanumeric characters.
     */
    name: string;
  }

/**
 * DatasetDescription is statistical information about a Dataset
 */
export interface DatasetDescription {
    /**
     * RowCount is the number of queryable rows in the Dataset.
     */
    row_count: string; // uint64
    /**
     * Keys describes all key columns.
     */
    keys: Key[];
    /**
     * Categories describes all categories.
     */
    categories: Category[];
}

/**
 * Key describes a key in a Dataset.
 */
export interface Key {
    /**
     * Id is the key's unique identifier.
     */
    id: string; // int64
    /**
     * Label is the key's display name.
     */
    label: string;
    /**
     * NullFraction is the fraction of column entries which are null.
     */
    null_fraction: number; // double
    /**
     * Distinct is the estimated number of distinct rows in the dataset.
     *
     * NOTE: this value can be positive or negative.
     * If positive, it is the absolute number of distinct rows.
     * If negative, it is the fraction of distinct rows in the dataset.
     *
     * @see https://www.postgresql.org/docs/9.3/view-pg-stats.html
     */
    distinct: number; // double
}

/**
 * Category describes a category in a Dataset.
 */
export interface Category {
    /**
     * Id is the unique ID of this category.
     */
    id: string; // int64
    /**
     * Name is the name of this category.
     */
    name: string;
    /**
     * BestRepresentation describes statistics about the best
     * representation in the category.
     */
    best_representation: Column;
}

/**
 * Column describes a database column.
 */
export interface Column {
    /**
     * Statistics contains the statistical data
     * for this column.
     */
    statistics: ColumnStats;
    /**
     * RepresentationId is the unique ID of the representation.
     */
    representation_id: string; // int64
    /**
     * RepresentationName is the name of the representation.
     */
    representation_name: string;
}

/**
 * Stats contains statistical data
 * for a column
 */
export interface ColumnStats {
    /**
    * NullFraction is the fraction of
    * the column entries that are null.
    */
    null_fraction: number; // double
    /**
     * Distinct is the estimated number of
     * distinct values if positive or
     * the number of distinct values divided
     * by the number of rows if negative.
     * +-------+--------------+----------+
     * | Sign  | Negative     | Positive |
     * +-------+--------------+----------+
     * | Value | Uniques/Rows | Uniques  |
     * +-------+--------------+----------+
     * (The negated form is used when ANALYZE believes that
     * the number of distinct values is likely to increase as
     * the table grows; the positive form is used when the
     * column seems to have a fixed number of possible values.)
     */
    distinct: number; // double
    /**
     * MostCommon is an array of the most common
     * elements in the column, together with their
     * accompanying frequencies.
     */
    most_common: ColumnStatsOccurrence[];
}

/**
 * Occurrence is a pair of value and frequency
 */
export interface ColumnStatsOccurrence {
    /**
     * The stored value.
     */
    value: DataValue;
    /**
     * The frequency of occurrence
     */
    frequency: number; // double
}
