# NestJS Fundamentals Pro

This repository represents the written content of a video series covering NestJS fundamentals and applications. You can access the video and its source from the link provided below:

Video: [Learn NestJS – Complete Course](https://www.youtube.com/watch?v=sFnAHC9lLaw)

## Contents
- [NestJS Fundamentals Pro](#nestjs-fundamentals-pro)
- [Module 0](#module-0)
  - [What is NestJS?](#what-is-nestjs)
  - [Create a new NestJS project](#create-a-new-nestjs-project)
  - [Project structure](#project-structure)
- [Module 1](#module-1)
  - [Create Controller](#create-controller)
  - [Create Service](#create-service)
  - [Create Module](#create-module)
- [Module 2](#module-2)
  - [Middleware](#middleware)
  - [Exception Filter](#exception-filter)
  - [Transform param using ParseIntPipe](#transform-param-using-parseintpipe)
  - [Validate Request Body using class Validator](#validate-request-body-using-class-validator)
- [Module 3](#module-3)
  - [Custom Providers](#custom-providers)
  - [Injection Scopes](#injection-scopes)
  - [One To Many Relation](#one-to-many-relation)
- [Module 4](#module-4)
  - [Establish Database Connection](#establish-database-connection)
  - [Create Entity](#create-entity)
  - [Create and Fetch records from database](#create-and-fetch-records-from-database)
  - [Pagination](#pagination)
- [Module 5](#module-5)
  - [One to One Relation](#one-to-one-relation)
  - [Many to Many Relation](#many-to-many-relation)
- [Module 6](#module-6)
  - [User Sign Up](#user-sign-up)
  - [User Login](#user-login)
  - [Authenticate User with Passport JWT](#authenticate-user-with-passport-jwt)
  - [Role Based Authentication](#role-based-authentication)
  - [Two Factor Authentication](#two-factor-authentication)
  - [API Key Authentication](#api-key-authentication)
- [Module 7](#module-7)
  - [Debug NestJS Application](#debug-nestjs-application)
  - [Migrations](#migrations)
  - [Seeding](#seeding)
- [Module 8](#module-8)
  - [Custom Configuration](#custom-configuration)
  - [Validate Env Variables](#validate-env-variables)
  - [Hot Module Reloading](#hot-module-reloading)
- [Module 9](#module-9)
  - [Swagger Setup](#swagger-setup)
  - [Document Signup Route](#document-signup-route)
  - [Create Schema using ApiProperty](#create-schema-using-apiproperty)
  - [Test JWT Authentication](#test-jwt-authentication)
- [Module 10](#module-10)
  - [Install MongoDB using Docker Compose](#install-mongodb-using-docker-compose)
  - [Connect with MongoDB](#connect-with-mongodb)
  - [Create Schema](#create-schema)
  - [Save Record in Mongo Collection](#save-record-in-mongo-collection)
  - [Find and Delete](#find-and-delete)
  - [Populate](#populate)
- [Module 11](#module-11)
  - [Configure Dev and Production Env](#configure-dev-and-production-env)
  - [Push Source Code to Github Repo](#push-source-code-to-github-repo)
  - [Deploy NestJS Project to Railway](#deploy-nestjs-project-to-railway)
  - [Install Dotenv to work with TypeORM migrations](#install-dotenv-to-work-with-typeorm-migrations)
  - [Fixing Env Bugs](#fixing-env-bugs)
- [Module 12](#module-12)
  - [Getting started with Jest](#getting-started-with-jest)
  - [Auto Mocking](#auto-mocking)
  - [SpyOn Function](#spyon-function)
  - [Unit Test Controller](#unit-test-controller)
  - [Unit Test Service](#unit-test-service)
  - [E2E Testing](#e2e-testing)
- [Module 13](#module-13)
  - [Speedy Web Compiler with NestJS v10](#speedy-web-compiler-with-nestjs-v10)
  - [Creating Websocket Server](#creating-websocket-server)
  - [Send Message from Frontend app](#send-message-from-frontend-app)
- [Module 14](#module-14)
  - [GraphQL Server Setup](#graphql-server-setup)
  - [Define Queries and Mutations](#define-queries-and-mutations)
  - [Resolve Queries](#resolve-queries)
  - [Resolve Mutations](#resolve-mutations)
  - [Error Handling](#error-handling)
- [Module 15](#module-15)
  - [Define Schema for Authentication](#define-schema-for-authentication)
  - [Resolve Auth Queries and Mutations](#resolve-auth-queries-and-mutations)
  - [Apply Authentication using Auth Guard](#apply-authentication-using-auth-guard)
- [Module 16](#module-16)
  - [Implement Real time Subscription](#implement-real-time-subscription)
- [Module 17](#module-17)
  - [Unit Test Resolver](#unit-test-resolver)
  - [End to End Tesing GraphQL APIs](#end-to-end-tesing-graphql-apis)
- [Module 18](#module-18)
  - [Server Side Caching using Apollo](#server-side-caching-using-apollo)
  - [Optimize Query Performance using Data Loader](#optimize-query-performance-using-data-loader)
  - [Fetching Data from External REST API](#fetching-data-from-external-rest-api)
- [Module 19](#module-19)
  - [Setup Prisma](#setup-prisma)
  - [Models and Migrations](#models-and-migrations)
  - [Generate Prisma Client](#generate-prisma-client)
  - [Create Find and FindOne](#create-find-and-findone)
  - [Update and Delete Operation](#update-and-delete-operation)
  - [One to Many Relation](#one-to-many-relation)
  - [One to One Relation](#one-to-one-relation)
  - [Many to Many Relation](#many-to-many-relation)
  - [Bulk or Batch Operations](#bulk-or-batch-operations)
  - [Implement Transaction using Nested Queries](#implement-transaction-using-nested-queries)
  - [Interactive Transactions](#interactive-transactions)
- [Module 20](#module-20)
  - [File Upload](#file-upload)
  - [Custom Decorator](#custom-decorator)
  - [Scheduling CRON Task with Nest.js](#scheduling-cron-task-with-nestjs)
  - [Cookies](#cookies)
  - [Queues](#queues)
  - [Event Emitter](#event-emitter)
  - [Streaming](#streaming)
  - [Session](#session)


# Module 0
## What is NestJS?

NestJS is a framework for building efficient and scalable server-side applications using Node.js. It supports TypeScript and integrates elements of OOP, FP, and FRP. It abstracts complexities of frameworks like Express/Fastify while providing flexibility to use third-party modules. Inspired by Angular, Nest offers a structured architecture for highly testable, scalable, and maintainable applications, addressing the challenge of backend architecture in JavaScript development.

## Create a new NestJS project

To create a new NestJS project, run the following command:

```bash
$ npm i -g @nestjs/cli
$ nest new <project-name>
```

## Project Structure

The project structure of a NestJS application typically includes the following core files and directories:

- **src/**: This directory contains the source code of the application.
    - **app.controller.ts**: A basic controller file with at least one route defined.
    - **app.controller.spec.ts**: Unit tests for the controller.
    - **app.module.ts**: The root module of the application, where other modules, controllers, and services are imported and configured.
    - **app.service.ts**: A basic service file with at least one method defined.
- **main.ts**: This file serves as the entry point of the application. It uses the NestFactory class to create a Nest application instance and bootstrap the application.

In the main.ts file, an async function called `bootstrap()` is defined. This function creates an instance of the Nest application by calling `NestFactory.create()` and passing the root module (`AppModule`). Then, it starts the HTTP listener by calling `app.listen()`, which allows the application to await inbound HTTP requests.

It's worth noting that the Nest CLI scaffolds the initial project structure in a way that encourages developers to maintain a modularized codebase, typically with each module residing in its own dedicated directory.

# Module 1
## Create Controller

A controller in NestJS is a class annotated with the `@Controller()` decorator. It is responsible for handling incoming HTTP requests and returning responses to the client. Controllers define routes using decorators such as `@Get()`, `@Post()`, `@Put()`, `@Delete()`, etc., which correspond to the HTTP methods they handle.

To create a new controller, you can use the Nest CLI command:

```bash
$ nest generate controller <controller-name>
```
Tip: You can also use the shorthand notation `nest g co <controller-name>`.
Tip-2: If you want to doesn't create a spec file you can use `--no-spec` flag.
