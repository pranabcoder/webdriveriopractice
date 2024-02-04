describe('E-Commerce Application', () => {

    it('Login Fail Page', () => {
        browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        browser.maximizeWindow();
        console.log(browser.getTitle());
    });
});