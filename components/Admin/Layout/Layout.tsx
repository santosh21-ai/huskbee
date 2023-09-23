import {
  Bars4Icon,
  ChevronDownIcon,
  ClockIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDoubleRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Fragment, ReactNode, useEffect, useState } from "react";
import TopNavbar, { ProfileDropDownList } from "./TopNavbar";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: "Home", href: "/admin/home", icon: HomeIcon, current: true },
  {
    name: "Organiser List",
    href: "/admin/organiser-list",
    icon: Bars4Icon,
    current: false,
  },
  {
    name: "Huskbee Users",
    href: "/admin/users",
    icon: UsersIcon,
    current: false,
  },
  {
    name: "Recent activity",
    href: "/admin/rcent-activity",
    icon: ClockIcon,
    current: false,
  },
];
const crowd_funding = [
  {
    name: "Fundraiser List",
    href: "/admin/fundraiser-list",
    bgColorClass: "bg-indigo-500",
  },
  { name: "Donors", href: "/admin/donor-list", bgColorClass: "bg-green-500" },
  {
    name: "All donations",
    href: "/admin/all-donations",
    bgColorClass: "bg-red-500",
  },
  { name: "Issues and Report", href: "#", bgColorClass: "bg-yellow-500" },
  {
    name: "Analytics",
    href: "/admin/all-donations",
    bgColorClass: "bg-red-500",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Layout = ({
  children,
  pageTitle,
}: {
  children: ReactNode;
  pageTitle: string;
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
    const el = document.querySelector("html") as HTMLElement | null;
    el != null ? el.classList.add("bg-gray-100") : "";
  }, []);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
          key="scale"
        />
        {/* <!-- this sets the color of url bar in Apple smatphones --> */}
        {/* <meta name="apple-mobile-web-app-status-bar" content="#0f172a" /> */}
        <meta name="apple-mobile-web-app-status-bar" content="#0f172a" />
      </Head>
      <div className="min-h-full bg-gray-100">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-100">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 flex items-center px-4">
                  <div className="flex gap-x-2">
                    <img
                      className="h-8 w-auto"
                      src="/logo/axewhy-colorful-logo.png"
                      alt="HuskBee"
                    />
                    <span className="text-gray-800 text-3xl font-bold uppercase">
                      huskbee
                    </span>
                  </div>
                </div>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2">
                    <div className="space-y-1">
                      {navigation.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <span
                            key={item.name}
                            className={classNames(
                              item.current
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                              "group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            <item.icon
                              className={classNames(
                                item.current
                                  ? "text-gray-500"
                                  : "text-gray-400 group-hover:text-gray-500",
                                "mr-3 flex-shrink-0 h-6 w-6"
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-8">
                      <h3
                        className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                        id="mobile-teams-headline"
                      >
                        Funraiser
                      </h3>
                      <div
                        className="mt-1 space-y-1"
                        role="group"
                        aria-labelledby="mobile-teams-headline"
                      >
                        {crowd_funding.map((item) => (
                          <Link key={item.name} href={item.href}>
                            <span className="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                              <span
                                className={classNames(
                                  item.bgColorClass,
                                  "w-2.5 h-2.5 mr-4 rounded-full"
                                )}
                                aria-hidden="true"
                              />
                              <span className="truncate">{item.name}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100">
          <div className=" items-center flex-shrink-0 px-6">
            <div className="flex gap-x-2">
              <img
                className="h-8 w-auto"
                src="/logo/axewhy-colorful-logo.png"
                alt="HuskBee"
              />
              <span className="text-gray-800 text-3xl font-bold uppercase">
                huskbee
              </span>
            </div>

            <span className="items-center text-sm ml-14 text-blue-700">
              (For offfice admin)
            </span>
          </div>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="mt-6 h-0 flex-1 flex flex-col overflow-y-auto">
            {/* Navigation */}
            <nav className="px-3 mt-6">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <span
                      key={item.name}
                      className={classNames(
                        router.pathname === item.href
                          ? "bg-gray-200 text-gray-900"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-50",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      )}
                      aria-current={
                        router.pathname === item.href ? "page" : undefined
                      }
                    >
                      <item.icon
                        className={classNames(
                          router.pathname === item.href
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                {/* Secondary navigation */}
                <h3
                  className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                  id="desktop-teams-headline"
                >
                  Crowd Funding
                </h3>
                <div
                  className="mt-1 space-y-1"
                  role="group"
                  aria-labelledby="desktop-teams-headline"
                >
                  {crowd_funding.map((content) => (
                    <Link key={content.name} href={content.href}>
                      <span
                        className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-50 ${
                          router.pathname === content.href
                            ? "bg-gray-200 text-gray-900"
                            : "text-gray-700 hover:text-gray-900 "
                        }`}
                      >
                        <span
                          className={classNames(
                            content.bgColorClass,
                            "w-2.5 h-2.5 mr-4 rounded-full"
                          )}
                          aria-hidden="true"
                        />
                        <span className="truncate">{content.name}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Main column */}
        <div className="lg:pl-64 flex flex-col">
          {/* Search header */}
          <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars4Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-1 flex justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex-1 flex">
                <form className="w-full flex md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                      <MagnifyingGlassIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search-field"
                      name="search-field"
                      className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </form>
              </div>
              <div className="flex items-center">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <ProfileDropDownList />
                </Menu>
              </div>
            </div>
          </div>
          <main className="flex-1">
            <TopNavbar pageTitle={pageTitle} />
            {children}
          </main>
        </div>
      </div>{" "}
    </>
  );
};

export default Layout;
