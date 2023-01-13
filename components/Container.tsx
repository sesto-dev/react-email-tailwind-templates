import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { Home, Table, Aperture, PlayCircle } from 'react-feather'
import Dropdown from './Dropdown'

export default function Container({ children }) {
    return (
        <div className="flex h-full">
            <NavigationBar />

            {/* <ProductMenuBar title="Pardis" /> */}

            <main
                className="flex w-full flex-1 flex-col overflow-x-hidden"
                style={{
                    height: '100vh',
                }}
            >
                <LayoutHeader />
                <div className="p-8">{children}</div>
            </main>
        </div>
    )
}

const NavigationBar = ({}) => {
    const router = useRouter()

    const activeRoute = router.pathname.split('/')[3]

    const toolRoutes = [
        {
            key: 'HOME',
            label: 'Home',
            icon: <Home size={18} strokeWidth={2} />,
            link: `/project`,
        },
        {
            key: 'TABLE',
            label: 'Table',
            icon: <Table size={18} strokeWidth={2} />,
            link: `/table`,
        },
        {
            key: 'APERTURE',
            label: 'Aperture',
            icon: <Aperture size={18} strokeWidth={2} />,
            link: `/aperture`,
        },
    ]
    const productRoutes = [
        {
            key: 'HOME',
            label: 'Home',
            icon: <Home size={18} strokeWidth={2} />,
            link: `/project`,
        },
        {
            key: 'TABLE',
            label: 'Table',
            icon: <Table size={18} strokeWidth={2} />,
            link: `/table`,
        },
        {
            key: 'APERTURE',
            label: 'Aperture',
            icon: <Aperture size={18} strokeWidth={2} />,
            link: `/aperture`,
        },
    ]
    const otherRoutes = [
        {
            key: 'HOME',
            label: 'Home',
            icon: <Home size={18} strokeWidth={2} />,
            link: `/project`,
        },
        {
            key: 'TABLE',
            label: 'Table',
            icon: <Table size={18} strokeWidth={2} />,
            link: `/table`,
        },
        {
            key: 'APERTURE',
            label: 'Aperture',
            icon: <Aperture size={18} strokeWidth={2} />,
            link: `/aperture`,
        },
    ]

    return (
        <div
            style={{ height: '100vh' }}
            className={[
                'flex w-14 flex-col justify-between overflow-y-hidden p-2',
                'bg-sidebar-light dark:border-dark dark:bg-sidebar-dark border-r',
            ].join(' ')}
        >
            <ul className="flex flex-col space-y-2">
                <Link
                    className={[
                        'transition-colors duration-200',
                        'flex h-10 w-10 items-center justify-center rounded', // Layout
                        'bg-scale-200 hover:bg-scale-500', // Light mode
                        'text-scale-900 hover:text-scale-1200 ', // Dark mode
                    ].join(' ')}
                    href="/projects"
                >
                    <PlayCircle size={18} strokeWidth={2} />
                </Link>
                <NavigationIconButton
                    isActive={true}
                    route={{
                        key: 'HOME',
                        label: 'Home',
                        icon: <Home size={18} strokeWidth={2} />,
                        link: `/project`,
                    }}
                />
                <div className="bg-scale-500 h-px w-full"></div>
                {toolRoutes.map((route) => (
                    <NavigationIconButton
                        key={route.key}
                        route={route}
                        isActive={activeRoute === route.key}
                    />
                ))}
                <div className="bg-scale-500 h-px w-full"></div>

                {productRoutes.map((route) => (
                    <NavigationIconButton
                        key={route.key}
                        route={route}
                        isActive={activeRoute === route.key}
                    />
                ))}
                <div className="bg-scale-500 h-px w-full"></div>
                {otherRoutes.map((route) => (
                    <NavigationIconButton
                        key={route.key}
                        route={route}
                        isActive={activeRoute === route.key}
                    />
                ))}
            </ul>
            <ul className="flex flex-col space-y-2">
                <Dropdown />
            </ul>
        </div>
    )
}

const NavigationIconButton = ({ route, isActive = false }) => {
    return (
        <Link
            href={route.link}
            className={[
                'transition-colors duration-200',
                'flex h-10 w-10 items-center justify-center rounded', // Layout
                'bg-scale-200 hover:bg-scale-500', // Light mode
                'text-scale-900 hover:text-scale-1200 ', // Dark mode
                `${isActive ? 'bg-scale-500 text-scale-1200 shadow-sm' : ''}`,
            ].join(' ')}
        >
            {route.icon}
        </Link>
    )
}

const LayoutHeader = ({
    customHeaderComponents,
    breadcrumbs = [],
    headerBorder = true,
}: any) => {
    const router = useRouter()
    const { ref } = router.query

    return (
        <div
            className={`flex h-12 max-h-12 items-center justify-between py-2 px-5 ${
                headerBorder ? 'dark:border-dark border-b' : ''
            }`}
        >
            <div className="-ml-2 flex items-center text-sm">
                <Link
                    className="text-scale-1200 cursor-pointer px-2 py-1 text-xs focus:bg-transparent focus:outline-none"
                    href="/projects"
                >
                    Dashboard <span className="mx-2">/</span> Projects
                </Link>

                {/* Additional breadcrumbs are supplied */}
                <BreadcrumbsView defaultValue={breadcrumbs} />
            </div>
            <div className="flex items-center space-x-2">
                {customHeaderComponents && customHeaderComponents}
            </div>
        </div>
    )
}

const BreadcrumbsView = ({ defaultValue: breadcrumbs }) => {
    return (
        <>
            {breadcrumbs?.length
                ? breadcrumbs.map((breadcrumb: any) => (
                      <Fragment key={breadcrumb.key}>
                          <span className="text-scale-800 dark:text-scale-700">
                              <svg
                                  viewBox="0 0 24 24"
                                  width="16"
                                  height="16"
                                  stroke="currentColor"
                                  strokeWidth="1"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  fill="none"
                                  shapeRendering="geometricPrecision"
                              >
                                  <path d="M16 3.549L7.12 20.600"></path>
                              </svg>
                          </span>

                          <a
                              onClick={breadcrumb.onClick || (() => {})}
                              className={`text-gray-1100 block px-2 py-1 text-xs leading-5 focus:bg-gray-100 focus:text-gray-900 focus:outline-none ${
                                  breadcrumb.onClick
                                      ? 'cursor-pointer hover:text-white'
                                      : ''
                              }`}
                          >
                              {breadcrumb.label}
                          </a>
                      </Fragment>
                  ))
                : null}
        </>
    )
}

const ProductMenuBar = ({ title }) => {
    const maxHeight = '100vh'

    return (
        <div
            style={{ height: maxHeight, maxHeight }}
            className={[
                'hide-scrollbar flex w-64 flex-col border-r', // Layout
                'bg-sidebar-linkbar-light', // Light mode
                'dark:bg-sidebar-linkbar-dark dark:border-dark ', // Dark mode
            ].join(' ')}
        >
            <div
                className="dark:border-dark flex max-h-12 items-center border-b px-6"
                style={{ minHeight: '3rem' }}
            >
                <h4 className="text-lg">{title}</h4>
            </div>
        </div>
    )
}
