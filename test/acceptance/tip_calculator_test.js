'use strict'

const path = require('path')
const http = require('http')
const app = require(path.resolve('app'))


describe('Given tip caclulator',() => {
    describe('When the page is loaded', () => {
        it('Then the title should be Tip calculator', () => {
            browser.get('/tip-calculator')
            expect(element(by.tagName('h1')).getText()).toEqual('Tip Calculator')           
        })

        it('Then I see Text input fields for artist,album', () => {
         
            let txtList = element.all(by.tagName('input'))
            expect(txtList.get(0).getAttribute("name")).toEqual('Amount')
            expect(txtList.get(0).getAttribute("type")).toEqual('text')
            expect(txtList.get(0).getAttribute("value")).toEqual('enter an amount')
            expect(txtList.get(1).getAttribute("name")).toEqual('CalculateTip')
            expect(txtList.get(1).getAttribute("type")).toEqual('button')
            expect(txtList.get(1).getAttribute("value")).toEqual('Calculate Tip')
            
        })

        it(' Then user enters a integer to get the tip calculated', () => {
            let txtList = element.all(by.tagName('input'))
            txtList.get(0).clear()
            txtList.get(0).sendKeys('20')
            let button = element(by.id('calc'))
            button.click()
            var pList =  element(by.tagName('p'))
            expect(pList.getText()).toEqual('you should tip $4.00')
        })
        it(' Then user enters a integer to get the tip calculated', () => {
            let txtList = element.all(by.tagName('input'))
            txtList.get(0).clear()
            txtList.get(0).sendKeys('20')
            
            let optionList = element.all(by.tagName('option'))
            
            expect(element(by.tagName('select')).getAttribute("name")).toEqual('Percent')
            expect(optionList.get(0).getAttribute("value")).toEqual('How much?')
            expect(optionList.get(1).getAttribute("value")).toEqual('10%')
            expect(optionList.get(2).getAttribute("value")).toEqual('15%')
            expect(optionList.get(3).getAttribute("value")).toEqual('20%')
            expect(optionList.get(0).getAttribute("selected")).toEqual('true')
            
            optionList.get(3).selected = true
            let button = element(by.id('calc'))
            button.click()
            var pList =  element(by.tagName('p'))
            expect(pList.getText()).toEqual('you should tip $4.00')
        })


    })
})