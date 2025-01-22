/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './core/routes/__root'
import { Route as ProfileRouteImport } from './core/routes/profile/route'
import { Route as BoardRouteImport } from './core/routes/_board/route'
import { Route as IndexImport } from './core/routes/index'
import { Route as ProfileIndexImport } from './core/routes/profile/index'
import { Route as BoardBoardIdIndexImport } from './core/routes/_board/$boardId.index'
import { Route as BoardBoardIdThreadIdImport } from './core/routes/_board/$boardId.$threadId'

// Create/Update Routes

const ProfileRouteRoute = ProfileRouteImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const BoardRouteRoute = BoardRouteImport.update({
  id: '/_board',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileIndexRoute = ProfileIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => ProfileRouteRoute,
} as any)

const BoardBoardIdIndexRoute = BoardBoardIdIndexImport.update({
  id: '/$boardId/',
  path: '/$boardId/',
  getParentRoute: () => BoardRouteRoute,
} as any)

const BoardBoardIdThreadIdRoute = BoardBoardIdThreadIdImport.update({
  id: '/$boardId/$threadId',
  path: '/$boardId/$threadId',
  getParentRoute: () => BoardRouteRoute,
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
    '/_board': {
      id: '/_board'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof BoardRouteImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileRouteImport
      parentRoute: typeof rootRoute
    }
    '/profile/': {
      id: '/profile/'
      path: '/'
      fullPath: '/profile/'
      preLoaderRoute: typeof ProfileIndexImport
      parentRoute: typeof ProfileRouteImport
    }
    '/_board/$boardId/$threadId': {
      id: '/_board/$boardId/$threadId'
      path: '/$boardId/$threadId'
      fullPath: '/$boardId/$threadId'
      preLoaderRoute: typeof BoardBoardIdThreadIdImport
      parentRoute: typeof BoardRouteImport
    }
    '/_board/$boardId/': {
      id: '/_board/$boardId/'
      path: '/$boardId'
      fullPath: '/$boardId'
      preLoaderRoute: typeof BoardBoardIdIndexImport
      parentRoute: typeof BoardRouteImport
    }
  }
}

// Create and export the route tree

interface BoardRouteRouteChildren {
  BoardBoardIdThreadIdRoute: typeof BoardBoardIdThreadIdRoute
  BoardBoardIdIndexRoute: typeof BoardBoardIdIndexRoute
}

const BoardRouteRouteChildren: BoardRouteRouteChildren = {
  BoardBoardIdThreadIdRoute: BoardBoardIdThreadIdRoute,
  BoardBoardIdIndexRoute: BoardBoardIdIndexRoute,
}

const BoardRouteRouteWithChildren = BoardRouteRoute._addFileChildren(
  BoardRouteRouteChildren,
)

interface ProfileRouteRouteChildren {
  ProfileIndexRoute: typeof ProfileIndexRoute
}

const ProfileRouteRouteChildren: ProfileRouteRouteChildren = {
  ProfileIndexRoute: ProfileIndexRoute,
}

const ProfileRouteRouteWithChildren = ProfileRouteRoute._addFileChildren(
  ProfileRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof BoardRouteRouteWithChildren
  '/profile': typeof ProfileRouteRouteWithChildren
  '/profile/': typeof ProfileIndexRoute
  '/$boardId/$threadId': typeof BoardBoardIdThreadIdRoute
  '/$boardId': typeof BoardBoardIdIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof BoardRouteRouteWithChildren
  '/profile': typeof ProfileIndexRoute
  '/$boardId/$threadId': typeof BoardBoardIdThreadIdRoute
  '/$boardId': typeof BoardBoardIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_board': typeof BoardRouteRouteWithChildren
  '/profile': typeof ProfileRouteRouteWithChildren
  '/profile/': typeof ProfileIndexRoute
  '/_board/$boardId/$threadId': typeof BoardBoardIdThreadIdRoute
  '/_board/$boardId/': typeof BoardBoardIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/profile'
    | '/profile/'
    | '/$boardId/$threadId'
    | '/$boardId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/profile' | '/$boardId/$threadId' | '/$boardId'
  id:
    | '__root__'
    | '/'
    | '/_board'
    | '/profile'
    | '/profile/'
    | '/_board/$boardId/$threadId'
    | '/_board/$boardId/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BoardRouteRoute: typeof BoardRouteRouteWithChildren
  ProfileRouteRoute: typeof ProfileRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BoardRouteRoute: BoardRouteRouteWithChildren,
  ProfileRouteRoute: ProfileRouteRouteWithChildren,
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
        "/_board",
        "/profile"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_board": {
      "filePath": "_board/route.tsx",
      "children": [
        "/_board/$boardId/$threadId",
        "/_board/$boardId/"
      ]
    },
    "/profile": {
      "filePath": "profile/route.tsx",
      "children": [
        "/profile/"
      ]
    },
    "/profile/": {
      "filePath": "profile/index.tsx",
      "parent": "/profile"
    },
    "/_board/$boardId/$threadId": {
      "filePath": "_board/$boardId.$threadId.tsx",
      "parent": "/_board"
    },
    "/_board/$boardId/": {
      "filePath": "_board/$boardId.index.tsx",
      "parent": "/_board"
    }
  }
}
ROUTE_MANIFEST_END */
