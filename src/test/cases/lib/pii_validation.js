const portfolio_lib = require('../../../main/lib/pii_validation')
const { expect } = require('../../chai')
const sinon = require('sinon')

const sandbox = sinon.createSandbox();

describe('Lib - Portfolio', () => {

    describe('contains_PII', () => {

        afterEach(() => {
            sandbox.restore()
        })

        it('returns true when pii is contained within the portfolio', async () => {
            //Arrange
            const Portfolio = require('../../../main/models/Portfolio')

            // Portfolio.query()
            sandbox.stub(Portfolio, "query").returns({
                //Portfolio.query().findById()
                findById: sandbox.stub().returns({
                    // An example user object
                    id: 1,
                    pii: 1,
                    grades: 1,
                    description: 'lorem ipsum',
                    monthCreated: 1
                })
            })

            // Act
            const result = await portfolio_lib.contains_PII('lorem ipsum')

            // Assert
            expect(result).to.true
        })

        it('returns false when pii is not contained within the portfolio', async () => {
            //Arrange
            const Portfolio = require('../../../main/models/Portfolio')

            // Portfolio.query()
            sandbox.stub(Portfolio, "query").returns({
                //Portfolio.query().findById()
                findById: sandbox.stub().returns({
                    // An example user object
                    id: 1,
                    pii: 0,
                    grades: 0,
                    description: 'lorem ipsum',
                    monthCreated: 1
                })
            })

            // Act
            const result = await portfolio_lib.contains_PII('lorem ipsum')

            // Assert
            expect(result).to.false
        })
    })
})