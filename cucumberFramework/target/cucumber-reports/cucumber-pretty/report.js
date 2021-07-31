$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click on LOGIN button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "vinavm",
        "test@123"
      ],
      "line": 16,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6148316700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click on LOGIN button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters \"vinavm\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL()"
});
formatter.result({
  "duration": 3784377000,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.i_should_see_Log_In_Page()"
});
formatter.result({
  "duration": 35086600,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_LOGIN_button()"
});
formatter.result({
  "duration": 2364182600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinavm",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 26
    }
  ],
  "location": "loginPageStepDefinitions.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 1355514600,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 104277400,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 1399842000,
  "status": "passed"
});
formatter.after({
  "duration": 75862900,
  "status": "passed"
});
});