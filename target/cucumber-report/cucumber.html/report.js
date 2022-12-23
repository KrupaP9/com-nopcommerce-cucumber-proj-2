$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("electronicstest.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu Test",
  "description": "As a user I want to navigate the nopcommerce website Top Menu Bar",
  "id": "top-menu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8068431300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "I should verify product is arranged in alphabetical order",
  "description": "",
  "id": "top-menu-test;i-should-verify-product-is-arranged-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    },
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I hover on \"Electronics\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on tab \"Cell phones\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should verify the cell phones text \"Cell phones\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepsTest.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 315309800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 12
    }
  ],
  "location": "ElectronicsTestSteps.iHoverOn(String)"
});
formatter.result({
  "duration": 397164700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 16
    }
  ],
  "location": "ElectronicsTestSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 1107004300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 38
    }
  ],
  "location": "ElectronicsTestSteps.iShouldVerifyTheCellPhonesText(String)"
});
formatter.result({
  "duration": 75085200,
  "status": "passed"
});
formatter.after({
  "duration": 692773200,
  "status": "passed"
});
formatter.before({
  "duration": 3283855100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "I should verify product is added successfully and order placed successfully",
  "description": "",
  "id": "top-menu-test;i-should-verify-product-is-added-successfully-and-order-placed-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    },
    {
      "line": 11,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I hover on \"Electronics\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on tab \"Cell phones\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the cell phones text \"Cell phones\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on list view tab",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on phone product \"Nokia Lumia 1020\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify the phone text \"Nokia Lumia 1020\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify the price \"$349.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I change the phone quantity to \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify the product message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I close the success message",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on go to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify the message \"Shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I verify the phone quantity is \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I verify the total price \"$698.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on checkbox I agree with the terms of service",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on checkout",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify the homepage welcome text \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on register tab",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I verify the register text \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I register first name \"Priya\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I register last name \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I register email \"priyapatel\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter registration password \"password1\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter registration confirmation password \"password1\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I verify the registration complete message \"Your registration completed\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on continue after registration completed",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I should verify product is added successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepsTest.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 72200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 12
    }
  ],
  "location": "ElectronicsTestSteps.iHoverOn(String)"
});
formatter.result({
  "duration": 279215800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 16
    }
  ],
  "location": "ElectronicsTestSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 1182963200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 31
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyTheCellPhonesText(String)"
});
formatter.result({
  "duration": 86531900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iClickOnListViewTab()"
});
formatter.result({
  "duration": 161463800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia Lumia 1020",
      "offset": 26
    }
  ],
  "location": "ElectronicsTestSteps.iClickOnPhoneProduct(String)"
});
formatter.result({
  "duration": 3066704200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia Lumia 1020",
      "offset": 25
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyThePhoneText(String)"
});
formatter.result({
  "duration": 150458800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$349.00",
      "offset": 20
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyThePrice(String)"
});
formatter.result({
  "duration": 132929300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 32
    }
  ],
  "location": "ElectronicsTestSteps.iChangeThePhoneQuantityTo(String)"
});
formatter.result({
  "duration": 501617800,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 799272500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 30
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyTheProductMessage(String)"
});
formatter.result({
  "duration": 553660700,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iCloseTheSuccessMessage()"
});
formatter.result({
  "duration": 100555800,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iClickOnGoToCartButton()"
});
formatter.result({
  "duration": 2019761700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 22
    }
  ],
  "location": "TestSuiteSteps.iVerifyTheMessage(String)"
});
formatter.result({
  "duration": 144075300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 32
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyThePhoneQuantityIs(String)"
});
formatter.result({
  "duration": 210837400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$698.00",
      "offset": 26
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyTheTotalPrice(String)"
});
formatter.result({
  "duration": 204494700,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iClickOnCheckboxIAgreeWithTheTermsOfService()"
});
formatter.result({
  "duration": 271892200,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iClickOnCheckout()"
});
formatter.result({
  "duration": 1407110400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 36
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyTheHomepageWelcomeText(String)"
});
formatter.result({
  "duration": 332838600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iClickOnRegisterTab()"
});
formatter.result({
  "duration": 977835300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 28
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyTheRegisterText(String)"
});
formatter.result({
  "duration": 149764700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Priya",
      "offset": 23
    }
  ],
  "location": "ElectronicsTestSteps.iRegisterFirstName(String)"
});
formatter.result({
  "duration": 321782300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 22
    }
  ],
  "location": "ElectronicsTestSteps.iRegisterLastName(String)"
});
formatter.result({
  "duration": 326871100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priyapatel",
      "offset": 18
    }
  ],
  "location": "ElectronicsTestSteps.iRegisterEmail(String)"
});
formatter.result({
  "duration": 397401700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password1",
      "offset": 31
    }
  ],
  "location": "ElectronicsTestSteps.iEnterRegistrationPassword(String)"
});
formatter.result({
  "duration": 347354100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password1",
      "offset": 44
    }
  ],
  "location": "ElectronicsTestSteps.iEnterRegistrationConfirmationPassword(String)"
});
formatter.result({
  "duration": 220268400,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 1289105400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 44
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyTheRegistrationCompleteMessage(String)"
});
formatter.result({
  "duration": 72024000,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iClickOnContinueAfterRegistrationCompleted()"
});
formatter.result({
  "duration": 788445800,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iShouldVerifyProductIsAddedSuccessfully()"
});
formatter.result({
  "duration": 43300,
  "status": "passed"
});
formatter.after({
  "duration": 920565000,
  "status": "passed"
});
formatter.uri("testsuite.feature");
formatter.feature({
  "line": 1,
  "name": "Test Suite",
  "description": "As a user I want to add an item to the shopping cart",
  "id": "test-suite",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3346024400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "I should verify product is arranged in alphabetical order",
  "description": "",
  "id": "test-suite;i-should-verify-product-is-arranged-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    },
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on computers",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on desktop",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select sort by position \"Name: Z to A\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should verify the products are arranged in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepsTest.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 65000,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iClickOnComputers()"
});
formatter.result({
  "duration": 1307999800,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iClickOnDesktop()"
});
formatter.result({
  "duration": 2410750100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: Z to A",
      "offset": 27
    }
  ],
  "location": "TestSuiteSteps.iSelectSortByPosition(String)"
});
formatter.result({
  "duration": 378293600,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iShouldVerifyTheProductsAreArrangedInDescendingOrder()"
});
formatter.result({
  "duration": 386470600,
  "status": "passed"
});
formatter.after({
  "duration": 810123300,
  "status": "passed"
});
formatter.before({
  "duration": 3069649000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "I should verify product is added to shopping cart successfully",
  "description": "",
  "id": "test-suite;i-should-verify-product-is-added-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Regression"
    },
    {
      "line": 12,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on computers",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on desktop",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select sort by ascending position \"Name: A to Z\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on add to cart for build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify the computer text \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select ram \"8GB [+$60.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select HDD \"400 GB [+$100.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select OS \"Vista Premium [+$60.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select two boxes \"Microsoft Office [+$50.00]\" and \"Total Commander [+$5.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify the computer price \"$1,475.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I verify the shopping cart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I close the success message",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on go to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify the message \"Shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I change the quantity to \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I update the cart",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I verify the quantity is \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I verify the total is \"$2,950.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on checkbox I agree with the terms of service",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on checkout",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I verify text \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on checkout as guest",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter first name \"Priya\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter last name \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter email \"priyapatel50\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I select country name \"United States\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I select state name \"Arizona\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter city name \"London\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I enter address \"10 ABC Road\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter postcode \"AB12CD\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I enter phone number \"07867865734\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on continue button after mandatory fields",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on next day air radio button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on continue button after shipping",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I select card payment",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click continue after card payment details",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I select credit card \"Master card\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I enter cardholder name \"Miss ABC ABC\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I enter card number \"5555555555554444\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I enter month expiry \"02\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I enter year expiry \"2023\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I enter CVV \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I click continue after details",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I verify payment method \"Credit Card\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I verify shipping method \"Next Day Air\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I verify the checkout total is \"$2,950.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click on confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I verify the \"Thank you\" text",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I verify the order message \"Your order has been successfully processed!\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click on continue after order processed",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I verify the welcome text \"Welcome to our store\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I should be able to verify product is added to the shopping cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepsTest.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 31800,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iClickOnComputers()"
});
formatter.result({
  "duration": 1310002800,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iClickOnDesktop()"
});
formatter.result({
  "duration": 1852499800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: A to Z",
      "offset": 37
    }
  ],
  "location": "TestSuiteSteps.iSelectSortByAscendingPosition(String)"
});
formatter.result({
  "duration": 430922900,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iClickOnBuildYourOwnComputerProduct()"
});
formatter.result({
  "duration": 1245918700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 28
    }
  ],
  "location": "TestSuiteSteps.iVerifyTheComputerText(String)"
});
formatter.result({
  "duration": 1948836900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "TestSuiteSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 1423823300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "TestSuiteSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 1388440600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "TestSuiteSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 1206863800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "TestSuiteSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 1178705600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 20
    },
    {
      "val": "Total Commander [+$5.00]",
      "offset": 53
    }
  ],
  "location": "TestSuiteSteps.iSelectTwoBoxesAnd(String,String)"
});
formatter.result({
  "duration": 1126584500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,475.00",
      "offset": 29
    }
  ],
  "location": "TestSuiteSteps.iVerifyTheComputerPrice(String)"
});
formatter.result({
  "duration": 1102714900,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 728109200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 36
    }
  ],
  "location": "TestSuiteSteps.iVerifyTheShoppingCartMessage(String)"
});
formatter.result({
  "duration": 461371200,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iCloseTheSuccessMessage()"
});
formatter.result({
  "duration": 75695400,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iClickOnGoToCartButton()"
});
formatter.result({
  "duration": 2019642700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 22
    }
  ],
  "location": "TestSuiteSteps.iVerifyTheMessage(String)"
});
formatter.result({
  "duration": 125071600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "TestSuiteSteps.iChangeTheQuantityTo(String)"
});
formatter.result({
  "duration": 461287600,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iUpdateTheCart()"
});
formatter.result({
  "duration": 1189736200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "TestSuiteSteps.iVerifyTheQuantityIs(String)"
});
formatter.result({
  "duration": 83028200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,950.00",
      "offset": 23
    }
  ],
  "location": "TestSuiteSteps.iVerifyTheTotalIs(String)"
});
formatter.result({
  "duration": 727556300,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iClickOnCheckboxIAgreeWithTheTermsOfService()"
});
formatter.result({
  "duration": 225710500,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iClickOnCheckout()"
});
formatter.result({
  "duration": 1114479300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 15
    }
  ],
  "location": "TestSuiteSteps.iVerifyText(String)"
});
formatter.result({
  "duration": 104135600,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iClickOnCheckoutAsGuest()"
});
formatter.result({
  "duration": 2522015200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Priya",
      "offset": 20
    }
  ],
  "location": "TestSuiteSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 454474300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 19
    }
  ],
  "location": "TestSuiteSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 490003700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priyapatel50",
      "offset": 15
    }
  ],
  "location": "TestSuiteSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 279312700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 23
    }
  ],
  "location": "TestSuiteSteps.iSelectCountryName(String)"
});
formatter.result({
  "duration": 394755700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Arizona",
      "offset": 21
    }
  ],
  "location": "TestSuiteSteps.iSelectStateName(String)"
});
formatter.result({
  "duration": 956100900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 19
    }
  ],
  "location": "TestSuiteSteps.iEnterCityName(String)"
});
formatter.result({
  "duration": 443366100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10 ABC Road",
      "offset": 17
    }
  ],
  "location": "TestSuiteSteps.iEnterAddress(String)"
});
formatter.result({
  "duration": 323797700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AB12CD",
      "offset": 18
    }
  ],
  "location": "TestSuiteSteps.iEnterPostcode(String)"
});
formatter.result({
  "duration": 326836200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07867865734",
      "offset": 22
    }
  ],
  "location": "TestSuiteSteps.iEnterPhoneNumber(String)"
});
formatter.result({
  "duration": 456560700,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iClickOnContinueButtonAfterMandatoryFields()"
});
formatter.result({
  "duration": 227626500,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iClickOnNextDayAirRadioButton()"
});
formatter.result({
  "duration": 655455100,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iClickOnContinueButtonAfterShipping()"
});
formatter.result({
  "duration": 252046000,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iSelectCardPayment()"
});
formatter.result({
  "duration": 831160800,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iClickContinueAfterCardPaymentDetails()"
});
formatter.result({
  "duration": 206872500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Master card",
      "offset": 22
    }
  ],
  "location": "TestSuiteSteps.iSelectCreditCard(String)"
});
formatter.result({
  "duration": 773421100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miss ABC ABC",
      "offset": 25
    }
  ],
  "location": "TestSuiteSteps.iEnterCardholderName(String)"
});
formatter.result({
  "duration": 235284700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5555555555554444",
      "offset": 21
    }
  ],
  "location": "TestSuiteSteps.iEnterCardNumber(String)"
});
formatter.result({
  "duration": 328619800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02",
      "offset": 22
    }
  ],
  "location": "TestSuiteSteps.iEnterMonthExpiry(String)"
});
formatter.result({
  "duration": 375858400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2023",
      "offset": 21
    }
  ],
  "location": "TestSuiteSteps.iEnterYearExpiry(String)"
});
formatter.result({
  "duration": 395941600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 13
    }
  ],
  "location": "TestSuiteSteps.iEnterCVV(String)"
});
formatter.result({
  "duration": 276251700,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iClickContinueAfterDetails()"
});
formatter.result({
  "duration": 208184400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit Card",
      "offset": 25
    }
  ],
  "location": "TestSuiteSteps.iVerifyPaymentMethod(String)"
});
formatter.result({
  "duration": 638880500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next Day Air",
      "offset": 26
    }
  ],
  "location": "TestSuiteSteps.iVerifyShippingMethod(String)"
});
formatter.result({
  "duration": 58459700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,950.00",
      "offset": 32
    }
  ],
  "location": "TestSuiteSteps.iVerifyTheCheckoutTotalIs(String)"
});
formatter.result({
  "duration": 65726900,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iClickOnConfirmButton()"
});
formatter.result({
  "duration": 119561200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you",
      "offset": 14
    }
  ],
  "location": "TestSuiteSteps.iVerifyTheText(String)"
});
formatter.result({
  "duration": 2247807600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order has been successfully processed!",
      "offset": 28
    }
  ],
  "location": "TestSuiteSteps.iVerifyTheOrderMessage(String)"
});
formatter.result({
  "duration": 112374100,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iClickOnContinueAfterOrderProcessed()"
});
formatter.result({
  "duration": 1005167500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to our store",
      "offset": 27
    }
  ],
  "location": "TestSuiteSteps.iVerifyTheWelcomeText(String)"
});
formatter.result({
  "duration": 309059900,
  "status": "passed"
});
formatter.match({
  "location": "TestSuiteSteps.iShouldBeAbleToVerifyProductIsAddedToTheShoppingCartSuccessfully()"
});
formatter.result({
  "duration": 48100,
  "status": "passed"
});
formatter.after({
  "duration": 853466300,
  "status": "passed"
});
formatter.uri("topmenutest.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu Test",
  "description": "As a user I want to navigate the nopcommerce website Top Menu Bar",
  "id": "top-menu-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "I should navigate to any tab of the top menu bar",
  "description": "",
  "id": "top-menu-test;i-should-navigate-to-any-tab-of-the-top-menu-bar",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    },
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"\u003cmenu\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should verify the tab \"\u003cmenu\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "top-menu-test;i-should-navigate-to-any-tab-of-the-top-menu-bar;",
  "rows": [
    {
      "cells": [
        "menu"
      ],
      "line": 10,
      "id": "top-menu-test;i-should-navigate-to-any-tab-of-the-top-menu-bar;;1"
    },
    {
      "cells": [
        "Computers"
      ],
      "line": 11,
      "id": "top-menu-test;i-should-navigate-to-any-tab-of-the-top-menu-bar;;2"
    },
    {
      "cells": [
        "Electronics"
      ],
      "line": 12,
      "id": "top-menu-test;i-should-navigate-to-any-tab-of-the-top-menu-bar;;3"
    },
    {
      "cells": [
        "Apparel"
      ],
      "line": 13,
      "id": "top-menu-test;i-should-navigate-to-any-tab-of-the-top-menu-bar;;4"
    },
    {
      "cells": [
        "Books"
      ],
      "line": 14,
      "id": "top-menu-test;i-should-navigate-to-any-tab-of-the-top-menu-bar;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3462482700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "I should navigate to any tab of the top menu bar",
  "description": "",
  "id": "top-menu-test;i-should-navigate-to-any-tab-of-the-top-menu-bar;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"Computers\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should verify the tab \"Computers\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepsTest.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 199200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 12
    }
  ],
  "location": "TopMenuStepsTest.iClickOn(String)"
});
formatter.result({
  "duration": 1092526100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 25
    }
  ],
  "location": "TopMenuStepsTest.iShouldVerifyTheTab(String)"
});
formatter.result({
  "duration": 44764800,
  "status": "passed"
});
formatter.after({
  "duration": 874877700,
  "status": "passed"
});
formatter.before({
  "duration": 4653610600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "I should navigate to any tab of the top menu bar",
  "description": "",
  "id": "top-menu-test;i-should-navigate-to-any-tab-of-the-top-menu-bar;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"Electronics\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should verify the tab \"Electronics\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepsTest.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 45300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 12
    }
  ],
  "location": "TopMenuStepsTest.iClickOn(String)"
});
formatter.result({
  "duration": 1403440600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 25
    }
  ],
  "location": "TopMenuStepsTest.iShouldVerifyTheTab(String)"
});
formatter.result({
  "duration": 125013300,
  "status": "passed"
});
formatter.after({
  "duration": 848907800,
  "status": "passed"
});
formatter.before({
  "duration": 3441731800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "I should navigate to any tab of the top menu bar",
  "description": "",
  "id": "top-menu-test;i-should-navigate-to-any-tab-of-the-top-menu-bar;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"Apparel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should verify the tab \"Apparel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepsTest.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 61400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 12
    }
  ],
  "location": "TopMenuStepsTest.iClickOn(String)"
});
formatter.result({
  "duration": 1033212600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 25
    }
  ],
  "location": "TopMenuStepsTest.iShouldVerifyTheTab(String)"
});
formatter.result({
  "duration": 110536200,
  "status": "passed"
});
formatter.after({
  "duration": 844258300,
  "status": "passed"
});
formatter.before({
  "duration": 3582100500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "I should navigate to any tab of the top menu bar",
  "description": "",
  "id": "top-menu-test;i-should-navigate-to-any-tab-of-the-top-menu-bar;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"Books\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should verify the tab \"Books\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepsTest.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 21200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 12
    }
  ],
  "location": "TopMenuStepsTest.iClickOn(String)"
});
formatter.result({
  "duration": 1297735500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 25
    }
  ],
  "location": "TopMenuStepsTest.iShouldVerifyTheTab(String)"
});
formatter.result({
  "duration": 43773000,
  "status": "passed"
});
formatter.after({
  "duration": 702211600,
  "status": "passed"
});
});