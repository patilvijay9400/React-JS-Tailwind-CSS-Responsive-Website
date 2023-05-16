import React from "react";

const Work = () => {
  return (
    <>
      <div className="flex ps-12 pr-36 mt-28">
        <div className="w-7/12">
          <img src="./images/features.svg" alt="feature" />
        </div>
        <div className="w-4/12">
          <span className="font-semibold text-base text-2c2c2c">Work with</span>
          <h2 className="font-semibold text-4xl primary-text mt-2">
            Easy customize Becca with new features for your app.
          </h2>

          <div
            className="mt-14"
            id="accordion-collapse"
            data-accordion="collapse"
          >
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                class="flex items-center justify-between w-full py-5 font-semibold text-left text-c2c2c2 border-2 border-b-[#9b5aff]"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
              >
                <span>Integration</span>
                <svg
                  data-accordion-icon
                  class="w-6 h-6 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div class="py-5">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem Ipsum estibulum blandit libero at mauris condi me ntum
                  males uada scelerisque in mauris ut malda.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-2">
              <button
                type="button"
                class="flex items-center justify-between w-full py-5 font-semibold text-left text-c2c2c2 border-2 border-b-[#9b5aff]"
                data-accordion-target="#accordion-collapse-body-2"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-2"
              >
                <span>Intelligent optimizations</span>
                <svg
                  data-accordion-icon
                  class="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-2"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-2"
            >
              <div class="py-5">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem Ipsum estibulum blandit libero at mauris condi me ntum
                  males uada scelerisque in mauris ut malda.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                class="flex items-center justify-between w-full py-5 font-semibold text-left text-c2c2c2 border-2 border-b-[#9b5aff]"
                data-accordion-target="#accordion-collapse-body-3"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-3"
              >
                <span>Data formating</span>
                <svg
                  data-accordion-icon
                  class="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-3"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-3"
            >
              <div class="py-5">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem Ipsum estibulum blandit libero at mauris condi me ntum
                  males uada scelerisque in mauris ut malda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Work;
