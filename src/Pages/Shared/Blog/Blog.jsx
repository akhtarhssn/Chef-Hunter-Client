import React, { useRef } from "react";
import ReactToPdf from "react-to-pdf";

const Blog = () => {
  const ref = useRef();
  return (
    <div ref={ref}>
      <div className=" flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400 bg-opacity-80 h-full md:h-52 ">
        <h1 className="text-3xl font-bold py-10 text-center underline underline-offset-8 decoration-blue-500">
          Blogs
        </h1>
      </div>
      <div className="text-center mt-10">
        <button className="px-5 border-2 border-blue-500 py-3 rounded">
          <ReactToPdf targetRef={ref} filename="blog-page.pdf">
            {({ toPdf }) => <a onClick={toPdf}>Download PDF</a>}
          </ReactToPdf>
        </button>
      </div>
      <div className="my-16">
        <div className="container mx-auto p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="border rounded-md p-5">
              <h4 className="text-lg font-semibold">
                Question: Tell us the differences between uncontrolled and
                controlled components.
              </h4>
              <p className="text-gray-500 my-5">
                {" "}
                Controlled Component refers to components which is controlled by
                their parent component. Parent Component update their behaviour.
                Where as Uncontrolled component refers to component that manage
                their own state. They do not depened on any other component or
                do not have any parent component
              </p>
            </div>
            <div className="border rounded-md p-5">
              <h4 className="text-lg font-semibold">
                Question: How to validate React props using PropTypes
              </h4>
              <p className="text-gray-500 my-5">
                {" "}
                To use PropTypes, you first need to import it from the
                "prop-types" package. Then, you can define the PropTypes for
                your component by creating a static "propTypes" object. You can
                define the type and shape of each prop, and whether it is
                required or not.
              </p>
            </div>
            <div className="border rounded-md p-5">
              <h4 className="text-lg font-semibold">
                Question: Tell us the difference between nodejs and express js.
              </h4>
              <p className="text-gray-500 my-5">
                {" "}
                Node.js is a server-side JavaScript runtime environment which is
                used to build scalable and high-performance applications. On the
                other hand Express.js is a Node.js web application framework
                which is used to build web applications and APIs.
              </p>
            </div>
            <div className="border rounded-md p-5">
              <h4 className="text-lg font-semibold">
                Question: What is a custom hook, and why will you create a
                custom hook?
              </h4>
              <p className="text-gray-500 my-5">
                {" "}
                A custom hook is a reusable function in React that encapsulates
                stateful logic and can be shared across multiple components.
                <br />
                By using custom hooks, we can create more reusable and
                maintainable code, which can improve productivity and reduce the
                likelihood of errors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
