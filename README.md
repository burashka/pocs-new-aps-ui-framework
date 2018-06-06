# pocs-new-aps-ui-framework

[APS2 UI Runtime](https://doc.apsstandard.org/7.4/api/ui/) going to migrate from Dojo to modern JavaScript Framework.

We created three proof of concept (PoC): with Angular, pure React and React with Redux (example of use React with library for managing application state). Why were chosen exactly these options we will tell on Design Review.

Each PoC contains:
 - example of View with forms: Edit View. Based on the screen for adding users. There are many input elements and aps/WidgetList is used.
 - example of View with ajax: User View. Based on the screen for view user information. It use data from the context, navigation and received from the backend.
 - example of custom component: Edit User Form. It's used in Edit View.

For PoCs with React:
 - app code is located in src/ui
 - mocks platform API is located in src/platform

For PoCs with Angular:
 - app code is located in src/app
 - mocks platform API is located in projects

Please, review and provide your feedback. See:
 - how to create components,
 - how to work with data,
 - how to work with user actions and asynchronous requests.

Is it easy for you to understand what is happening or is it necessary to study the documentation for a long time? Do you think it's easy for you to write code using the approaches shown?

If you have 
 - any questions
 - a very important case that you need to consider
 - experience in one of the considered frameworks and see incorrect usage
 
then write to me, please.
