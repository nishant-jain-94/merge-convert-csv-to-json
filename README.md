[![Build Status](https://travis-ci.org/nishant-jain-94/merge-convert-csv-to-json.svg?branch=master)](https://travis-ci.org/nishant-jain-94/merge-convert-csv-to-json)

# merge-convert-csv-to-json

Merges all the csv files and converts it to json.

## Installation

#### Using NPM

```
npm install -g merge-convert-csv-to-json
```

#### Using YARN

```
yarn add merge-convert-csv-to-json
```

## Options

```
--pattern pattern         The pattern of the input files to process.
--keyby propertyName      The name of the property to keyby.
--assignTo propertyName   The name of the property to assign the result to.
--outputTo filePath       The filepath to output the result to.
```

## Usage

- Merge all the `CSV` files and convert into single `JSON` file.
  ```
  merge-convert
  ```
- Merge all the `CSV` files, convert it to `JSON` object, assign it to a `JSON field` an then store it in a `JSON` file.
- Merge all the `CSV` files, convert it to `JSON` with every object *keyedBy* a `JSON` field and then store it to a `JSON` file.
- Merge all the `CSV` files, convert it to `JSON` with every object *keyedBy* a `JSON` field, assign the object to a `JSON` field and then store it to a `JSON` file.

