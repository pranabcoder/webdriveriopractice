describe('UI Controls Test Suite', async() => {
    it('UI Controls', async() => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        await browser.maximizeWindow();
        await $("#username").setValue("rahulshettyacademy");
        const passwordLocator = $("//input[@type='password']");
        await passwordLocator.setValue("learning");
        // Select Radio button for multiple elements
        const radioButtons = await $$(".radiotextsty");
        const userDropdown = radioButtons[1];
        await userDropdown.click();
        // Handling modal dialog
        const modalDialog = await $(".modal-body");
        await modalDialog.waitForDisplayed();
        await $("#cancelBtn").click();
        console.log('Value is', await $$(".customradio")[0].$("span").isSelected());
        await userDropdown.$("span").click(); // Chaining locators
        await modalDialog.waitForDisplayed();
        await $("#okayBtn").click();
        // Validate popup not shown up when you select admin
        await $$(".customradio")[0].$("span").click();
        await expect(modalDialog).not.toBeDisplayed();
    });
});