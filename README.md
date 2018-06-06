# pocs-new-aps-ui-framework

As you know [APS2 UI Runtime](https://doc.apsstandard.org/7.4/api/ui/) currently uses Dojo framework as its front-end main tool.
Times change and we're going to migrate from Dojo to a modern JavaScript Framework.

We've created three proofs of concept (PoC): 
1) Angular 
2) Pure React
3) React with Redux (React with library for managing application state). 

We will explain why exactly these options were chosen in the upcoming Design Review.

Each PoC contains the following examples:
- View with forms: Edit View. Based on the "Add users" screen. Many input elements and aps/WidgetList are used there.
- View with ajax: User View. Based on the "View user information" screen. It uses data received from the backend, context and navigation.
- Custom component example: Edit User Form. It's used in Edit View.

For PoCs with React:
 - app code is located in src/ui
 - platform API mocks are located in src/platform

For PoCs with Angular:
 - app code is located in src/app
 - platform API mocks are located in projects

Please review and provide your feedback. Check how to:
 - create components,
 - work with data,
 - work with user actions and asynchronous requests.

We would be glad to hear from you whether it is easy for you to understand what is happening in each case or not. Is it necessary to delve deep into documentation beforehand or you can start developing pretty quickly? Do you think it's easy for you to write code using the approaches shown above?

If you have:
 - any questions
 - a very important case that you need to consider
 - experience in one of the considered frameworks and see their incorrect usage
please do not hesitate to contact me.

Thank you for your time and feedback.
