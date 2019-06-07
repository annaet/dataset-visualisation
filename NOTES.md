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

Categories:

- Best Representation
  - Stats
    - `distinct`
    - `most_common`
    - `null_fraction`

### App

- Restructured to class syntax
- Initialise state
- Import data on lifecycle hook
- Pass data through to Dataset component


### Categories

- Comparison bar chart segmented into datasets to compare `null` and `distinct` counts
- Tree chart for most common values


### Dataset

- Format and display `created_at` time
- Restructured to class syntax
- Add pie charts for keys
- Add statistics


### Questions

- TS `type` vs `interface`
- When to use stateless functional components, limited without state and lifecycle hooks


### Todos
