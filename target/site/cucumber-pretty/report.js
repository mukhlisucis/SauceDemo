$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CheckOut.feature");
formatter.feature({
  "line": 2,
  "name": "CheckOut",
  "description": "User can click button tambah item",
  "id": "checkout",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CheckOut"
    }
  ]
});
formatter.before({
  "duration": 16346906300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Can check out list of cart that user choosing",
  "description": "",
  "id": "checkout;can-check-out-list-of-cart-that-user-choosing",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User input \"standard_user\" ad userName and input \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify display landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User sort Name Z to A",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User pick itemSauce Labs Onesie",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User pick item Test.allTheThings T-Shirt Red",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify All item",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Remove item 2 T-Shirt Red",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click button checkout",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User input \"Mukhlis\" as firstName and input \"Anshori\" as lastName and input \"65134\" as ZIP code",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "verify display item total",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "verify display Tax",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "verify display Total Payment",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Click button finish",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify THANK YOU FOR YOUR ORDER displayed",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify value Thank you displayed \"THANK YOU FOR YOUR ORDER\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 728259100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 50
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 6563046600,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 147181500,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.selectProductContainer()"
});
formatter.result({
  "duration": 3351312000,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickItemBasket1()"
});
formatter.result({
  "duration": 2131868400,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickItemBasket2()"
});
formatter.result({
  "duration": 2133425900,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickShoppingCart()"
});
formatter.result({
  "duration": 5280664000,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyAllItem()"
});
formatter.result({
  "duration": 518999000,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.removeItem2()"
});
formatter.result({
  "duration": 3203332900,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickCheckout()"
});
formatter.result({
  "duration": 5213549300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mukhlis",
      "offset": 12
    },
    {
      "val": "Anshori",
      "offset": 45
    },
    {
      "val": "65134",
      "offset": 77
    }
  ],
  "location": "PurchaseSteps.inputDataDiri(String,String,String)"
});
formatter.result({
  "duration": 9098526400,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.displayItemTotal()"
});
formatter.result({
  "duration": 68576100,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.displayTax()"
});
formatter.result({
  "duration": 67900100,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.displayTotalPayment()"
});
formatter.result({
  "duration": 59602500,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickFinish()"
});
formatter.result({
  "duration": 5239796500,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verivyOrderFinished()"
});
formatter.result({
  "duration": 63969100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "THANK YOU FOR YOUR ORDER",
      "offset": 34
    }
  ],
  "location": "PurchaseSteps.getThanksText(String)"
});
formatter.result({
  "duration": 58049200,
  "status": "passed"
});
formatter.after({
  "duration": 4444527800,
  "status": "passed"
});
});