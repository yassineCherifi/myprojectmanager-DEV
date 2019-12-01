process.env.NODE_ENV = 'test';
const app = require('../../app');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
const mongoose = require('mongoose');
const userModel = require('../../models/user')
const projectModel = require('../../models/project')
const sprintModel = require('../../models/sprint')
const User = mongoose.model('User');
const Project = mongoose.model('Project');
const Sprint = mongoose.model('Sprint');
const URL_REGISTER = 'http://localhost:4200/register';
const URL_LOGIN = 'http://localhost:4200/login';
const PROJECTS_URL = 'http://localhost:4200/dashboard/projects';
const user = new User({ name: "test", email: "test@email.com", password: "password" })
const project = new Project({ title: "projectTest", description: "projectDescription" })
const sprint = new Sprint({ titre: "sprintTest", status: "Terminé" })


describe('Contributor tests', () => {
    const driver = new Builder().forBrowser('firefox')
        .withCapabilities({ 'browserName': 'firefox', 'name': 'Firefox Test',
                            'moz:webdriverClick': true, 'tz': 'America/Los_Angeles',
                            'build': 'Firefox Build', 'idleTimeout': '100' })
        .build();
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
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard/div/div[2]/div/app-listprojets/table/tbody/tr/td[1]/a')).click()
        await driver.getCurrentUrl();
    });

    it('It should view invitations', async () => {
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard/div[2]/div[2]/div/app-detailprojet/div[2]/div/app-root/app-contributor/div[1]/div/div/button')).click()
        let  isPresent = driver.findElements(By.xpath('/html/body/app-root/app-dashboard/div[2]/div[2]/div/app-detailprojet/div[2]/div/app-root/app-contributor/div[2]/div/div/div[2]/div/div/ng-select/div/div/div[2]/input')).isDisplayed
        expect(isPresent).to.equal(true);
    });


    after(async () => {
        User.remove({}, v => {
        });
        Project.remove({}, v => {
        });
        Sprint.remove({}, v => {
        });
        driver.quit()
    });



});
