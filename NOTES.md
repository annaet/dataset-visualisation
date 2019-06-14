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
- Added SCSS


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

- General
  - Utilise typescript further

- Keys
  - Show distinct label by default on Keys piecharts as that's the data the user is probably most interested in
  - Alternatively, just show all labels at once
  - Add key count label to dataset tabs

- Categories
  - Customise graph to hide distinct/null values and have axis adjust
  - Add hover info on treemaps
