### Tracker.io - A Issue Tracker app made with Nextjs.


> 1.6.2 - Dashboard 1: Adding Latest Issues Component.

> 1.6.1 - Refactoring issues page and getting out the table in it to a new component.

> 1.6.0 - Adding Pagination.

> 1.5.9 - Fixing bugs.

> 1.5.8 - Added sorting of the issues table.

> 1.5.7 - Added Filter for filtering the issues based on issue status.

> 1.5.6 - Refactoring assignIssue.

> 1.5.5 - Added toast notification on assign user dropdown.

> 1.5.4 - Added logic for issue assign and unassign. 

> 1.5.3 - Updated the api for patch to include support for optional updating of the title, description fields with the help of new patchIssueSchema.

> 1.5.2 - Utilizing react query.
- Replaced usestate/useeffect childish code with tanstack query.
- added error handling with config of tanstack query in assignIssue component.
- Updated prisma models.
- formatted prisma models.
- migrated prisma model changes.

> 1.5.1 - Setting up react query.
- installed tanstack query and configured it as a provider and wrapped whole body content with it in layout.tsx file.

> 1.5.0 - Implement Assign feature.
- Added assignIssue dropdown component.
- Added api for fetching user list and integrated it with assignIssue dropdown.

> 1.4.9 - Setting Up NextAuth 9: Securing the API Endpoints using session from nex-auth.
- refactored code a lil bit.
- Added middleware to add route validation.

> 1.4.8 - Setting Up NextAuth 8: Loading Skeleton in navbar.

> 1.4.7 - Setting Up NextAuth 7: Refactoring Navbar styles and code splitting.

> 1.4.6 - Setting Up NextAuth 6: Adding Avatar in navbar.

> 1.4.5 - Setting Up NextAuth 5: Styling Navbar.

> 1.4.4 - Setting Up NextAuth 4: Adding login/logout.

> 1.4.3 - Setting Up NextAuth 3: Prisma Adapter configuration.
- First big blunder is i created route in *api/issues/auth*. but it should  be in *api/auth*.
- Next installed @next-auth/prisma-adapter for nextauth. as @auth/prisma-adapter was giving out errors.
- Then followed docs in nextauth/adapters for prisma and copied from model account to the very bottom and pasted in prisma.schema.
- Then ran *npx migrate prisma dev* command to migrate the new prisma.schema changes to db.

> 1.4.2 - Setting Up NextAuth 2: Configuring Google Oauth Provider.
- Went to cloud.google.com console and created a new project.
- Then configured the *consent screen* for Oauth.
- Then added type as *external* (for testing purposes) and scopes as *email and profile* and filled email address at few places. and added an email address for testing.
- Then after configuring the consent screen went to creadentials and created a new *Oauth client ID* and Then went into that project and selected it as *web application*, ADDED *app name*, *added URL* (localhost:3000) and finally added *redirect URI* (http://localhost:3000/api/auth/callback/google).
- And then finally added these in .env file.
    - as GOOGLE_CLIENT_ID
    - and GOOGLE_CLIENT_SECRET.


> 1.4.1 - Setting Up NextAuth.
- Installed NextAuth lib.
- created a new route api/auth/[...nextauth]/route.ts [this ...nextauth route is used to handle all the nextauth related routes].
- Added 2 new variables in .env file
    - NEXTAUTH_URL.
    - NEXTAUTH_SECRET.

> 1.4.0 - Duplicate loading skeleton fix.
- Moved the file hierarchy so that we don't have 2 loading.tsx in same, sub hierarchy.

> 1.3.9 - Delete btn issue improvements.
- Adding a loader to ensure network delay in deleting.
- overall improving UX.

> 1.3.8 - Integrated Delete api.
- Added Error Handling as well.

> 1.3.7 - Added Delete api.

> 1.3.6 - Added Delete btn UI and alert.
- Utilized radix ui alert.

> 1.3.5 - Bug Fixes 4 & Improvements:
- Fixed the layout using radixui container.
- Added DeleteIssueBtn.
- Made the edit page a bit lil more responsive.

> 1.3.4 - Bug Fixes 3: 
- Fixed navigator not found errors due to static imports in server page. so added dynamic imports and turned off ssr to avoid making that a static page.
- Fixed loading animations & skeletons.
- Refactored the loading skeleton for issueform so that it can be reused.
- Removed dynamic import from simpleMDE editor and added it to whole page instead as mde editor was loading lazily and other elements like title is loading eagerly thereby distrubing the loading experience..

> 1.3.3 - Bug Fixes 2: Fixed static rendering issue of issues page.
- This bug led to not updating the issues after adding/updating the issues.
- so kind of added a manual page refresh.
- Fixed api schema name import and its  usage.

> 1.3.2 - Bug Fixes 
- Tested and fixed redirection and conditional logic.

> 1.3.0 - Implemented EditIssue logic aswell.

> 1.2.9 - Implemented EditIssue PATCH API.
- Tested in thunderclient.

> 1.2.8 - Implemented EditIssue Page.
- Refactored the issueform to an reusable component.
- implemented edit issue page.

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