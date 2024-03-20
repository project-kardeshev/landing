import { useState } from 'react';

import './App.css';

function App() {
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 dark:bg-gray-800 px-4 py-2.5 lg:px-6">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
            <a href="#" className="flex items-center">
              <span className="dark:text-white self-center whitespace-nowrap text-xl font-semibold font-d-heavy">
                Project Kardeshev.
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              <a
                href="https://app_project-kardeshev.arweave.dev/#/"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mr-2 rounded-lg px-4 py-2 text-sm font-medium focus:outline-none focus:ring-4 lg:px-5 lg:py-2.5"
              >
                Launch
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-1 inline-flex items-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 lg:hidden"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
              id="mobile-menu-2"
            >
              <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                <li>
                  <a
                    href="https://app_project-kardeshev.arweave.dev/#/about"
                    className="text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-green-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 block border-b py-2 pl-3 pr-4 lg:border-0 lg:p-0"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-green-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 block border-b py-2 pl-3 pr-4 lg:border-0 lg:p-0"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#roadmap"
                    className="text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-green-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 block border-b py-2 pl-3 pr-4 lg:border-0 lg:p-0"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <iframe src="https://audio-renderer_project-kardeshev.arweave.dev/?tx=ichh54jepRRGgLOB0NR-CpE5-ey35BHLE2B69Lk4cUc"
          width="100%" height="100%">
        </iframe>

      </header>

      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
          <a
            href="#"
            className="text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 mb-7 inline-flex items-center justify-between rounded-full px-1 py-1 pr-4 text-sm"
            role="alert"
          >

          </a>
          <h1 className="text-gray-900 dark:text-white mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
            Knowledge Gamification.
            <br /> Incentivized Learning for All
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8 text-lg font-normal sm:px-16 lg:text-xl xl:px-48">
            Project Kardeshev's main goal is to bring knowledge to everyone by
            gamifying and incentivizing learning the real world applications and
            tooling used to create solutions, by way of engineering and other
            disciplines.
          </p>
          {/*<div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
            <a
              href="#"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:focus:ring-green-900 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium focus:ring-4"
            >
              Start now
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>*/}

        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 text-left lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
          <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2 className="text-gray-900 dark:text-white mb-4 text-4xl font-extrabold tracking-tight">
              Open World Quests: <br /> Innovative Solutions Deployed
            </h2>
            <p className="mb-4">
              Players will be able to work on their quests in an open world format.

            </p>
            <p>
              Each quest will require the player to research the issue and develop novel solutions to it. Once they have one, the product is licensed and deployed to Arweave with a UDL license.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <img
              className="w-full rounded-lg opacity-80"
              src="/assets/x1.jpg"
              alt="PK"
            />
            <img
              className="mt-4 w-full rounded-lg lg:mt-10"
              src="/assets/x2.jpg"
              alt="P.K-"
            />
          </div>
        </div>
      </section>

      <section id="roadmap" className="mb-24 mt-12">
        <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
          <h2 className="text-gray-900 dark:text-white mb-4 text-4xl font-extrabold tracking-tight">
            Roadmap
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-light sm:text-xl lg:mb-16">
            Our roadmap serves as the compass, outlining the strategic
            direction, key objectives, and critical milestones essential for
            achieving our goals. It is a dynamic document that evolves with our
            progress, adapting to changing circumstances and insights gained
            along the way.{' '}
          </p>
        </div>

        <ol className="border-gray-200 dark:border-gray-700 relative mx-auto max-w-screen-sm border-s text-left">
          <li className="mb-10 ms-4">
            <div className="bg-gray-200 border-white dark:border-gray-900 dark:bg-gray-700 absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border"></div>
            <time className="text-gray-400 dark:text-gray-500 mb-1 text-sm font-normal leading-none">
              Step 1
            </time>
            <h3 className="text-gray-900 dark:text-white text-lg font-semibold">
              Complete Whitepaper Draft
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4 text-base font-normal">
              Completing the whitepaper draws near, anticipation fills the air,
              signaling the culmination of months of research, analysis, and
              collaboration
            </p>
            <a
              href="https://app_project-kardeshev.arweave.dev/#/about"
              className="text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:ring-gray-100 focus:text-green-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-4"
            >
              Check current status{' '}
              <svg
                className="ms-2 h-3 w-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
          <li className="mb-10 ms-4">
            <div className="bg-gray-200 border-white dark:border-gray-900 dark:bg-gray-700 absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border"></div>
            <time className="text-gray-400 dark:text-gray-500 mb-1 text-sm font-normal leading-none">
              Step 2
            </time>
            <h3 className="text-gray-900 dark:text-white text-lg font-semibold">
              Release Testnet Token
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
              The Testnet Token represents a step towards realizing our
              project's goals and demonstrating its potential.{' '}
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="bg-gray-200 border-white dark:border-gray-900 dark:bg-gray-700 absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border"></div>
            <time className="text-gray-400 dark:text-gray-500 mb-1 text-sm font-normal leading-none">
              Step 3
            </time>
            <h3 className="text-gray-900 dark:text-white text-lg font-semibold">
              Dashboard
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
              The dashboard represents a collection of metrics and data; it is a
              visual representation of our project's progress and a testament to
              our commitment to transparency and accessibility.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="bg-gray-200 border-white dark:border-gray-900 dark:bg-gray-700 absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border"></div>
            <time className="text-gray-400 dark:text-gray-500 mb-1 text-sm font-normal leading-none">
              Step 4
            </time>
            <h3 className="text-gray-900 dark:text-white text-lg font-semibold">
              Bounty Protocol testnet
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
              This milestone represents a pivotal step forward in our project's
              evolution, signaling the imminent introduction of a groundbreaking
              mechanism designed to incentivize and reward community
              participation.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="bg-gray-200 border-white dark:border-gray-900 dark:bg-gray-700 absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border"></div>
            <time className="text-gray-400 dark:text-gray-500 mb-1 text-sm font-normal leading-none">
              Step 5
            </time>
            <h3 className="text-gray-900 dark:text-white text-lg font-semibold">
              Game Release Alpha
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
              Years of creativity, iteration, and collaboration have been poured
              into crafting an immersive and engaging experience for players,
              and the alpha release will be a testament to our dedication to
              delivering quality and innovation.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="bg-gray-200 border-white dark:border-gray-900 dark:bg-gray-700 absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border"></div>
            <time className="text-gray-400 dark:text-gray-500 mb-1 text-sm font-normal leading-none">
              Step 6
            </time>
            <h3 className="text-gray-900 dark:text-white text-lg font-semibold">
              Mainnet release
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
              With anticipation building among team members, stakeholders, and
              the wider community, we stand on the threshold of a new era,
              poised to unleash the full potential of our platform and embark on
              a journey of growth, adoption, and impact in the broader
              ecosystem.
            </p>
          </li>
        </ol>
      </section>

      <section id="team" className="bg-white dark:bg-gray-900 text-left">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16 ">
          <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
            <h2 className="text-gray-900 dark:text-white mb-4 text-4xl font-extrabold tracking-tight">
              Our Team
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-light sm:text-xl lg:mb-16">
              A dynamic blend of engineers, educators, and gaming enthusiasts,
              united by a common goal: democratizing knowledge access through
              innovative technology.{' '}
            </p>
          </div>
          <div className="mb-6 grid gap-8 md:grid-cols-2 lg:mb-16">
            <div className="bg-gray-50 dark:bg-gray-800 dark:border-gray-700 items-center rounded-lg shadow sm:flex">
              <a href="#">
                <img
                  className="w-82 rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://avatars.githubusercontent.com/u/388476?v=4"
                  alt="2n Avatar"
                />
              </a>
              <div className="p-5">
                <h3 className="text-gray-900 dark:text-white text-xl font-bold tracking-tight font-d-heavy">
                  <a href="#">2n1u0</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Interplanetary Product Manager
                </span>
                <p className="text-gray-500 dark:text-gray-400 mb-4 mt-3 font-light">
                  Drives the product like an electric Ferrari, while bringing the
                  experience of a combustion engineer.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a
                      href="https://twitter.com/2n1u0"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      target="_blank"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/lopezi"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      target="_blank"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                </ul>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 dark:border-gray-700 items-center rounded-lg shadow sm:flex">
              <a href="#">
                <img
                  className="w-80 rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/assets/louis.png"
                  alt="LF"
                />
              </a>
              <div className="p-5">
                <h3 className="text-gray-900 dark:text-white text-xl font-bold tracking-tight font-d-heavy ">
                  <a href="#">Louis Bellier</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Growth hacker</span>
                <p className="text-gray-500 dark:text-gray-400 mb-4 mt-3 font-light">
                  Senior Marketer & Growth at Project Kardeshev. Blockchain Utility Fan & AI Open data activist.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a
                      href="https://twitter.com/growthlouis"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      target="_blank"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>

                </ul>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 dark:border-gray-700 items-center rounded-lg shadow sm:flex">
              <a href="#">
                <img
                  className="w-80 rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://avatars.githubusercontent.com/u/85306700?v=4"
                  alt="Founder"
                />
              </a>
              <div className="p-5">
                <h3 className="text-gray-900 dark:text-white text-xl font-bold tracking-tight font-d-heavy">
                  <a href="#">Atticus</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Founder
                </span>
                <p className="text-gray-500 dark:text-gray-400 mb-4 mt-3 font-light">
                  Full stack everythinger expanding the frontier of decentralization.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a
                      href="https://twitter.com/SanOfABee"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      target="_blank"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/atticusofsparta"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      target="_blank"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                </ul>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 dark:border-gray-700 items-center rounded-lg shadow sm:flex">
              <a href="#">
                <img
                  className="w-52 rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://avatars.githubusercontent.com/u/163219806?s=48&v=4"
                  alt="Stephan"
                />
              </a>
              <div className="p-5">
                <h3 className="text-gray-900 dark:text-white text-xl font-bold tracking-tight font-d-heavy ">
                  <a href="#">Stephan</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Mystery man
                </span>
                <p className="text-gray-500 dark:text-gray-400 mb-4 mt-3 font-light">
                  Stephan is doing what cannot be revealed.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a
                      href="https://twitter.com/stephencodes42"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      target="_blank"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/bobinstein"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      target="_blank"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white dark:bg-gray-800 p-4 sm:p-6">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <span className="dark:text-white self-center whitespace-nowrap text-2xl font-semibold font-d-heavy">
                  Kardeshev
                </span>
              </a>
            </div>
            {/*<div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
              <div>
                <h2 className="text-gray-900 dark:text-white mb-6 text-sm font-semibold uppercase">
                  Resources
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Cookbook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      How to do it
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-gray-900 dark:text-white mb-6 text-sm font-semibold uppercase">
                  Come Home
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline ">
                      101 xyi
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:underline">
                      Magnetics
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-gray-900 dark:text-white mb-6 text-sm font-semibold uppercase">
                  Be there
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      Slack
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline ">
                      Farcaster
                    </a>
                  </li>
                </ul>
              </div>
            </div>*/}
          </div>
          <hr className="border-gray-200 dark:border-gray-700 my-6 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-center">
              © 2024{' '}
              <a href="#" className="hover:underline">
                Kardeshev
              </a>
              . All Rights Reserved.
            </span>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">

              <a
                href="https://github.com/project-kardeshev/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
