## Self-Assessment (Eetu)
**Example 1: Improving Data Insertion Robustness**
File Name: dbSetup.js

### Initial Implementation: The initial implementation of inserting dummy data into the MongoDB database was functional but did not account for edge cases such as:

1. Duplicate Key Errors: If dummyItems contained items with duplicate itemId values, the insertMany operation would fail entirely without a meaningful error message.

2. Date Format Standardization: The dateOfPublish field in dummyItems required manual conversion, increasing the risk of inconsistent date formats.

Here's the relevant code:
```
dummyItems.forEach(item => {
    if (typeof item.dateOfPublish === 'string') {
        item.dateOfPublish = new Date(item.dateOfPublish.split('/').reverse().join('-'));
    }
});

Items.insertMany(dummyItems)
    .then(() => console.log('Multiple items added successfully!'))
    .catch(err => {
        if (err.code === 11000) {
            console.error('Duplicate key error:', err.message);
        } else {
            console.error('Error adding items:', err);
        }
    });
```
### Key Issues Identified:
- **Error Specificity:** The handling of duplicate key errors was present, but other potential issues (e.g., invalid data types) were not addressed explicitly.
- **Manual Date Conversion:** While effective, the conversion approach was not reusable or centralized, making it less maintainable.

<hr>

### Refactored Implementation:
1. Centralized the date conversion logic using a utility function to ensure reusability and maintainability.

2. Enhanced error handling to catch additional issues, such as invalid data types, and log actionable messages.

3. Improved insertMany operation to process valid items while skipping duplicates.

```
// Utility function for date conversion:
const convertDate = (dateString) => {
    if (typeof dateString === 'string') {
        return new Date(dateString.split('/').reverse().join('-'));
    }
    return dateString;
};

// Process dummy items with enhanced error handling
dummyItems.forEach(item => {
    try {
        item.dateOfPublish = convertDate(item.dateOfPublish);
    } catch (error) {
        console.error(`Error converting date for item ${item.itemId}:`, error.message);
    }
});

Items.insertMany(dummyItems, { ordered: false }) // Continue inserting even if duplicates exist
    .then(() => console.log('Multiple items added successfully!'))
    .catch(err => {
        if (err.code === 11000) {
            console.error('Duplicate key error:', err.message);
        } else if (err.name === 'ValidationError') {
            console.error('Validation error:', err.message);
        } else {
            console.error('Error adding items:', err);
        }
    });
```
### Key Improvements:
- **Centralized Logic:** Extracted date conversion into a utility function for better readability and reusability.

- **Ordered Insertion:** Used the ordered: false option in insertMany to skip duplicates without interrupting the entire process.

- **Detailed Error Logging:** Added specific checks for ValidationError and other error types to provide more useful feedback during debugging.

<hr>

**Example 2: Schema Design Enhancement**
File Name: itemSchema.js

### Initial Schema: The schema for Items was well-defined but lacked the following:

1. **Validation for Nested Objects:** The location field was defined as a generic Object type, which could allow invalid structures.

2. **Default Values for Optional Fields:** Some optional fields (e.g., tags, images) were not initialized with defaults, which could lead to issues when accessing these fields.

### Original Schema:
```
const itemSchema = new mongoose.Schema({
    itemId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    fixerId: { type: String, required: false },
    name: { type: String, required: true },
    tags: { type: Array, required: false },
    description: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: Object, required: true },
    priceRange: { type: Array, required: false },
    dateOfPublish: { type: Date, default: Date.now, required: true },
    images: { type: Array, required: false },
    isFixed: { type: Boolean, required: true },
    interested: { type: Number, required: false }
});
```
<hr>

**Refactored Schema:**

1. Added a nested schema for the location field to enforce structure and validation.
2. Initialized optional array fields (tags, images) with empty arrays as default values to improve reliability.

```
const locationSchema = new mongoose.Schema({
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    zipCode: { type: String, required: false },
});

const itemSchema = new mongoose.Schema({
    itemId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    fixerId: { type: String, required: false },
    name: { type: String, required: true },
    tags: { type: Array, required: false, default: [] },
    description: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: locationSchema, required: true },
    priceRange: { type: Array, required: false },
    dateOfPublish: { type: Date, default: Date.now, required: true },
    images: { type: Array, required: false, default: [] },
    isFixed: { type: Boolean, required: true },
    interested: { type: Number, required: false },
});
```
### Key Improvements:

- Nested Validation: Ensured the location field adheres to a specific structure with defined subfields like city, state, and country.

- Default Values: Initialized optional fields like tags and images to empty arrays to prevent runtime errors.

<hr>

**Lessons Learned:**
1. **Error Handling Matters:** Explicitly handling various error scenarios improves the robustness and maintainability of code.
2. **Schema Design Impacts Data Integrity:** Defining nested schemas and defaults ensures consistent and valid data.
3. **Reusable Logic Saves Time:** Centralizing shared functionality (e.g., date conversion) reduces code duplication and simplifies debugging.