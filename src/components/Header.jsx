import React from "react";

export default function Header() {
  return (
    <>
      <nav className="bg-purple-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hover:scale-125 transition-all ease-in-out ">
              <svg
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                width="208"
                height="50"
                viewBox="0 0 408 77"
                fill="none"
                class="width-auto"
                aria-label="ForTomorrow logo"
                role="presentation"
              >
                <g fill="#502C9E">
                  <path
                    d="M57.574 19.666C57.574 9.265 49.115.833 38.681.833S19.787 9.265 19.787 19.666c10.435 0 18.894 8.432 18.894 18.833 10.435 0 18.894-8.432 18.894-18.833z"
                    fill="#502C9E"
                  ></path>
                  <path
                    d="M38.681 38.5c-10.435 0-18.894 8.432-18.894 18.833s8.459 18.833 18.894 18.833 18.894-8.432 18.894-18.833c-10.435 0-18.894-8.432-18.894-18.833z"
                    fill="#502C9E"
                  ></path>
                </g>
                <g fill="#7FDF95">
                  <path
                    d="M38.681 38.5c-10.435 0-18.894 8.432-18.894 18.833C9.353 57.334.894 48.902.894 38.5s8.459-18.833 18.894-18.833S38.681 28.099 38.681 38.5z"
                    fill="#7FDF95"
                  ></path>
                  <path
                    d="M38.681 38.5c0 10.401 8.459 18.833 18.894 18.833S76.468 48.902 76.468 38.5s-8.459-18.833-18.894-18.833c0 10.401-8.459 18.833-18.894 18.833z"
                    fill="#7FDF95"
                  ></path>
                </g>
                <path
                  d="M98.316 57.333h-6.469V19.717h21.078v5.857H98.316v9.565h13.639v5.858H98.316v16.336zm31.161-26.976c2.013 0 3.881.358 5.607 1.075s3.216 1.702 4.474 2.956c1.258 1.218 2.228 2.669 2.911 4.353.719 1.684 1.078 3.493 1.078 5.427s-.359 3.744-1.078 5.428c-.683 1.684-1.653 3.153-2.911 4.407-1.258 1.218-2.749 2.185-4.474 2.902s-3.594 1.075-5.607 1.075-3.882-.358-5.607-1.075-3.216-1.684-4.474-2.902a13.81 13.81 0 0 1-2.965-4.407c-.683-1.684-1.024-3.493-1.024-5.428s.341-3.744 1.024-5.427c.719-1.684 1.707-3.135 2.965-4.353 1.258-1.254 2.749-2.239 4.474-2.956s3.594-1.075 5.607-1.075zm0 5.696c-1.114 0-2.156.215-3.127.645a8.54 8.54 0 0 0-2.48 1.72c-.683.717-1.24 1.576-1.671 2.58-.395 1.003-.593 2.06-.593 3.17a8.72 8.72 0 0 0 .593 3.224c.431.967.988 1.809 1.671 2.526a8.56 8.56 0 0 0 2.48 1.72c.971.43 2.013.645 3.127.645s2.138-.215 3.073-.645a7.68 7.68 0 0 0 2.48-1.72c.718-.717 1.276-1.558 1.671-2.526a8.08 8.08 0 0 0 .647-3.224c0-1.111-.216-2.167-.647-3.17-.395-1.003-.953-1.863-1.671-2.58a7.68 7.68 0 0 0-2.48-1.72c-.935-.43-1.959-.645-3.073-.645zm34.209.914c-.287-.143-.827-.215-1.617-.215-2.3 0-4.115.824-5.445 2.472-1.294 1.612-1.941 3.78-1.941 6.502v11.607h-6.199V31.002h6.145v4.514a7.74 7.74 0 0 1 3.127-3.654 8.55 8.55 0 0 1 4.744-1.397c.683 0 1.078.054 1.186.161v6.341zm-.29-17.25h27.44v5.965h-10.459v31.652h-6.523V25.682h-10.458v-5.965zm39.394 10.64c2.013 0 3.882.358 5.607 1.075s3.216 1.702 4.474 2.956c1.258 1.218 2.228 2.669 2.911 4.353.719 1.684 1.079 3.493 1.079 5.427s-.36 3.744-1.079 5.428c-.683 1.684-1.653 3.153-2.911 4.407-1.258 1.218-2.749 2.185-4.474 2.902s-3.594 1.075-5.607 1.075-3.881-.358-5.607-1.075-3.216-1.684-4.474-2.902a13.81 13.81 0 0 1-2.965-4.407c-.683-1.684-1.024-3.493-1.024-5.428s.341-3.744 1.024-5.427c.719-1.684 1.707-3.135 2.965-4.353 1.258-1.254 2.749-2.239 4.474-2.956s3.594-1.075 5.607-1.075zm0 5.696c-1.114 0-2.156.215-3.127.645a8.54 8.54 0 0 0-2.48 1.72c-.682.717-1.239 1.576-1.671 2.58-.395 1.003-.593 2.06-.593 3.17a8.72 8.72 0 0 0 .593 3.224c.432.967.989 1.809 1.671 2.526a8.56 8.56 0 0 0 2.48 1.72c.971.43 2.013.645 3.127.645s2.138-.215 3.073-.645a7.68 7.68 0 0 0 2.48-1.72 7.56 7.56 0 0 0 1.671-2.526 8.08 8.08 0 0 0 .647-3.224c0-1.111-.216-2.167-.647-3.17a7.44 7.44 0 0 0-1.671-2.58 7.68 7.68 0 0 0-2.48-1.72c-.935-.43-1.959-.645-3.073-.645zm25.26 21.28h-6.253V31.002h6.253v3.493a8.22 8.22 0 0 1 2.965-3.009c1.258-.752 2.786-1.128 4.583-1.128 1.904 0 3.54.43 4.905 1.29s2.408 2.06 3.127 3.6c.36-.645.809-1.254 1.348-1.827.575-.573 1.222-1.093 1.941-1.558s1.527-.824 2.426-1.075c.934-.287 1.958-.43 3.072-.43 3.055 0 5.409.985 7.063 2.956 1.689 1.935 2.533 4.55 2.533 7.846v16.175h-6.253V42.34c0-1.935-.431-3.457-1.294-4.568-.863-1.146-2.12-1.72-3.774-1.72-1.689 0-3.055.645-4.097 1.935-1.006 1.254-1.527 2.956-1.563 5.105v14.24h-6.254V42.555c0-2.042-.431-3.636-1.294-4.783s-2.12-1.72-3.773-1.72c-1.725 0-3.109.663-4.151 1.988-1.007 1.29-1.51 3.063-1.51 5.32v13.972zm52.659-26.976c2.012 0 3.881.358 5.606 1.075s3.217 1.702 4.475 2.956c1.258 1.218 2.228 2.669 2.911 4.353.719 1.684 1.078 3.493 1.078 5.427s-.359 3.744-1.078 5.428c-.683 1.684-1.653 3.153-2.911 4.407-1.258 1.218-2.75 2.185-4.475 2.902s-3.594 1.075-5.606 1.075-3.882-.358-5.607-1.075-3.217-1.684-4.474-2.902c-1.258-1.254-2.247-2.723-2.965-4.407-.683-1.684-1.025-3.493-1.025-5.428s.342-3.744 1.025-5.427c.718-1.684 1.707-3.135 2.965-4.353 1.257-1.254 2.749-2.239 4.474-2.956s3.594-1.075 5.607-1.075zm0 5.696a7.63 7.63 0 0 0-3.127.645c-.935.43-1.761 1.003-2.48 1.72-.683.717-1.24 1.576-1.671 2.58-.395 1.003-.593 2.06-.593 3.17a8.72 8.72 0 0 0 .593 3.224c.431.967.988 1.809 1.671 2.526.719.716 1.545 1.29 2.48 1.72a7.63 7.63 0 0 0 3.127.645c1.114 0 2.138-.215 3.073-.645.97-.43 1.797-1.003 2.479-1.72.719-.717 1.276-1.558 1.672-2.526a8.08 8.08 0 0 0 .646-3.224c0-1.111-.215-2.167-.646-3.17-.396-1.003-.953-1.863-1.672-2.58-.682-.716-1.509-1.29-2.479-1.72-.935-.43-1.959-.645-3.073-.645zm34.209.914c-.288-.143-.827-.215-1.617-.215-2.301 0-4.116.824-5.445 2.472-1.294 1.612-1.941 3.78-1.941 6.502v11.607h-6.2V31.002h6.146v4.514a7.74 7.74 0 0 1 3.127-3.654c1.437-.931 3.019-1.397 4.744-1.397.683 0 1.078.054 1.186.161v6.341zm19.296 0c-.288-.143-.827-.215-1.618-.215-2.3 0-4.115.824-5.444 2.472-1.294 1.612-1.941 3.78-1.941 6.502v11.607h-6.2V31.002h6.146v4.514a7.74 7.74 0 0 1 3.127-3.654c1.437-.931 3.019-1.397 4.744-1.397.683 0 1.078.054 1.186.161v6.341zm15.649-6.61c2.012 0 3.881.358 5.606 1.075s3.217 1.702 4.475 2.956c1.258 1.218 2.228 2.669 2.911 4.353.719 1.684 1.078 3.493 1.078 5.427s-.359 3.744-1.078 5.428c-.683 1.684-1.653 3.153-2.911 4.407-1.258 1.218-2.75 2.185-4.475 2.902s-3.594 1.075-5.606 1.075-3.882-.358-5.607-1.075-3.217-1.684-4.474-2.902c-1.258-1.254-2.247-2.723-2.965-4.407-.683-1.684-1.025-3.493-1.025-5.428s.342-3.744 1.025-5.427c.718-1.684 1.707-3.135 2.965-4.353 1.257-1.254 2.749-2.239 4.474-2.956s3.594-1.075 5.607-1.075zm0 5.696a7.63 7.63 0 0 0-3.127.645c-.935.43-1.761 1.003-2.48 1.72-.683.717-1.24 1.576-1.671 2.58-.395 1.003-.593 2.06-.593 3.17a8.72 8.72 0 0 0 .593 3.224c.431.967.988 1.809 1.671 2.526.719.716 1.545 1.29 2.48 1.72a7.63 7.63 0 0 0 3.127.645c1.114 0 2.138-.215 3.073-.645.97-.43 1.797-1.003 2.479-1.72.719-.717 1.276-1.558 1.672-2.526a8.08 8.08 0 0 0 .647-3.224c0-1.111-.216-2.167-.647-3.17-.396-1.003-.953-1.863-1.672-2.58-.682-.716-1.509-1.29-2.479-1.72-.935-.43-1.959-.645-3.073-.645zm42.577 21.28l-6.199-17.787-6.254 17.787h-5.013l-9.596-26.331h6.415l6.038 17.841 6.2-17.841h4.582l6.199 17.841 6.038-17.841h6.254l-9.596 26.332h-5.068z"
                  fill="#502C9E"
                ></path>
              </svg>
            </span>
          </a>
          <a
            href="https://www.fortomorrow.eu/en/climate-subscription"
            className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
          >
            <button
              type="button"
              className=" flex focus:outline-none text-white bg-purple-950 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              Climate subscriptions
              <svg
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                focusable="false"
                class="icon icon--chevron-right "
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline
                  points="9 18 15 12 9 6"
                  stroke="#F8FFF9"
                  fill="none"
                  stroke-width="2px"
                ></polyline>
              </svg>
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </a>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 borderrounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <a
                  href="https://www.fortomorrow.eu/en/about"
                  className="block py-2 px-3 md:p-0"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="https://www.fortomorrow.eu/en/volunteering"
                  className="block py-2 px-3 md:p-0"
                >
                  Volunteering
                </a>
              </li>
              <li>
                <a
                  href="https://www.fortomorrow.eu/en/co2-offsetting-companies"
                  className="block py-2 px-3 md:p-0"
                >
                  For organizations
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
