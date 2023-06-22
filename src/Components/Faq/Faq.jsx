import { Accordion } from "flowbite-react";
import React from "react";

const Faq = () => {
  return (
    <div className="container mx-auto max-w-3xl mt-10 mb-20">
      <h2 className="my-8 text-3xl font-semibold text-center">
        Frequently Asked Question
      </h2>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>
            What is the restaurant's signature dish?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Our signature dish is the "Chef's Special" which changes on a
              daily basis. Our talented chefs create unique and delicious dishes
              using fresh, locally sourced ingredients.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                get started
              </a>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            {" "}
            Are there vegan options on the menu?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Yes, we offer several vegan options on our menu, including a
              delicious vegan burger, a vegan stir-fry, and a variety of salads.
              Our chefs are also happy to accommodate any dietary restrictions
              or preferences.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Is the restaurant family-friendly?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Absolutely! We welcome families with children and offer a kids'
              menu with a range of tasty and healthy options. We also have high
              chairs and booster seats available.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Do you take reservations?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Yes, we strongly recommend making a reservation to ensure you have
              a table reserved for your desired time. You can make a reservation
              through our website or by calling us directly.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What is the dress code for the restaurant?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              We don't have a strict dress code, but we do encourage guests to
              dress appropriately for a casual dining experience. You'll feel
              comfortable in anything from business casual to casual attire.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Can I host a private event at the restaurant?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Yes, we offer private event space for a variety of occasions,
              including birthdays, weddings, and corporate events. Our
              experienced event team can help you plan every detail of your
              event and create a memorable experience for you and your guests.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Is there parking available at the restaurant?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Yes, we have ample parking available for our guests, including a
              private parking lot and street parking. If you need assistance
              finding parking, our friendly staff is always happy to help.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Faq;
