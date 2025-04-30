
##
## What is Emmet?
Emmet is a plugin for text editors that helps developers write HTML and CSS faster by using abbreviations that expand into full code snippets. It is widely supported in editors like Visual Studio Code, Sublime Text, and others. For example, typing *div>ul>li*3 and pressing the Emmet expansion shortcut (usually Tab or Ctrl+E) generates:
```
<div>
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
```
Emmet significantly speeds up coding by reducing repetitive typing and improving productivity.


##
## Difference between a Library and Framework?
A **library** and a **framework** are both tools used in software development, but they differ in how they are used and how they control the flow of the application:

### Library
* A library is a collection of pre-written code that developers can call upon to perform specific tasks.
* The developer is in control of the application flow and decides when and how to use the library.
* Example: React (for building user interfaces), Lodash (for utility functions).

### Framework
* A framework provides a structure and predefined flow for building applications.
* The framework is in control, and the developer writes code that fits into the framework's structure.
* Example: Angular, Django, Spring.

### Key Difference:
In a library, you call the code (you are in control). In a framework, the framework calls your code (it is in control).

##
## What is CDN? Why do we use it?
1. **Improved Performance:** By reducing the distance between the user and the server, CDNs decrease latency and improve page load times.
2. **Scalability:** CDNs handle large amounts of traffic efficiently, making them ideal for high-traffic websites.
3. **Reliability:** Content is distributed across multiple servers, so if one server fails, another can take over.
4. **Reduced Bandwidth Costs:** CDNs cache content, reducing the load on the origin server and saving bandwidth.
5. **Better Security:** Many CDNs offer protection against DDoS attacks and provide secure delivery of content.

**Example Use Case:**
Instead of hosting a JavaScript library like jQuery on your own server, you can use a CDN like Cloudflare or Google to serve it. This ensures faster delivery and better reliability.

##
## Why is React known as React?
React is known as *React* because it is designed to "react" to changes in data and update the user interface efficiently. It uses a declarative programming model and a virtual DOM to detect changes and re-render only the necessary parts of the UI, ensuring high performance and responsiveness. The name reflects its core functionality of reacting to state and data changes in real-time.

##
## What is crossorigin in script tag?
The crossorigin attribute in a script tag is used to specify how the browser should handle cross-origin requests for the script. It is primarily used when loading scripts from a different origin (e.g., a CDN) and is relevant for security and resource sharing.

**Values of** crossorigin
1. **anonymous**:
* Sends a cross-origin request without credentials (cookies, HTTP authentication, or client-side SSL certificates).
* Example:
```
<script src="https://example.com/script.js" crossorigin="anonymous"></script>
```

2. **use-credentials**:
* Sends a cross-origin request with credentials.
* Example:
```
<script src="https://example.com/script.js" crossorigin="use-credentials"></script>
```

3. **Omitting crossorigin**:

* The browser will not include credentials in the request and will not check CORS headers.

**Why use crossorigin?**
* It is required when using **Subresource Integrity (SRI)** to ensure the integrity of the script being loaded.
* It helps manage security and access control for cross-origin resources.

##
## What is diference between React and ReactDOM
The difference between *React* and *ReactDOM* lies in their roles and responsibilities within a React application:

**React**
* **Purpose:** React is the core library responsible for creating and managing components, handling state, and building the component tree.
* **Focus:** It provides the tools to define and manage the UI logic and structure.
* **Key Features:**
    * Component creation (React.Component, React.useState, etc.).
    * Virtual DOM for efficient UI updates.
    * Hooks for managing state and side effects.
* **Example:**
```
import React from 'react';

function App() {
    return <h1>Hello, World!</h1>;
}
```

**ReactDOM**
* **Purpose:** ReactDOM is responsible for rendering React components to the DOM (or other platforms like mobile with React Native).
* **Focus:** It acts as the bridge between React components and the actual DOM.
* **Key Features:**
    *Rendering components to the DOM (ReactDOM.render).
    *Managing the DOM tree updates efficiently.
* **Example:**
```
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<App />, document.getElementById('root'));
```
* **Key Difference:**
* **React** is the library for building UI components and managing their logic.
* **ReactDOM** is the library for rendering those components to the DOM.

## 
## What is difference between react.development.js and react.production.js files via CDN?
The difference between react.development.js and react.production.js files via a CDN lies in their purpose and usage:

**react.development.js**
* **Purpose:** This file is intended for development environments.
* **Features:**
* Includes detailed error messages and warnings to help developers debug issues.
* Provides helpful runtime checks for common mistakes.
* Larger in size because of the additional debugging information.
* **Use Case:** Use this file during development to catch errors and warnings early.
##### react.production.js
* **Purpose:** This file is optimized for production environments.
* **Features:**
    * Stripped of all development-specific warnings and error messages.
    * Minified and smaller in size for better performance.
    * Focused on delivering high efficiency and speed.
* **Use Case:** Use this file in production to ensure faster load times and better performance.
**Key Difference:**
* **Development:** react.development.js is for debugging and development purposes.
* **Production:** react.production.js is optimized for deployment and performance.

##
## What is async and defer?
The async and defer attributes are used in script tags to control how JavaScript files are loaded and executed in an HTML document. Both attributes improve page loading performance by preventing scripts from blocking the rendering of the HTML.

***async***
* **Behavior:** The script is downloaded in parallel with the HTML parsing and executed as soon as it is downloaded, without waiting for the HTML parsing to complete.
* **Use Case:** Suitable for scripts that do not depend on other scripts or the DOM structure.
* **Execution Order:** Scripts with async are executed as soon as they are ready, which means the order of execution is not guaranteed.
* **Example:**
```
<script src="script.js" async></script>
```

***defer***
* **Behavior:** The script is downloaded in parallel with the HTML parsing but is executed only after the HTML parsing is complete.
* **Use Case:** Suitable for scripts that depend on the DOM being fully loaded or need to maintain execution order.
* **Execution Order:** Scripts with defer are executed in the order they appear in the document.
* **Example:**
```
<script src="script.js" defer></script>
```
* **Key Differences**

|Attribute	|Download Timing	|Execution Timing	|Execution Order|
|-------------|---------------|----------------|----------|
async|	Parallel with parsing|	As soon as ready|	Not guaranteed|
defer|	Parallel with parsing|	After HTML parsing is done	|Guaranteed (in order)|

**When to Use**
* Use async for independent scripts (e.g., analytics).
* Use defer for scripts that rely on the DOM or need to execute in order.