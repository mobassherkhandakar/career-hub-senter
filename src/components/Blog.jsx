import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl my-20">Blog</h1>

      <div className="bg my-3 my-container p-4">
        <h2 className="text-2xl font-semibold ">
          1. When should you use Context API?
        </h2>
        <p className="">
          The Context API in React is used to pass data down the component tree
          without the need for explicit props, and can be useful in cases where
          we have data that needs to be accessed by multiple components at
          different levels of the component tree. It can also help avoid "prop
          drilling" and provide a global state or theme to our entire
          application. However, it is not always a replacement for prop
          drilling.
        </p>
      </div>
      <div className="bg my-3 my-container p-4">
        <h2 className="text-2xl font-semibold ">2. What is a custom hook?</h2>
        <p className="">
          A custom hook in React is a JavaScript function that allows us to
          encapsulate reusable logic that can be shared across multiple
          components. Custom hooks follow a naming convention and use built-in
          React hooks to implement functionality. They make it easy to extract
          common code from components and reuse it across the application.
        </p>
      </div>
      <div className="bg my-3 my-container p-4">
        <h2 className="text-2xl font-semibold ">
          3. What is useRef? Why we use this ?
        </h2>
        <p className="">
          useRef is a React hook that returns a mutable ref object that can be
          used to hold a reference to a DOM element or a value that persists
          across re-renders of the component. It is mainly used for accessing
          DOM nodes or storing values that should persist across re-renders but
          should not trigger a re-render when they change. It can be a powerful
          tool for optimizing performance and improving the user experience of
          your React application.
        </p>
      </div>
      <div className="bg my-3 my-container p-4">
        <h2 className="text-2xl font-semibold ">
          4. What is useMemo? Why we use this ?
        </h2>
        <p className="">
          useMemo is a React hook that allows us to memoize expensive
          computations and avoid unnecessary re-renders of components. It takes
          a function and an array of dependencies as arguments, and returns the
          previously computed value if the dependencies haven't changed. The
          main use case for useMemo is to improve the performance of our
          application by reducing the amount of work that needs to be done
          during rendering.
        </p>
      </div>
    </div>
  );
};

export default Blog;
