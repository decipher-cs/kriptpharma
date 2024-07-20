/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProductImport } from './routes/product'
import { Route as EquipmentImport } from './routes/equipment'

// Create Virtual Routes

const HomeLazyImport = createFileRoute('/home')()
const GlobalPresenceLazyImport = createFileRoute('/globalPresence')()
const GalleryLazyImport = createFileRoute('/gallery')()
const ExhibitionLazyImport = createFileRoute('/exhibition')()
const DownloadsLazyImport = createFileRoute('/downloads')()
const ContactLazyImport = createFileRoute('/contact')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const HomeLazyRoute = HomeLazyImport.update({
  path: '/home',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/home.lazy').then((d) => d.Route))

const GlobalPresenceLazyRoute = GlobalPresenceLazyImport.update({
  path: '/globalPresence',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/globalPresence.lazy').then((d) => d.Route),
)

const GalleryLazyRoute = GalleryLazyImport.update({
  path: '/gallery',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/gallery.lazy').then((d) => d.Route))

const ExhibitionLazyRoute = ExhibitionLazyImport.update({
  path: '/exhibition',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/exhibition.lazy').then((d) => d.Route))

const DownloadsLazyRoute = DownloadsLazyImport.update({
  path: '/downloads',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/downloads.lazy').then((d) => d.Route))

const ContactLazyRoute = ContactLazyImport.update({
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/contact.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const ProductRoute = ProductImport.update({
  path: '/product',
  getParentRoute: () => rootRoute,
} as any)

const EquipmentRoute = EquipmentImport.update({
  path: '/equipment',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/equipment': {
      id: '/equipment'
      path: '/equipment'
      fullPath: '/equipment'
      preLoaderRoute: typeof EquipmentImport
      parentRoute: typeof rootRoute
    }
    '/product': {
      id: '/product'
      path: '/product'
      fullPath: '/product'
      preLoaderRoute: typeof ProductImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactLazyImport
      parentRoute: typeof rootRoute
    }
    '/downloads': {
      id: '/downloads'
      path: '/downloads'
      fullPath: '/downloads'
      preLoaderRoute: typeof DownloadsLazyImport
      parentRoute: typeof rootRoute
    }
    '/exhibition': {
      id: '/exhibition'
      path: '/exhibition'
      fullPath: '/exhibition'
      preLoaderRoute: typeof ExhibitionLazyImport
      parentRoute: typeof rootRoute
    }
    '/gallery': {
      id: '/gallery'
      path: '/gallery'
      fullPath: '/gallery'
      preLoaderRoute: typeof GalleryLazyImport
      parentRoute: typeof rootRoute
    }
    '/globalPresence': {
      id: '/globalPresence'
      path: '/globalPresence'
      fullPath: '/globalPresence'
      preLoaderRoute: typeof GlobalPresenceLazyImport
      parentRoute: typeof rootRoute
    }
    '/home': {
      id: '/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  EquipmentRoute,
  ProductRoute,
  AboutLazyRoute,
  ContactLazyRoute,
  DownloadsLazyRoute,
  ExhibitionLazyRoute,
  GalleryLazyRoute,
  GlobalPresenceLazyRoute,
  HomeLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/equipment",
        "/product",
        "/about",
        "/contact",
        "/downloads",
        "/exhibition",
        "/gallery",
        "/globalPresence",
        "/home"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/equipment": {
      "filePath": "equipment.tsx"
    },
    "/product": {
      "filePath": "product.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/contact": {
      "filePath": "contact.lazy.tsx"
    },
    "/downloads": {
      "filePath": "downloads.lazy.tsx"
    },
    "/exhibition": {
      "filePath": "exhibition.lazy.tsx"
    },
    "/gallery": {
      "filePath": "gallery.lazy.tsx"
    },
    "/globalPresence": {
      "filePath": "globalPresence.lazy.tsx"
    },
    "/home": {
      "filePath": "home.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
