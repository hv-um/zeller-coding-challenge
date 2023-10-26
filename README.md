# Documentation

- I used create-react-app to quickly bootstrap most of the project
- I have used graphQL in a small project before, and I knew I wanted something relatively straightforward and with little overhead. After some research, this led me to graphql-request which seemed like an appropriate lightweight option. I also used react-query because I know it offers me a lot out of the box: caching, fetching, retries etc.
- Wiring up the endpoint was where I started; this would probably take me the most time as I'm more comfortable building UIs.
- The testing coverage was fairly basic, I wanted the tests to mimic the behaviour of the user and keep the overhead fairly low. This meant not hitting the API directly, but still checking for changes when a user interacts with the UI.
- I used tailwind because I had used it for a project before, and knew it would be a relatively straightforward UI to build.

Future considerations
- Pagination
- Progressive loading