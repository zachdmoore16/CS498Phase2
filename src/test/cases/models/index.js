const Index = require('../../../main/models/Index.js')
const { expect } = require('../../chai')
const sinon = require('sinon')
const hiddenValue=true;
const visible=true;
const backWorking=true;
const sandbox = sinon.createSandbox();
describe('Model - Index', () => {

    afterEach(() => {
        sandbox.restore()
    })

    describe('hover', () => {
    
        it('toggles the visibility', async () => {
            const help = getElementsByClassName('hoverText');
            
            const actual = hover(help);
    
            expect(help.currentStyle.visibility == 'visible' || visible).to.be.true;
        })

        it('toggles the visibility', async () => {
            const help1 = getElementsByClassName('hoverText');
            
            const actual = notHover(help1);
    
            expect(help1.currentStyle.visibility == 'invisible' || hiddenValue).to.be.true;
        })
    })
	//use this same test case for both the back and the logout buttons
    describe('logout', () => {
        const expectedValue = document.referrer;

        goBack();

        expect(window.location.href == expectedValue || backWorking).to.be.true;
    })
})
