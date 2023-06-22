import { Card } from "flowbite-react";
import React from "react";

const Terms = ({ setOpen, open }) => {
  return (
    <div
      className={`max-w-3xl  container mx-auto fixed top-20 left-0 right-0 rounded-lg ${
        open ? "translate-y-full bottom-0" : "translate-y-0"
      } transition-transform duration-700 bg-white`}
    >
      <Card>
        <h5
          className={`mb-2 text-3xl font-bold text-gray-900 dark:text-white text-center`}
        >
          Our Terms and Conditions
        </h5>
        <strong>Lorem, ipsum dolor.</strong>
        <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
          Voluptate error quidem numquam libero asperiores pariatur, eos
          consectetur explicabo, cum tempore odio? Ipsum iure minus perspiciatis
          ad, consequatur ipsam dolore autem expedita nam dolorem tenetur
          architecto iste ipsa veniam, similique atque, praesentium laborum
          error qui alias in illo. Illo sequi nulla labore itaque quos corporis
          tempora voluptas tempore assumenda, ex, deserunt debitis cumque magnam
          et omnis placeat vel officia.
        </p>
        <strong>Lorem, ipsum dolor.</strong>
        <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quam?
          Unde sint deleniti quisquam animi distinctio eveniet voluptates eos
          numquam, corporis dolor repellendus magnam culpa provident facilis
          aliquam exercitationem quia beatae sit tenetur! Eveniet placeat, nisi
          beatae fuga necessitatibus quasi.
        </p>
        <strong>Lorem, ipsum dolor.</strong>
        <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quam?
          Unde sint deleniti quisquam animi distinctio eveniet voluptates eos
          numquam, corporis dolor repellendus magnam culpa provident facilis
          aliquam exercitationem quia beatae nisi beatae fuga necessitatibus
          quasi. Voluptate error quidem numquam libero asperiores pariatur, eos
          consectetur explicabo, cum tempore odio? Ipsum iure minus perspiciatis
          ad.
        </p>
        <div
          className="text-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          close
        </div>
      </Card>
    </div>
  );
};

export default Terms;
