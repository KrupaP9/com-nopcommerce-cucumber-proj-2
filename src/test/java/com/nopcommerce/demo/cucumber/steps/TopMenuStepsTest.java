package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class TopMenuStepsTest {
    @Given("^I am on the homepage$")
    public void iAmOnTheHomepage() {
    }

    @When("^I click on \"([^\"]*)\"$")
    public void iClickOn(String tab) {
        new HomePage().selectMenu(tab);
    }

    @Then("^I should verify the tab \"([^\"]*)\"$")
    public void iShouldVerifyTheTab(String menu) {
        Assert.assertEquals("Tab not verified",menu,new HomePage().getTitleOfPage());
    }


}
