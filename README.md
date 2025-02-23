# MongoDB $in operator with single-element array
This repository demonstrates a subtle issue with the MongoDB `$in` operator when used with an array containing only one element. The query does not behave as expected, returning an empty result set instead of the documents matching the single element.  The solution provides a correct approach.