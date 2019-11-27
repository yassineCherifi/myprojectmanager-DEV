process.env.NODE_ENV = 'test';
let app = require('../../app');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
const mongoose = require('mongoose');
const userModel = require('../../models/user')
const projectModel = require('../../models/project')
const User = mongoose.model('User');
const Project = mongoose.model('Project');
const URL_REGISTER = 'http://localhost:4200/register';
const URL_LOGIN = 'http://localhost:4200/login';
const PROJECTS_URL = 'http://localhost:4200/dashboard/projects';
const user = new User({ name: "test", email: "test@email.com", password: "password" })
const project = new Project({ title: "projectTest", description: "projectDescription"})


describe('Project tests', () => {
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

    it('It should login and add project', async () => {
        await driver.get(URL_LOGIN);
        await driver.findElement(By.name('email')).sendKeys(user.email);
        await driver.findElement(By.name('password')).sendKeys(user.password);
        await driver.findElement(By.id('submit')).click()
        const url = await driver.getCurrentUrl();
        expect(url).to.equal(PROJECTS_URL);
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard/div/div[2]/div/app-listprojets/div/div[1]/a')).click()
        await driver.findElement(By.id('title')).sendKeys(project.title);
        await driver.findElement(By.id('description')).sendKeys(project.description);
        await driver.findElement(By.css('a.btn:nth-child(4)')).click()
        const added = await driver.findElement(By.xpath('/html/body/app-root/app-dashboard/div/div[2]/div/app-listprojets/table/tbody/tr')).isDisplayed();
        expect(added).to.equal(true);
    });

    it('It should delete project', async () => {
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard/div/div[2]/div/app-listprojets/table/tbody/tr/td[5]/button')).click()
        const isPresent = await driver.findElements(By.xpath('/html/body/app-root/app-dashboard/div/div[2]/div/app-listprojets/table/tbody/tr')) === undefined;
        expect(isPresent).to.equal(false);
    });

    after(async () => {
        User.remove({}, v => {
        });
        Project.remove({}, v => {
        });
        driver.quit()

    });



});
