## Self-assessment of code -Ville



### Strengths

- The code supports user login, search, and a toggleable FAQ feature.

- React hooks are used effectively to manage states (useState, useEffect, useRef).

- Logical separation of components like Login, Searchbar, ResultArea, and FaqContent.

- Search and FAQ features are neatly implemented in their respective components.

- CSS classes for responsive design (e.g., sm:w-3/4, lg:w-[30vw]) show an attempt to support various screen sizes.

- Modular components like FaqContent and Searchbar can be reused across the application.

- Use of visual feedback, such as toggling FAQs and showing item counts, enhances user interaction.


### Areas for Improvement

- Although there are regular expressions (testEmail and testPassword) defined, they are not implemented, leaving email and password validation incomplete.

- Lack of validation weakens user experience and allows invalid inputs to proceed.

- Error handling in forms is minimal or non-existent. For instance, login errors (e.g., invalid email or password) do not provide meaningful feedback.

- setCustomValidity is not React-friendly and isn't properly integrated with React's state management.

- Repeated code patterns violate the DRY (Don’t Repeat Yourself) principle.

- Inline utility classes are excessively used (w-full, p-3), making the code harder to maintain and modify.


### Final Thoughts

Fixing these issues on next sprint will make code much reliable and will improve user experience. 
