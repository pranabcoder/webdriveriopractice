describe('E-Commerce Application', async() => {

    it('Login Fail Page', async() => {
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
        await browser.pause(3000);
        console.log(await $(".alert-danger").getText());
    });
});