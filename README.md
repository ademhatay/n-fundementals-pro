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

*Example*
```bash
$ nest g co songs --no-spec
```
## Create Service

A service in NestJS is a class that encapsulates business logic and interacts with data sources. Services are typically injected into controllers and other services using dependency injection. To create a new service, you can use the Nest CLI command:

```bash
$ nest generate service <service-name>
```
*Example*
```bash
$ nest g co songs --no-spec
```

## Create Module
2 ways to create a module in NestJS:

1. Using the Nest CLI Command:
    
    Creating a module using the Nest CLI command is straightforward. You can create a new module by running the following command:
    
    `$ nest generate module <module-name>` 
    
    This command creates a module with the specified name and automatically adds the necessary files and folders. This method allows for quick and convenient module creation.
    
2. Manually Creating a Module File:
    
    If you prefer to create the module manually, you'll need to create a new TypeScript file (e.g., `example.module.ts`). In this file, define a module class annotated with the `@Module()` decorator. The `@Module()` decorator takes a configuration object with properties such as `imports`, `controllers`, `providers`, and `exports` to define the module's structure.
    
    Manual creation offers more customization options and allows for the creation of more complex module structures. However, it may require more time and effort compared to using the Nest CLI command.
  
- Manually Creating Controllers:

To create a controller manually, you simply need to define a TypeScript file (e.g., example.controller.ts) with a class annotated with @Controller(). Within this class, you can define methods to handle different HTTP requests, each annotated with decorators like @Get(), @Post(), etc.

- Manually Creating Services:

To create a service manually, define a TypeScript file (e.g., example.service.ts) with a class annotated with @Injectable(). This class contains methods to encapsulate business logic that can be injected into controllers or other services.

# Module 2

## Middleware

Middleware in NestJS is a function that has access to the request and response objects. It can execute any code, make changes to the request and response objects, end the request-response cycle, and call the next middleware function in the stack. Middleware can be used to perform tasks such as logging, authentication, error handling, and more.

<img src="https://miro.medium.com/v2/resize:fit:945/1*RgPEcCE3mHSGR-fS5lXTCQ.png" alt="Middleware" width="500"/>

To create a middleware in NestJS, you can use the `@Injectable()` decorator to define a class that implements the `NestMiddleware` interface. The class should have
a `use()` method that takes the request, response, and next function as arguments. The `use()` method can perform any necessary operations and call the next function to pass control to the next middleware in the stack.

```bash
$ nest generate middleware <middleware-name>
```

*Example*
```bash
nest g mi common/middleware/logger --no-spec --no-flat
```

```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request...', new Date().toLocaleTimeString('tr-TR'));
    next();
  }
}
```
*Applying Middleware*
You can apply middleware globally, per module, or per route. To apply middleware globally, you can use the `configure()` method of the root module (AppModule) and call the `apply()` method on the `MiddlewareConsumer` object. You can then specify the middleware to be applied using the `forRoutes()` method.
```typescript
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('songs');
  }
}
```

## Exception Filter

An exception filter in NestJS is a mechanism used to intercept and handle exceptions thrown during the execution of an HTTP request pipeline. It allows developers to centralize error handling logic and customize the response sent back to the client in case of errors.

```bash
$ nest generate filter <filter-name>
```
#### Usage:

1. **Defining an Exception Filter**:
    
    To define an exception filter, you need to create a class that implements the `ExceptionFilter` interface provided by NestJS. This class should have a `catch()` method, where you can implement the logic to handle exceptions.
    
     ```typescript
    
    import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
    import { Response } from 'express';
    
    @Catch(HttpException)
    export class HttpExceptionFilter implements ExceptionFilter {
      catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status = exception.getStatus();
    
        response.status(status).json({
          statusCode: status,
          message: exception.message,
        });
      }
    }
     ```
    
2. **Applying the Exception Filter**:
    
    You can apply the exception filter globally to handle exceptions across the entire application or selectively to specific controllers or routes.
    
    - **Globally**:
        
        ```typescript
        
        import { Catch, ExceptionFilter, HttpServer, HttpStatus } from '@nestjs/common';
        import { AllExceptionsFilter } from './common/filters/exception.filter';
        
        async function bootstrap() {
          const app = await NestFactory.create(AppModule);
          app.useGlobalFilters(new HttpExceptionFilter());
          await app.listen(3000);
        }
        bootstrap();

        ```
        
    - **Locally**:
        
         ```typescript
        
        import { Controller, Get, Post, UseFilters } from '@nestjs/common';
        import { HttpExceptionFilter } from './common/filters/exception.filter';
        
        @Controller('cats')
        @UseFilters(new HttpExceptionFilter())
        export class CatsController {
          // Controller methods...
        }
         ```
        
3. **Using with `class-validator` and `class-transformer`**:
    
    You can combine exception filters with `class-validator` and `class-transformer` to handle validation errors gracefully. For example, in a controller, you can use these libraries to validate incoming request payloads, and if validation fails, throw a custom exception that will be caught by the exception filter.
    
    ```typescript
    
    import { Controller, Post, Body, UseFilters } from '@nestjs/common';
    import { HttpExceptionFilter } from './common/filters/exception.filter';
    import { CreateUserDto } from './dto/create-user.dto';
    import { ValidateUserPipe } from './pipes/validate-user.pipe';
    
    @Controller('users')
    @UseFilters(new HttpExceptionFilter())
    export class UsersController {
      @Post()
      createUser(@Body(new ValidateUserPipe()) createUserDto: CreateUserDto) {
        // Logic to create user...
      }
    }
     ```
    
  Here, `ValidateUserPipe` is a custom pipe that uses `class-validator` to validate the incoming `createUserDto` object. If validation fails, it throws a `BadRequestException`, which will be caught by the exception filter and handled appropriately.

## Transform Param Using ParseIntPipe
The ParseIntPipe in NestJS is a built-in pipe that transforms route parameters into integers. It is used to validate and transform route parameters to ensure they are of the correct type before being passed to the controller method.

*Example*:
Let's say we have a controller method that retrieves a user by their ID from the database. We want to ensure that the userId route parameter is always an integer. We can use the ParseIntPipe to achieve this:

```typescript
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':userId')
  async getUserById(@Param('userId', ParseIntPipe) userId: number): Promise<User> {
    return this.userService.getUserById(userId);
  }
}
```

In this example:

- We import `ParseIntPipe` from `@nestjs/common`.
- In the `getUserById` method, we use `@Param('userId', ParseIntPipe)` to specify that the `userId` route parameter should be transformed into an integer using the `ParseIntPipe`.
- The transformed `userId` is then passed to the `getUserById` method of the `UserService` to retrieve the user from the database.

## Validate Request Body using class Validator

Class Validator is a library that allows for declarative validation of objects in TypeScript and JavaScript. In NestJS, it can be used to validate request bodies, ensuring that the incoming data adheres to specified rules or constraints.

*Usage*:
To use Class Validator for validating request bodies in NestJS, follow these steps:
1- Install the `class-validator` and `class-transformer` packages:
```bash
$ pnpm add class-validator class-transformer
```

2- Define a DTO (Data Transfer Object) class representing the structure of the request body, and annotate its properties with validation decorators from `class-validator`.
```typescript
// create-user.dto.ts
import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
```
3- Use the DTO class in your controller method and apply validation using the `ValidateNested()` decorator from `class-validator`.
```typescript
import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    // Logic to create user...
  }
}
```
Here, the `ValidationPipe` is used to automatically validate the incoming request body against the rules defined in the `CreateUserDto` class. If validation fails, a `BadRequestException` will be thrown automatically by NestJS.
