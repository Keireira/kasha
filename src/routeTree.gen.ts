/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './core/routes/__root'
import { Route as LanguagesRouteImport } from './core/routes/languages/route'
import { Route as CountriesRouteImport } from './core/routes/countries/route'
import { Route as IndexImport } from './core/routes/index'
import { Route as LanguagesIndexImport } from './core/routes/languages/index'
import { Route as CountriesIndexImport } from './core/routes/countries/index'
import { Route as LanguagesLanguageImport } from './core/routes/languages/$language'
import { Route as CountriesCountryImport } from './core/routes/countries/$country'

// Create/Update Routes

const LanguagesRouteRoute = LanguagesRouteImport.update({
  id: '/languages',
  path: '/languages',
  getParentRoute: () => rootRoute,
} as any)

const CountriesRouteRoute = CountriesRouteImport.update({
  id: '/countries',
  path: '/countries',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LanguagesIndexRoute = LanguagesIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LanguagesRouteRoute,
} as any)

const CountriesIndexRoute = CountriesIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => CountriesRouteRoute,
} as any)

const LanguagesLanguageRoute = LanguagesLanguageImport.update({
  id: '/$language',
  path: '/$language',
  getParentRoute: () => LanguagesRouteRoute,
} as any)

const CountriesCountryRoute = CountriesCountryImport.update({
  id: '/$country',
  path: '/$country',
  getParentRoute: () => CountriesRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/countries': {
      id: '/countries'
      path: '/countries'
      fullPath: '/countries'
      preLoaderRoute: typeof CountriesRouteImport
      parentRoute: typeof rootRoute
    }
    '/languages': {
      id: '/languages'
      path: '/languages'
      fullPath: '/languages'
      preLoaderRoute: typeof LanguagesRouteImport
      parentRoute: typeof rootRoute
    }
    '/countries/$country': {
      id: '/countries/$country'
      path: '/$country'
      fullPath: '/countries/$country'
      preLoaderRoute: typeof CountriesCountryImport
      parentRoute: typeof CountriesRouteImport
    }
    '/languages/$language': {
      id: '/languages/$language'
      path: '/$language'
      fullPath: '/languages/$language'
      preLoaderRoute: typeof LanguagesLanguageImport
      parentRoute: typeof LanguagesRouteImport
    }
    '/countries/': {
      id: '/countries/'
      path: '/'
      fullPath: '/countries/'
      preLoaderRoute: typeof CountriesIndexImport
      parentRoute: typeof CountriesRouteImport
    }
    '/languages/': {
      id: '/languages/'
      path: '/'
      fullPath: '/languages/'
      preLoaderRoute: typeof LanguagesIndexImport
      parentRoute: typeof LanguagesRouteImport
    }
  }
}

// Create and export the route tree

interface CountriesRouteRouteChildren {
  CountriesCountryRoute: typeof CountriesCountryRoute
  CountriesIndexRoute: typeof CountriesIndexRoute
}

const CountriesRouteRouteChildren: CountriesRouteRouteChildren = {
  CountriesCountryRoute: CountriesCountryRoute,
  CountriesIndexRoute: CountriesIndexRoute,
}

const CountriesRouteRouteWithChildren = CountriesRouteRoute._addFileChildren(
  CountriesRouteRouteChildren,
)

interface LanguagesRouteRouteChildren {
  LanguagesLanguageRoute: typeof LanguagesLanguageRoute
  LanguagesIndexRoute: typeof LanguagesIndexRoute
}

const LanguagesRouteRouteChildren: LanguagesRouteRouteChildren = {
  LanguagesLanguageRoute: LanguagesLanguageRoute,
  LanguagesIndexRoute: LanguagesIndexRoute,
}

const LanguagesRouteRouteWithChildren = LanguagesRouteRoute._addFileChildren(
  LanguagesRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/countries': typeof CountriesRouteRouteWithChildren
  '/languages': typeof LanguagesRouteRouteWithChildren
  '/countries/$country': typeof CountriesCountryRoute
  '/languages/$language': typeof LanguagesLanguageRoute
  '/countries/': typeof CountriesIndexRoute
  '/languages/': typeof LanguagesIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/countries/$country': typeof CountriesCountryRoute
  '/languages/$language': typeof LanguagesLanguageRoute
  '/countries': typeof CountriesIndexRoute
  '/languages': typeof LanguagesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/countries': typeof CountriesRouteRouteWithChildren
  '/languages': typeof LanguagesRouteRouteWithChildren
  '/countries/$country': typeof CountriesCountryRoute
  '/languages/$language': typeof LanguagesLanguageRoute
  '/countries/': typeof CountriesIndexRoute
  '/languages/': typeof LanguagesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/countries'
    | '/languages'
    | '/countries/$country'
    | '/languages/$language'
    | '/countries/'
    | '/languages/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/countries/$country'
    | '/languages/$language'
    | '/countries'
    | '/languages'
  id:
    | '__root__'
    | '/'
    | '/countries'
    | '/languages'
    | '/countries/$country'
    | '/languages/$language'
    | '/countries/'
    | '/languages/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CountriesRouteRoute: typeof CountriesRouteRouteWithChildren
  LanguagesRouteRoute: typeof LanguagesRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CountriesRouteRoute: CountriesRouteRouteWithChildren,
  LanguagesRouteRoute: LanguagesRouteRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/countries",
        "/languages"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/countries": {
      "filePath": "countries/route.tsx",
      "children": [
        "/countries/$country",
        "/countries/"
      ]
    },
    "/languages": {
      "filePath": "languages/route.tsx",
      "children": [
        "/languages/$language",
        "/languages/"
      ]
    },
    "/countries/$country": {
      "filePath": "countries/$country.tsx",
      "parent": "/countries"
    },
    "/languages/$language": {
      "filePath": "languages/$language.tsx",
      "parent": "/languages"
    },
    "/countries/": {
      "filePath": "countries/index.tsx",
      "parent": "/countries"
    },
    "/languages/": {
      "filePath": "languages/index.tsx",
      "parent": "/languages"
    }
  }
}
ROUTE_MANIFEST_END */
