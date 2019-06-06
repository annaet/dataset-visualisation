# Front End Developer Take Home Task

## Background
At InfoSum we deal with enabling our customers to compare datasets for understanding data quality and exploring insights between different datasets.
Customers upload their data into a secure isolated “Bunker” and then go through a data normalisation process, mapping their data to our global schema. It’s this schema which enables our platform to consistently query across all datasets held within itself.

A dataset will comprise of information about the potential keys which can be used to join data together and categories which describe the dataset’s characteristics.

## The task

We’ve created a shell React app, with data for mock datasets available through a fake API.

The mock data is available through the API in `/src/api/api.ts` - by calling `getDatasets()`.

The corresponding definition for the response data is available in `/src/api/api-definition.d.ts`.

You should create a new component (or components) which will retrieve the data from this API, and show certain statistics for its **keys** and **categories**. These components should allow the user to understand the characteristics of the datasets' data.

### The statistics

Both key and category components should show:


* Null values
* Distinct values
* Duplicate values

Please note that the `distinct` values can be negative, as they are obtained via Postgres’s pg-stats  `n_distinct` value (https://www.postgresql.org/docs/9.3/view-pg-stats.html)

> If greater than zero, the estimated number of distinct values in the column. If less than zero, the negative of the number of distinct values divided by the number of rows. (The negated form is used when ANALYZE believes that the number of distinct values is likely to increase as the table grows; the positive form is used when the column seems to have a fixed number of possible values.) For example, -1 indicates a unique column in which the number of distinct values is the same as the number of rows.

### Example

On a given key, there is a `null_fraction` of `0.3`, a `distinct` value of `-0.6`, and a `row_count` of `100000`. The following should be derived:

* Null: 30,000
* Distinct: 60,000
* Duplicate: 10,000

Therefore we want the user to understand that there are 100,000 rows of data, of which 30,000 do not have this key available, and of the 70,000 populated rows remaining, 10,000 were duplicates.

A visualisation may be appropriate for the user to understand this breakdown.


## Running the app

Run `npm install` from the root folder to install the necessary dependencies.

Run `npm start`, then navigate to https://localhost:3000 to view the application.


## Notes

Whilst the app is set up to use Typescript you should also be able to use plain old JavaScript if you wish to, and the application base will still compile.

Don't spend more than a couple of hours on this task, we just want to see what results you can display from this data and how you interact with it. To ensure you have something to show, prioritise displaying the dataset **key** information. If you have time, move on to look at the **category** data.

