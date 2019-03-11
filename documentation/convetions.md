# Shelfish code react internal conventions.

The following code, nomenclature and general conventions for code, methods documentation, etc, etc.

We must ensure to follow this conventions for team benefit and mental health. :happy:



## About React conventions.





# Testing

The main idea on this project is use TDD techniques for entire code project, we do it to increase code quality and to sure that things just work  before  make an update.

We gonna divide this on to main kind of test, instead there are many approaches, we choose focus on unitary testing instead of E2E (end-to-end), it doesn't mean we will avoid, it just mean that our goal will be create more unit test than E2E, this for the following razons:

1. E2E are more complicated and tedious to write (_costly_), this is, they take a long time to run. 
2. Every test require a full browser to be instantiated with actual browser events which takes more time than unit or integration tests.
3. It does a good job of finding problems, but it doesn’t do a good job of helping you solve those problems.



## Unit testing



## End-to-end (E2E) testing.

 Unit test are a great asset to help ensure the quality of our applications. But by nature, they only test small isolated pieces of our application and they mock important parts like API and databases calls.

This makes the test very quick to execute, but it doesn't guarantee that your applications works when all the pieces are put together. End-to-end testing (E2E) plugs this gap. It is used to test that your application works when used by a real user, for example, you might have an E2E test for the entire flow of a user logging into your site, adding an item to a shopping cart and then completing the order  :smile:



### Libraries and testing frameworks.

There are a lot of testing libraries, all of them are awesome and offer a lot of tools for testing, but we can't use all of them, so we decide use the following stack:

1.  [__Jest__](https://jestjs.io/)
2. [__Enzyme__](https://airbnb.io/enzyme/)
3. [__TestCafe__](https://github.com/DevExpress/testcafe) 

#### TestCafe

There are many popular tools available for browser bases E2E test, but the most popular is probably Selenium WebDriver. Selenium is very powerful, but unfortunately it is not straight forward to install and get started with. TestCafe is available as Node.js package and it doesn't require installing any service. We avoid the libraries details, if you want more detailed information (at this point you should we a bit familiarized whit some of them) you can visit and read it's web sites or gitHub repositories README's. But after read and make and heavy google investigation, we decide to use TestCafe for a few reasons, but there are some reasons:

1. It support different browsers.
2. Run over Node instead browser instance.
3. Has specific react extension.
4. Run on mobile devices.



