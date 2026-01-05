import type { PostType, Tags } from "@/blog/service";

// Helper function to convert date string to timestamp
const dateToTimestamp = (dateString: string): number => {
  return new Date(dateString).getTime();
};

// Helper function to map tags to Tags type
const mapTags = (tags: string[]): Tags[] => {
  const mapped: Tags[] = [];
  tags.forEach((tag) => {
    const lowerTag = tag.toLowerCase();
    if (lowerTag.includes("javascript") || lowerTag.includes("js")) {
      if (!mapped.includes("javascript")) {
        mapped.push("javascript");
      }
    }
    if (lowerTag.includes("development") || lowerTag.includes("dev")) {
      if (!mapped.includes("development")) {
        mapped.push("development");
      }
    }
  });
  // Default to 'development' if no tags match
  return mapped.length > 0 ? mapped : ["development"];
};

export const mockBlogs: PostType[] = [
  {
    title: "Exploring Modern Web Development",
    slug: "exploring-modern-web-development",
    content: `<h1>Exploring Modern Web Development</h1>
<p>As we delve into modern web development, we'll explore the tools, frameworks, and best practices that shape today's web applications. The field has evolved tremendously, and understanding these changes is crucial for any developer looking to stay relevant.</p>
<h2>The Evolution of Web Development</h2>
<p>The landscape of web development has changed dramatically over the years. From static HTML pages to dynamic, interactive applications, the journey has been nothing short of revolutionary. We've witnessed the rise of JavaScript frameworks, the adoption of component-based architectures, and the shift towards serverless computing.</p>
<p><img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaG5vbG9neXx8fHx8fDE2MzQ0MjY5MzA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="Modern web development tools and technologies"></p>
<h2>Key Technologies Shaping the Future</h2>
<p>React has become the de facto standard for building user interfaces, with its component-based approach and virtual DOM. Vue.js offers a progressive framework that's easy to learn, while Angular provides a comprehensive solution for enterprise applications.</p>
<p>TypeScript has gained massive adoption, bringing type safety to JavaScript development. This has significantly improved developer experience and code maintainability. The ability to catch errors at compile time rather than runtime has saved countless hours of debugging.</p>
<h2>Best Practices and Patterns</h2>
<p>Modern web development emphasizes several key principles. Component reusability, state management, and performance optimization are at the forefront. Developers are increasingly focusing on creating maintainable, scalable codebases that can evolve with changing requirements.</p>
<p>The rise of design systems has also transformed how we build interfaces. By creating a library of reusable components, teams can maintain consistency across applications while improving development velocity.</p>`,
    tags: mapTags(["Web Development", "JavaScript", "React"]),
    createdAt: dateToTimestamp("2025-10-01"),
    updatedAt: dateToTimestamp("2025-10-01"),
  },
  {
    title: "Building a Portfolio with React and TypeScript",
    slug: "building-portfolio-react-typescript",
    content: `<h1>Building a Portfolio with React and TypeScript</h1>
<p>A step-by-step guide to creating a professional portfolio website using modern web technologies. This comprehensive tutorial will walk you through every aspect of building a stunning portfolio that showcases your work effectively.</p>
<h2>Getting Started</h2>
<p>First, we'll set up our development environment and create a new React project with TypeScript. Using Vite as our build tool provides lightning-fast development experience and optimized production builds.</p>
<p>To create a new project, run the following command in your terminal:</p>
<pre><code>npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio
npm install</code></pre>
<p>The initial setup involves installing Node.js, creating a new project, and configuring TypeScript. We'll also set up Tailwind CSS for styling, which allows us to build beautiful interfaces quickly.</p>
<blockquote>
<p>Pro tip: Always use TypeScript for larger projects. The type safety it provides will save you hours of debugging and make your codebase more maintainable.</p>
</blockquote>
<p><img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kaW5nfHx8fHx8MTYzNDQyNjkzMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="Code editor with React and TypeScript setup"></p>
<h2>Project Structure</h2>
<p>Organizing your project properly is crucial for maintainability. We'll create a clear folder structure that separates components, utilities, types, and assets. This makes it easier to navigate the codebase as it grows.</p>
<p>A typical portfolio structure looks like this:</p>
<pre><code>src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   └── Footer.tsx
├── types/
│   └── index.ts
├── utils/
│   └── helpers.ts
└── App.tsx</code></pre>
<p>Components should be modular and reusable. We'll create a design system with consistent styling patterns. Each component will have a specific responsibility, making the code easier to test and maintain.</p>
<h2>Creating Your First Component</h2>
<p>Let's start by creating a simple Hero component with TypeScript:</p>
<pre><code>import React from 'react';

interface HeroProps {
  name: string;
  title: string;
  description: string;
}

const Hero: React.FC&lt;HeroProps&gt; = ({ name, title, description }) => {
  return (
    &lt;section className="hero"&gt;
      &lt;h1&gt;{name}&lt;/h1&gt;
      &lt;h2&gt;{title}&lt;/h2&gt;
      &lt;p&gt;{description}&lt;/p&gt;
    &lt;/section&gt;
  );
};

export default Hero;</code></pre>
<p>Notice how we define the props interface to ensure type safety. This prevents common errors and provides better IDE support.</p>
<h2>Implementing Features</h2>
<p>The portfolio will include several key sections:</p>
<ul>
<li><strong>Hero section</strong> - Introduction and call-to-action</li>
<li><strong>About me</strong> - Personal background and skills</li>
<li><strong>Projects showcase</strong> - Portfolio of your work</li>
<li><strong>Skills</strong> - Technical competencies</li>
<li><strong>Contact information</strong> - Ways to reach you</li>
</ul>
<p>Each section requires careful planning and implementation to create a cohesive user experience.</p>
<blockquote>
<p>Remember: A great portfolio is not just about showing what you've built, but also demonstrating your thought process and problem-solving abilities.</p>
</blockquote>
<p>We'll use React Router for navigation, ensuring smooth transitions between sections. Here's a basic routing setup:</p>
<pre><code>import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;Routes&gt;
        &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
        &lt;Route path="/projects" element={&lt;Projects /&gt;} /&gt;
        &lt;Route path="/about" element={&lt;About /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  );
}</code></pre>
<p>State management will be handled with React hooks, keeping the application simple yet powerful. For more complex state, consider using Context API or a state management library like Zustand.</p>`,
    tags: mapTags(["React", "TypeScript", "Portfolio"]),
    createdAt: dateToTimestamp("2025-09-28"),
    updatedAt: dateToTimestamp("2025-09-28"),
  },
  {
    title: "Understanding React Hooks: A Comprehensive Guide",
    slug: "understanding-react-hooks-comprehensive-guide",
    content: `<h1>Understanding React Hooks: A Comprehensive Guide</h1>
<p>React Hooks revolutionized how we write React components. Introduced in React 16.8, hooks allow us to use state and other React features in functional components, making our code more reusable and easier to understand.</p>
<h2>What Are Hooks?</h2>
<p>Hooks are special functions that let you "hook into" React features. They enable functional components to have state, side effects, context, and more. The most commonly used hooks are <strong>useState</strong> and <strong>useEffect</strong>, but React provides many others.</p>
<p>Before hooks, we had to use class components to manage state and lifecycle methods. Hooks eliminate this need, allowing us to write everything as functional components while maintaining all the power of React.</p>
<p><img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cmVhY3R8fHx8fDE2MzQ0MjY5MzA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="React hooks in action"></p>
<h2>useState Hook</h2>
<p>The <code>useState</code> hook is the most fundamental hook. It allows functional components to have state. When you call useState, it returns an array with two elements: the current state value and a function to update it.</p>
<p>State updates trigger re-renders, but React is smart about when to actually update the DOM. This makes React applications performant even with frequent state changes.</p>
<h2>useEffect Hook</h2>
<p>The <code>useEffect</code> hook handles side effects in functional components. It's similar to componentDidMount, componentDidUpdate, and componentWillUnmount combined. You can use it to fetch data, set up subscriptions, or manually change the DOM.</p>
<p>The dependency array is crucial for useEffect. It determines when the effect runs. An empty array means it runs only once on mount, while including values means it runs when those values change.</p>
<h2>Custom Hooks</h2>
<p>One of the most powerful features of hooks is the ability to create custom hooks. This allows you to extract component logic into reusable functions. Custom hooks follow the naming convention of starting with "use".</p>
<p>Custom hooks enable code reuse across components, making your codebase more maintainable. They can encapsulate complex logic, making components cleaner and easier to understand.</p>`,
    tags: mapTags(["React", "Hooks", "JavaScript"]),
    createdAt: dateToTimestamp("2025-09-20"),
    updatedAt: dateToTimestamp("2025-09-20"),
  },
  {
    title: "TypeScript Best Practices for Modern Applications",
    slug: "typescript-best-practices-modern-applications",
    content: `<h1>TypeScript Best Practices for Modern Applications</h1>
<p>TypeScript has become the standard for building large-scale JavaScript applications. Its type system helps catch errors early, improves code documentation, and enhances developer experience. However, to truly benefit from TypeScript, you need to follow best practices.</p>
<h2>Type Safety First</h2>
<p>Always prefer explicit types over implicit ones. While TypeScript can infer types in many cases, being explicit makes your code more readable and helps catch errors. Use interfaces for object shapes and type aliases for unions and intersections.</p>
<p>Avoid using <code>any</code> type. It defeats the purpose of using TypeScript. Instead, use <code>unknown</code> when you truly don't know the type, and then narrow it down with type guards.</p>
<p><img src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dHlwZXNjcmlwdHx8fHx8fDE2MzQ0MjY5MzA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="TypeScript code on screen"></p>
<h2>Interface vs Type</h2>
<p>Understanding when to use interfaces versus type aliases is important. Interfaces are better for object shapes that might be extended or merged. Type aliases are better for unions, intersections, and computed types.</p>
<p>Interfaces support declaration merging, which can be useful in certain scenarios. However, type aliases are more flexible for complex type operations.</p>
<h2>Generics and Reusability</h2>
<p>Generics allow you to create reusable components and functions. They enable you to write code that works with multiple types while maintaining type safety. Use generics when you want to create flexible, reusable code.</p>
<p>Common patterns include generic functions, generic interfaces, and generic classes. Understanding constraints and default type parameters will help you write more sophisticated generic code.</p>
<h2>Utility Types</h2>
<p>TypeScript provides many utility types that can help you manipulate types. Common ones include <code>Partial</code>, <code>Required</code>, <code>Pick</code>, <code>Omit</code>, and <code>Record</code>. These utilities can save you from writing repetitive type definitions.</p>
<p>For example, <code>Partial&lt;T&gt;</code> makes all properties of T optional, which is useful when you need to update only some properties of an object. <code>Pick&lt;T, K&gt;</code> selects specific properties from a type, while <code>Omit&lt;T, K&gt;</code> removes them.</p>`,
    tags: mapTags(["TypeScript", "Best Practices", "Programming"]),
    createdAt: dateToTimestamp("2025-09-15"),
    updatedAt: dateToTimestamp("2025-09-15"),
  },
  {
    title: "CSS Grid vs Flexbox: When to Use Which",
    slug: "css-grid-vs-flexbox-when-to-use-which",
    content: `<h1>CSS Grid vs Flexbox: When to Use Which</h1>
<p>CSS Grid and Flexbox are two powerful layout systems in CSS, each with its own strengths. Understanding when to use which can significantly improve your layout code and make it more maintainable.</p>
<h2>Understanding Flexbox</h2>
<p>Flexbox is a one-dimensional layout method. It's designed for laying out items in a single direction - either as a row or a column. It excels at distributing space and aligning items within a container.</p>
<p>Flexbox is perfect for navigation bars, centering content, and creating flexible components. It handles alignment and distribution of space beautifully, making it ideal for component-level layouts.</p>
<p><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3NzfHx8fHx8MTYzNDQyNjkzMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="CSS layout examples"></p>
<h2>Understanding CSS Grid</h2>
<p>CSS Grid is a two-dimensional layout system. It allows you to work with rows and columns simultaneously, making it perfect for complex page layouts. Grid gives you precise control over both dimensions.</p>
<p>Grid is ideal for overall page layouts, card grids, and any scenario where you need to align items in both directions. It's more powerful for complex layouts but can be overkill for simple one-dimensional layouts.</p>
<h2>When to Use Flexbox</h2>
<p>Use Flexbox when you need to align items in a single direction. Common use cases include:</p>
<ul>
<li>Navigation menus</li>
<li>Form controls</li>
<li>Centering content</li>
<li>Component-level styling</li>
</ul>
<p>If you're working on component-level styling or need to distribute space along one axis, Flexbox is usually the better choice. It's also better supported in older browsers if that's a concern.</p>
<h2>When to Use CSS Grid</h2>
<p>Use CSS Grid for two-dimensional layouts where you need control over both rows and columns. Page layouts, complex card grids, and dashboard-style interfaces are perfect candidates for Grid.</p>
<p>Grid is also excellent when you need items to span multiple rows or columns, or when you need precise control over the sizing and positioning of grid items.</p>
<h2>Combining Both</h2>
<p>The best approach is often to use both together. Use Grid for the overall page layout, and Flexbox for individual components within grid items. This combination gives you the best of both worlds.</p>
<p>For example, you might use Grid to create a three-column page layout, then use Flexbox within each column to align the content. This approach is both powerful and maintainable.</p>`,
    tags: mapTags(["CSS", "Grid", "Flexbox", "Web Design"]),
    createdAt: dateToTimestamp("2025-09-10"),
    updatedAt: dateToTimestamp("2025-09-10"),
  },
  {
    title: "Performance Optimization in React Applications",
    slug: "performance-optimization-react-applications",
    content: `<h1>Performance Optimization in React Applications</h1>
<p>Performance is crucial for user experience. A slow application can drive users away, regardless of how great the features are. React provides many tools and techniques to optimize performance, but knowing when and how to use them is key.</p>
<h2>Understanding React Rendering</h2>
<p>React renders components when their state or props change. However, unnecessary re-renders can hurt performance. Understanding when components re-render and how to prevent unnecessary renders is fundamental to optimization.</p>
<p>React's reconciliation algorithm is efficient, but it's not magic. Large component trees or frequent updates can still cause performance issues. The key is to minimize unnecessary work.</p>
<p><img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyZm9ybWFuY2V8fHx8fDE2MzQ0MjY5MzA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="Performance metrics dashboard"></p>
<h2>Memoization Techniques</h2>
<p><strong>React.memo</strong> prevents re-renders when props haven't changed. <code>useMemo</code> caches expensive computations, and <code>useCallback</code> memoizes functions. These hooks are powerful but should be used judiciously.</p>
<p>Overusing memoization can actually hurt performance due to the overhead of comparison. Use these tools when you have identified actual performance problems, not preemptively.</p>
<h2>Code Splitting</h2>
<p>Code splitting allows you to split your bundle into smaller chunks that can be loaded on demand. <code>React.lazy</code> and <code>Suspense</code> make this straightforward. This reduces the initial bundle size and improves load times.</p>
<p>Route-based code splitting is the most common approach. Each route loads only the code it needs, significantly reducing the initial bundle size. This is especially important for large applications.</p>
<h2>Virtualization</h2>
<p>For long lists, virtualization can dramatically improve performance. Libraries like <code>react-window</code> render only the visible items, reducing the number of DOM nodes and improving scroll performance.</p>
<p>Virtualization is essential when rendering hundreds or thousands of items. Without it, the browser can struggle with the large number of DOM nodes, causing janky scrolling and slow interactions.</p>
<h2>Profiling and Measurement</h2>
<p>Before optimizing, measure. React DevTools Profiler helps identify performance bottlenecks. Use it to find components that render frequently or take a long time to render.</p>
<blockquote>
<p>Performance optimization should be data-driven. Don't guess what's slow - measure it. The profiler provides concrete data about render times and frequency, guiding your optimization efforts.</p>
</blockquote>`,
    tags: mapTags(["React", "Performance", "Optimization"]),
    createdAt: dateToTimestamp("2025-09-05"),
    updatedAt: dateToTimestamp("2025-09-05"),
  },
  {
    title: "Building Accessible Web Applications",
    slug: "building-accessible-web-applications",
    content: `<h1>Building Accessible Web Applications</h1>
<p>Accessibility isn't optional - it's essential. Building accessible web applications ensures that everyone can use your product, regardless of their abilities. It's also good for SEO and often required by law.</p>
<h2>Why Accessibility Matters</h2>
<p>Over a billion people worldwide have some form of disability. Many of these disabilities affect how people interact with websites. By building accessible applications, you're including a significant portion of the population.</p>
<p>Accessibility also benefits everyone. Features like keyboard navigation, clear labels, and good contrast help all users, not just those with disabilities. It's good design, not just compliance.</p>
<p><img src="https://images.unsplash.com/photo-1573164713714-d95e436fb8e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YWNjZXNzaWJpbGl0eXx8fHx8fDE2MzQ0MjY5MzA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="Accessibility features illustration"></p>
<h2>Semantic HTML</h2>
<p>Using semantic HTML is the foundation of accessibility. Semantic elements like <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;section&gt;</code> provide meaning to screen readers and other assistive technologies.</p>
<p>Avoid div soup. Every element should have a purpose. Headings should be in order (h1, h2, h3), forms should have proper labels, and interactive elements should be keyboard accessible.</p>
<h2>ARIA Attributes</h2>
<p>ARIA (Accessible Rich Internet Applications) attributes provide additional information to assistive technologies. Use them when semantic HTML isn't sufficient, but prefer semantic HTML when possible.</p>
<p>Common ARIA attributes include:</p>
<ul>
<li><code>aria-label</code> for accessible names</li>
<li><code>aria-describedby</code> for additional descriptions</li>
<li><code>aria-hidden</code> to hide decorative elements from screen readers</li>
</ul>
<h2>Keyboard Navigation</h2>
<p>All interactive elements must be keyboard accessible. Users should be able to navigate your entire application using only the keyboard. This includes proper focus management and visible focus indicators.</p>
<p>Tab order should be logical and follow the visual flow of the page. Skip links can help users navigate past repetitive content like navigation menus.</p>
<h2>Color and Contrast</h2>
<p>Color shouldn't be the only way to convey information. Always provide text labels or icons in addition to color. Ensure sufficient contrast between text and background colors.</p>
<p>WCAG guidelines specify minimum contrast ratios. Text should have at least 4.5:1 contrast ratio for normal text and 3:1 for large text. Tools like WebAIM's contrast checker can help verify this.</p>`,
    tags: mapTags(["Accessibility", "Web Standards", "UX"]),
    createdAt: dateToTimestamp("2025-08-28"),
    updatedAt: dateToTimestamp("2025-08-28"),
  },
  {
    title: "State Management in React: Context API vs Redux",
    slug: "state-management-react-context-api-vs-redux",
    content: `<h1>State Management in React: Context API vs Redux</h1>
<p>State management is one of the most important decisions when building React applications. The choice between Context API and Redux can significantly impact your application's architecture and maintainability.</p>
<h2>Understanding State Management</h2>
<p>State management involves storing and updating application data. In React, you can manage state locally in components, lift it up to parent components, or use a global state management solution.</p>
<p>The right approach depends on your application's size, complexity, and requirements. Small applications might not need global state management, while large applications almost certainly do.</p>
<p><img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c3RhdGV8fHx8fDE2MzQ0MjY5MzA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="State management diagram"></p>
<h2>Context API</h2>
<p>Context API is React's built-in solution for sharing state across components. It's simple to use and doesn't require additional dependencies. For many applications, Context API is sufficient.</p>
<p>Context is great for theme settings, user authentication, and other global values that don't change frequently. However, it can cause performance issues if overused, as all consumers re-render when context value changes.</p>
<h2>Redux</h2>
<p>Redux is a powerful state management library with a large ecosystem. It provides predictable state updates through actions and reducers, and excellent developer tools for debugging.</p>
<p>Redux is ideal for complex applications with lots of state interactions. It enforces a unidirectional data flow and makes state changes predictable and debuggable. However, it comes with boilerplate and a learning curve.</p>
<h2>When to Use Context API</h2>
<p>Use Context API for simple global state that doesn't change frequently. Theme, user preferences, and authentication state are good candidates. It's also perfect when you want to avoid adding dependencies.</p>
<p>If your state updates are infrequent and your component tree isn't too deep, Context API is likely sufficient. It's simpler and has less overhead than Redux.</p>
<h2>When to Use Redux</h2>
<p>Use Redux when you have complex state logic, frequent state updates, or need time-travel debugging. Large applications with many state interactions benefit from Redux's structure and tooling.</p>
<p>Redux is also better when you need middleware for side effects, want to use Redux Toolkit for simplified setup, or need to integrate with a large ecosystem of Redux-compatible libraries.</p>
<h2>Modern Alternatives</h2>
<p>Today, there are many state management solutions. Zustand offers a simple, lightweight alternative. Jotai and Recoil provide atomic state management. Each has its strengths, so choose based on your needs.</p>
<blockquote>
<p>The key is to start simple and add complexity only when needed. Don't over-engineer your state management from the start.</p>
</blockquote>`,
    tags: mapTags(["React", "Redux", "State Management"]),
    createdAt: dateToTimestamp("2025-08-20"),
    updatedAt: dateToTimestamp("2025-08-20"),
  },
];
