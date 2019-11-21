process.env.NODE_ENV = 'test';
let app = require('../../app');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
const mongoose = require('mongoose');
const model = require('../../models/user')
const User = mongoose.model('User');
const URL_REGISTER = 'http://localhost:4200/register';
const URL_LOGIN = 'http://localhost:4200/login';
const PROJECTS_URL = 'http://localhost:4200/dashboard/projects';
const user = new User({ name: "test", email: "test@email.com", password: "password" })


describe('Register & Login test', () => {
    const driver = new Builder().forBrowser('firefox').build();

    it('It should register', async () => {
        await driver.get(URL_REGISTER);
        await driver.findElement(By.name('name')).sendKeys(user.name);
        await driver.findElement(By.name('email')).sendKeys(user.email);
        await driver.findElement(By.name('password')).sendKeys(user.password);
        await driver.findElement(By.id('submit')).click()
        const success = await driver.findElement(By.className("success")).isDisplayed();
        expect(success).to.equal(true);

    });

    it('It should not register', async () => {
        await driver.get(URL_REGISTER);
        await driver.findElement(By.name('name')).sendKeys(user.name);
        await driver.findElement(By.name('email')).sendKeys(user.email);
        await driver.findElement(By.name('password')).sendKeys(user.password);
        await driver.findElement(By.id('submit')).click()
        const alert = await driver.findElement(By.className("alert")).isDisplayed();
        expect(alert).to.equal(true);

    });
    it('It should login', async () => {
        await driver.get(URL_LOGIN);
        await driver.findElement(By.name('email')).sendKeys(user.email);
        await driver.findElement(By.name('password')).sendKeys(user.password);
        await driver.findElement(By.id('submit')).click()
        const url = await driver.getCurrentUrl();
        expect(url).to.equal(PROJECTS_URL);
    });

    it('It should not login', async () => {
        await driver.get(URL_LOGIN);
        await driver.findElement(By.name('email')).sendKeys('notexsist@email.com');
        await driver.findElement(By.name('password')).sendKeys('password');
        await driver.findElement(By.id('submit')).click()
        const url = await driver.getCurrentUrl();
        expect(url).to.equal(URL_LOGIN);
    });

    after(async () => {
        User.remove({}, v => {
        });
        driver.quit()

    });



});