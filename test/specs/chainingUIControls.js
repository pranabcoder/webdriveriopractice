describe('UI Controls Test Suite', async() => {
    it('UI Controls', async() => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        await browser.maximizeWindow();
        await $("#username").setValue("rahulshettyacademy");
        const passwordLocator = $("//input[@type='password']");
        await passwordLocator.setValue("learning");
        // Example Chaining Locators
        const radioButtons = await $$(".customradio");
        const userDropdown = radioButtons[1];
        await userDropdown.$("span").click(); // Chaining locators
        await browser.waitUntil(async () => {
            return await $("#okayBtn").getAttribute('value') === 'Okay';
        },{
            timeout: 5000,
            timeoutMsg: 'Error message is not displayed'
        });
    });
});