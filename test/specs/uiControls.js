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
        await browser.waitUntil(async () => {
            return await $("#okayBtn").getAttribute('value') === 'Okay';
        },{
            timeout: 5000,
            timeoutMsg: 'Error message is not displayed'
        });
    });
});