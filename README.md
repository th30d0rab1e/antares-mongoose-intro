# Sigma Mongoose Intro
An overview for today's Mongoose lecture.

We are starting with an application that will run and serve our
index page with `npm start`. Some of the client-side markup is completed.

We will complete this application using Angular and Mongoose.

## Agenda

1. Connect to Mongo using [Mongoose](http://mongoosejs.com/), a node module.
2. Create base GET, POST, PUT, and DELETE server-side routes.
3. Implement the Mongoose syntax needed to support the above routes.
4. Use Angular to add, display, update and delete people.
7. Explore a pre-save hook provided by Mongoose.

## New Terms

* Mongoose schema
* Mongoose model
* Mongoose subdocument
* Hook

## New Syntax

Quick rundown of new syntax we will use to query our database using Mongoose.

### Mongoose Model Functions

* `find`
* `findById`
* `findByIdAndUpdate`
* `findByIdAndRemove`

### Mongoose Document Functions

* `save`

### Mongoose Schema Functions

* `pre`
