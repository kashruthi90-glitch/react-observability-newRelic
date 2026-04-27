For monitoring the metrics of the application we can use "web vitals" npm package, which inturn uses "Performance Observer" API provided by the browser. But, it will only provide the metrics related to LCP, INP, CLS for the page. This messures the metric for page that gets initially loaded. In an SPA, clicking a link triggers the JavaScript router. The router updates the URL using the History API, unmounts the old component tree, mounts the new one, and possibly fetches data from an API. None of this generates a traditional navigation event. The Performance Timing API sees only the original page load.

To enable observability in frontend with newRelic use "Browser agent"
npm install @newrelic/browser-agent --save

Add BrowserAgent agent in main.jsx 
The import statement for the browser agent should be the first thing in your source file. After the remaining import statements, immediately instantiate and configure the browser agent. Do this before adding any other code so the browser agent has a chance to load and capture data as early as possible.

When we use newRelic browser agent for SPA, it captures the routes and the error or any related to the routes.
But, it doesn't give the metrics.

To solve this use opentelemetry with newRelic.
