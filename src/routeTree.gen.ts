/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const ProductLazyImport = createFileRoute('/product')()
const HomeLazyImport = createFileRoute('/home')()
const GlobalPresenceLazyImport = createFileRoute('/globalPresence')()
const GalleryLazyImport = createFileRoute('/gallery')()
const ExhibitionLazyImport = createFileRoute('/exhibition')()
const EquipmentLazyImport = createFileRoute('/equipment')()
const DownloadsLazyImport = createFileRoute('/downloads')()
const ContactLazyImport = createFileRoute('/contact')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const ProductLazyRoute = ProductLazyImport.update({
  path: '/product',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/product.lazy').then((d) => d.Route))

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

const EquipmentLazyRoute = EquipmentLazyImport.update({
  path: '/equipment',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/equipment.lazy').then((d) => d.Route))

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

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      preLoaderRoute: typeof ContactLazyImport
      parentRoute: typeof rootRoute
    }
    '/downloads': {
      preLoaderRoute: typeof DownloadsLazyImport
      parentRoute: typeof rootRoute
    }
    '/equipment': {
      preLoaderRoute: typeof EquipmentLazyImport
      parentRoute: typeof rootRoute
    }
    '/exhibition': {
      preLoaderRoute: typeof ExhibitionLazyImport
      parentRoute: typeof rootRoute
    }
    '/gallery': {
      preLoaderRoute: typeof GalleryLazyImport
      parentRoute: typeof rootRoute
    }
    '/globalPresence': {
      preLoaderRoute: typeof GlobalPresenceLazyImport
      parentRoute: typeof rootRoute
    }
    '/home': {
      preLoaderRoute: typeof HomeLazyImport
      parentRoute: typeof rootRoute
    }
    '/product': {
      preLoaderRoute: typeof ProductLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  AboutLazyRoute,
  ContactLazyRoute,
  DownloadsLazyRoute,
  EquipmentLazyRoute,
  ExhibitionLazyRoute,
  GalleryLazyRoute,
  GlobalPresenceLazyRoute,
  HomeLazyRoute,
  ProductLazyRoute,
])

/* prettier-ignore-end */
