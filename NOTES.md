### API

Dataset 1 contains:
  - Categories: `Gender`
  - Keys: `email`

Dataset 2 contains:
  - Categories: `Address`
  - Keys: `UDPRN`, `UDPRN::Forename`, `UDPRN::Forename`

Dataset 3 contains:
  - Categories: `Custom`, `Address`, `Gender`
  - Keys: None


### App

- Restructured to class syntax
- Initialise state
- Import data on lifecycle hook
- Pass data through to Dataset component


### Dataset

- Format and display `created_at` time