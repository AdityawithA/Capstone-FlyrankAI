# Final Reusable Prompt — React Portfolio Contact Form

Build a responsive, accessible contact form for a developer portfolio. The primary purpose of the form is to allow software engineering recruiters to contact the developer.

## Functional Requirements

Create a React functional component containing:

* Full Name
* Email Address
* Subject
* Message
* Submit button

## Validation Requirements

* Full Name is required.
* Email Address is required.
* Email Address must use valid email-format validation.
* Subject is required.
* Message is required.
* Display clear validation messages for invalid fields.
* Prevent submission when validation fails.
* Use `aria-invalid` for fields containing validation errors.

## Accessibility Requirements

* Every form control must have an associated accessible label.
* The form must be usable with keyboard navigation.
* Validation messages should be understandable by users of assistive technologies.
* Do not rely only on colour to communicate validation errors.

## UI Requirements

* Use a clean, professional visual style suitable for a developer portfolio.
* Make the form responsive on desktop, tablet, and mobile screens.
* Keep the layout simple and easy to scan.

## Implementation Requirements

* Use React functional components.
* Keep the implementation modular and readable.
* Avoid unnecessary dependencies.
* Use clear variable and function names.
* Do not introduce functionality that was not requested.

## Verification

After implementing the form:

1. Review the code for functional bugs.
2. Test empty-field validation.
3. Test invalid email input.
4. Test valid form submission.
5. Check keyboard navigation.
6. Check accessible labels and `aria-invalid` states.
7. Check responsive behaviour at different screen sizes.
8. Identify assumptions, limitations, or issues that still require manual verification.
9. Summarize the verification results before considering the task complete.

Do not claim that the feature is fully verified unless the relevant checks have actually been performed.
