describe('E-Commerce Application', async() => {

    it('Login Fail Page', async() => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        await browser.maximizeWindow();
        console.log(await browser.getTitle());
    });
});