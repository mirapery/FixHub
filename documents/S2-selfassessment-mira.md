Self-Assessment of Sprint 2 / Mira

/config
- config.js
- db.js

- In the /config module, I improved the structure of the application by moving configuration and database connection code into separate files. The config.js file stores environment variables like PORT and DB_URI, making the code easier to manage and keeping sensitive data safe with dotenv. The db.js file handles the database connection, keeping app.js cleaner and more focused. This organization makes the code easier to read, prepares it for future updates, and includes error handling to make sure the app doesn't run in an unstable state. These changes follow good practices and make the application more reliable and easier to maintain.

/controllers
- itemController.js
- reviewController.js
- userController.js

- In controllers directory, I implemented itemController.js, reviewController.js, and userController.js, applying best practices from the course to ensure clarity and maintainability. Each controller adheres to a consistent pattern, handling CRUD operations for their respective models. To improve code quality, I separated user ID validation into middleware, promoting the DRY principle and simplifying future updates, as additional validations can be easily added. Similarly, error handling was abstracted into a middleware, centralizing logic and enhancing reusability. Developing the controllers was straightforward, as I could rely on skills gained from prior assignments, and the structured approach ensures scalability and clean organization of the codebase.

/middleware

- The middleware directory contains several utilities designed to enhance the structure and maintainability of the project.

- authenticate.js
    - The authenticate.js middleware is currently a placeholder and will be updated to meet project needs later.

- handleError.js
    - Error handling was abstracted into handleError.js, making the logic reusable and avoiding repetition across controllers.

- handleNotFound.js
    - The handleNotFound.js middleware manages unknown routes by providing a standard 404 response.

- logger.js
    - Logging functionality was added via logger.js, which tracks request details and response status codes for better debugging.

- validateUserId.js
    - The validateUserId.js middleware ensures proper validation of user IDs, separating this logic to adhere to the DRY principle and allowing for easy extension to validate other IDs or data types in the future. This approach keeps the codebase clean, modular, and scalable.

/models

- The models directory includes the schemas for Item, User, and Review entities. These were carefully designed during a team meeting to ensure all necessary fields were included without unnecessary complexity. We deliberated on mandatory and optional fields, and placeholder models were initially used to test API endpoints via Postman. After the schemas were finalized, these were incorporated into the models with modifications like email validation using regex. The API endpoints were thoroughly retested after the schema updates.

- itemModel.js
    - The itemSchema defines the structure for items with fields like itemId, userId, name, and description.

- reviewModel.js
    - The reviewSchema captures reviews with fields to link reviews to users, fixers, and items.

- userModel.js
    - The userSchema ensures proper data storage for users.

- The collaborative design process ensured that the models align with project requirements while remaining flexible for future extensions. The modular structure, such as adding validation in models or middleware, makes the code reusable and maintainable. The thorough testing with Postman helped catch inconsistencies and validate schema updates before integration. By following this systematic approach, the models are robust, extensible, and ready for further development.

/routes
- itemRoutes.js
- reviewRoutes.js
- userRoutes.js
    - The routes were structured to follow RESTful conventions, making the API easy to understand and maintain. In itemRoutes.js, reviewRoutes.js, and userRoutes.js, I defined the basic CRUD operations for each resource. Each route maps to the corresponding controller function, ensuring a clean separation of concerns between routing and business logic.
    - One key update I made was the addition of the user ID validation middleware in the userRouter. This middleware is applied to routes where the userId is part of the URL, ensuring that any user-related operations (such as fetching, updating, or deleting a user) are validated before being processed. This adds an extra layer of security and data integrity by ensuring the provided userId matches the expected format or exists in the database.
    - The structure of the routes is modular, with separate route files for Item, Review, and User entities, which promotes scalability and ease of maintenance. The clear organization allows for quick updates and additions to the API without unnecessary complexity. I also ensured that each route is tested thoroughly in Postman, confirming the API behaves as expected.

app.js

- In the app.js file, I made sure to include all necessary imports and ensured the app is set up to run smoothly. As the file began to grow, I focused on maintaining readability and clarity. To keep the code clean and organized, I moved certain configurations and setup logic to their own respective files. For example, database connection logic was placed in the config/db.js file, and I utilized a config/config.js file to store constants like PORT. This separation of concerns makes it easier to navigate the application and modify specific parts without cluttering the main app file.
- The middleware setup is concise and efficient. I included a custom logger middleware and error-handling middleware to ensure any issues are logged appropriately and that errors are caught and managed centrally.