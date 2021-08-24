/**
 * Asynchronous JavaScript
 */

/**
 * Topics
 *
 * Timeouts and Intervals
 * Callbacks
 * Promises
 * async await
 * Event loop
 */

/**
 * In its most basic form, JavaScript is a synchronous, blocking, single-threaded language
 *
 * Synchronous
 * 1. If we have two functions which log messages to the console, code executes top down,
 * with only one line executing at any given time.
 *
 * Blocking
 * 1. No matter how long a previous process takes, the subsequent processes won't kick off
 * until the former is completed.
 *
 * 2. If function A had to execute an intensive chunk of code, JavaScript has to finish
 * that without moving on to function B. Even if that code takes 10 seconds or 1 minute.
 *
 * 3. Web app runs in a browser and it executes an intensive chunk of code without
 * returning control to the browser, the browser can appear to be frozen.
 *
 * Single-threaded
 * 1. A thread is simply a process that your javascript program can use to run a task.
 *
 * 2. Each thread can only do one task at a time.
 *
 * 3. JavaScript has just the one thread called the main thread for executing any code.
 */

/**
 * Problem with synchronous, blocking, single-threaded model of JavaScript
 *
 * 1. In below fn fetchdataFromDB('endPoint') could take 1 second or even more.
 *
 * 2. During that time, we can't run any further code.
 *
 * 3. JavaScript, if it simply proceeds to the next line without waiting,
 * we have an error because data is not what we expect it to be.
 *
 * 4. We need a way to have asynchronous behaviour with JavaScript.
 */

/**
 * Async JS - How?
 * 1. Just JavaScript is not enough.
 *
 * 2. We need new pieces which are outside of JavaScript to help us write
 * asynchronous code which is where web browsers come into play.
 *
 * 3. Web browsers define functions and API's that allow us to register functions
 * that should not be executed synchronously, and should instead be invoked
 * asynchronously when some kind of event occurs.
 *
 * 4. For example, that could be the passage of time (setTimeout ot setInterval),
 * the user's interaction with the mouse (addEventListener), or the arrival of
 * data over the network (callbacks, Promises, async-await).
 *
 * 5. You can let your code do several things at the same time without stopping
 * or blocking your main thread.
 */
