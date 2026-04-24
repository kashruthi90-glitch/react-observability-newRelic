To enable observability in frontend with newRelic use "Browser agent"
npm install @newrelic/browser-agent --save

Add BrowserAgent agent in main.jsx 
The import statement for the browser agent should be the first thing in your source file. After the remaining import statements, immediately instantiate and configure the browser agent. Do this before adding any other code so the browser agent has a chance to load and capture data as early as possible.

