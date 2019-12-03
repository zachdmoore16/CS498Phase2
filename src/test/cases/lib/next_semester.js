const portfolio_lib = require('../../../main/lib/next_semester')
const { expect } = require('../../chai')
const sinon = require('sinon')

const sandbox = sinon.createSandbox();

describe('Lib - Portfolio', () => {

    describe('next_semester', () => {

        afterEach(() => {
            sandbox.restore()
        })

        it('returns true when the start month is found to be 4', async () => {
            //Arrange
            const Portfolio = require('../../../main/models/Portfolio')

            // Portfolio.query()
            sandbox.stub(Portfolio, "query").returns({
                //Portfolio.query().findById()
                findById: sandbox.stub().returns({
                    // An example portfolio object
                    id: 1,
                    pii: 1,
                    grades: 1,
                    description: 'lorem ipsum',
                    monthCreated: 1
                })
            })

            // Act
            const result = await portfolio_lib.next_semester(Portfolio)

            // Assert
            expect(result).assert(4)
        })

        it('returns true when the start month is found to be 6', async () => {
            //Arrange
            const Portfolio = require('../../../main/models/Portfolio')

            // Portfolio.query()
            sandbox.stub(Portfolio, "query").returns({
                //Portfolio.query().findById()
                findById: sandbox.stub().returns({
                    // An example portfolio object
                    id: 1,
                    pii: 1,
                    grades: 1,
                    description: 'lorem ipsum',
                    monthCreated: 4
                })
            })

            // Act
            const result = await portfolio_lib.next_semester(Portfolio)

            // Assert
            expect(result).assert(6)
        })

        it('returns true when the start month is found to be 8', async () => {
            //Arrange
            const Portfolio = require('../../../main/models/Portfolio')

            // Portfolio.query()
            sandbox.stub(Portfolio, "query").returns({
                //Portfolio.query().findById()
                findById: sandbox.stub().returns({
                    // An example portfolio object
                    id: 1,
                    pii: 1,
                    grades: 1,
                    description: 'lorem ipsum',
                    monthCreated: 6
                })
            })

            // Act
            const result = await portfolio_lib.next_semester(Portfolio)

            // Assert
            expect(result).assert(8)
        })

        it('returns true when the start month is found to be 11', async () => {
            //Arrange
            const Portfolio = require('../../../main/models/Portfolio')

            // Portfolio.query()
            sandbox.stub(Portfolio, "query").returns({
                //Portfolio.query().findById()
                findById: sandbox.stub().returns({
                    // An example portfolio object
                    id: 1,
                    pii: 1,
                    grades: 1,
                    description: 'lorem ipsum',
                    monthCreated: 8
                })
            })

            // Act
            const result = await portfolio_lib.next_semester(Portfolio)

            // Assert
            expect(result).assert(11)
        })

        it('returns true when the start month is found to be 1', async () => {
            //Arrange
            const Portfolio = require('../../../main/models/Portfolio')

            // Portfolio.query()
            sandbox.stub(Portfolio, "query").returns({
                //Portfolio.query().findById()
                findById: sandbox.stub().returns({
                    // An example portfolio object
                    id: 1,
                    pii: 1,
                    grades: 1,
                    description: 'lorem ipsum',
                    monthCreated: 11
                })
            })

            // Act
            const result = await portfolio_lib.next_semester(Portfolio)

            // Assert
            expect(result).assert(1)
        })
    })
})