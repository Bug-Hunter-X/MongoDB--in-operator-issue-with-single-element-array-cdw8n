```javascript
// Correct usage of $in operator, even with a single-element array
db.collection.find({ field: { $in: ["value"] } });

// Alternative approach using $eq operator for single element array
db.collection.find({ field: "value" });
```