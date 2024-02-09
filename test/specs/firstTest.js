describe('E-Commerce Application', async() => {

    xit('Login Fail Page', async() => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        await browser.maximizeWindow();
        console.log(await browser.getTitle());
        await expect(browser).toHaveTitleContaining('Rahul Shetty Academy');
        /*
        await $("#username").setValue("rahulshettyacademy");
        await browser.pause(3000);
        const passwordLocator = $("//input[@type='password']");
        await browser.pause(3000);
        await passwordLocator.setValue("learning");
        const signingButton = $("#signInBtn");
        await signingButton.click();
        await browser.pause(3000);
        */
        await $("#username").setValue("secondUser");
        await browser.pause(3000);
        const passwordLocator = $("//input[@type='password']");
        await browser.pause(3000);
        await passwordLocator.setValue("learning");
        const signingButton = $("#signInBtn");
        await signingButton.click();
        await browser.waitUntil(async () => {
            return await $("#signInBtn").getAttribute('value') === 'Sign In';
        },{
            timeout: 5000,
            timeoutMsg: 'Error message is not displayed'
        });
        console.log(await $(".alert-danger").getText());
        await expect($("p")).toHaveText(expect.stringContaining('username is rahulshettyacademy and Password is learning'));
    });
    it('Login Success Page', async() => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        await browser.maximizeWindow();
        await $("#username").setValue("rahulshettyacademy");
        const passwordLocator = $("//input[@type='password']");
        await passwordLocator.setValue("learning");
        const signingButton = $("#signInBtn");
        await signingButton.click();
        // wait until checkout button is displayed
        await $(".btn-primary").waitForExist();
        // check Url contains 'shop'
        await expect(browser).toHaveUrl(expect.stringContaining('shop'));
        await expect(browser).toHaveTitle(expect.stringContaining('ProtoCommerce'));
    });
});