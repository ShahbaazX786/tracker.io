### Tracker.io - A Issue Tracker app made with Nextjs.


> 1.2.7 - Refactoring #4
- Refactored the issuepage into subcomponents to follow single responsibility principle.

> 1.2.6 - Added Edit button.
- changed the issuedetailpage layout a lil bit.
- installed radix-ui/react-icons.
- created and added edit issue button.


> 1.2.5 - Refactoring #3 : Organizing imports.
- Created a new file index.ts to simplify imports.
- Created a new file skeleton.ts to simplify skeleton imports.
- Organized new imports.
- Removed unnecessary imports from all files.

> 1.2.4 - Disabling the SSR.
- Disabling the server side rendering for a specific component import to avoid hydration error even though we used *use client*.
- by using dynamic import we can provide the option to disable ssr:false. and this will ensure that the component will where this is being imported will not be rendered on server.

> 1.2.3 - Added Loading skeleton for NewIssuePage & NewIssueDetailPage.

> 1.2.2 - Added styling for Title in issue Detail page.
- Though i could have done it with tailwind css easily but to ensure that the style changes automatically in respect to theme i had to create a styled component.
- This styled component utilizes both Link from nextjs and Link from radixui to make it a simple link with text component.

> 1.2.1 - Added Markdown preview support in issueDetail page.
- installed and used react-markdown package.
- installed and configured tailwindcss/typography as plugin.
- added prose classname for parent element of react-markdown element to override the default tailwind styles for markdown elements.

> 1.2.0 - Added IssueDetail page. And updated some layout styles.

> 1.1.9 - Implementation of loading skeleton for issues page.
- Installed react loading skeleton to mimic loading skeleton in loading.tsx file.
- refactored the button create new issue button in a seperate component.
- installed delay package in dev dependencies to test the loading skeleton.

> 1.1.8 - Implementation of Issue Status Badge.
- Utilized radix ui's badge component to reuse it based on status of the badge.
- Used a Record data type to store the type of key/value for the badge.

> 1.1.7 - Implementation of Issues Page.
- Added a issues table page for viewing all existing issues.

> 1.1.6 - Refactoring #2
- Move the inline js method to a separate function.

> 1.1.5 - Adding a spinner.
- Created a cool reusable spinner component.
- Utilized it on the submit button using usestate to render / hide the spinner.

> 1.1.4 - Refactoring
- Refactored error message logic to a whole new component for code tidyness.
- Used optional chaining for error messages.

> 1.1.3 - Adding client side form validation.
- Installed and configured @hookform/resolvers package to utilize it with hook forms using zodresolver.
- refactored the code a lil bit and moved the schema to a separate file.
- added a dynamic type based on infering the custom schema of the createIssue type.


> 1.1.2 - Handling form errors.
- Formatted error messages in api response.
- Used callout element to show alert in ui.

> 1.1.1 - Handling form data.
- Installed react hook forms to handle forms.
- Installed axios to make requests to backend api.

> 1.1.0 - Replacing the textarea input with a popular markdown edior lib.

> 1.0.9 - Configuring theme & fonts for radix ui.
- updated theme.
- updated font config.

> 1.0.8 - Created Create new issue page.

> 1.0.7 - Installing and configuring radix ui.
- installed radix ui lib.
- added imports in layout.tsx(root).
- wrapped the whole body of the project with its inbuilt theme wrapper component.

> 1.0.6 - Creating API for new Issue creation.
- Created post api to create a new issue.
- installed prisma/client and configured its client to avoid running multiple instances of prisma at the same time. by following the official documentation.
- installed and configured zod to validate the request according to schema.

> 1.0.5 - Migrated Prisma.
- Created issue model in prisma.schema file.
- Created a enum to support custom data type for status in issue model.(enums are supported in mysql may not be supported in other dbs).
- formatted the file using *npx prisma format.*
- opened the mysql cli and connected using pasword. then ran the prisma migrate command *npx prisma migrate dev*.
- then opened the datagrip software and created a new datasource(steps are pretty simple.)
## Note: Make sure to download the drivers if prompted. Also make sure to click on the test connection button to make sure the mysql server is online in local.

> 1.0.4 - configured Prisma.
- updated the db url and prisma configuration.
- updated the gitignore file.
- saved db config somewhere safe XD

> 1.0.3 - Initialize Prisma.
- Installed and Initialized Prisma.
- Priorly Download and setup mysql community server + (workbench or datagrid from jetbrains) for gui db.

> 1.0.2 - Added Navbar Component.
- Added Navbar Component.
- Seperated components.
- Utilized classsnames(1 of the best way to style conditionally), react-icons libraries.

> 1.0.1 - Code Cleanup.
- Cleaned starter code.

> 1.0.0 - Initial commit.