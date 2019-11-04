const term_lib = require('../../../main/lib/term')
const { expect } = require('../../chai')
const sinon = require('sinon')

const sandbox = sinon.createSandbox();

describe('Lib - Term', () => {

    describe('is_currentSemester', () => {

        afterEach(() => {
            sandbox.restore()
        })

        it('returns true when the id represents the current semester', async () => {
            //Arrange
            const Term = require('../../../main/models/Term')

            // Term.query()
            sandbox.stub(Term, "query").returns({
                //Term.query().findById()
                findById: sandbox.stub().returns({
                    // An example term object
                    id: 1,
                    type: 1,
                    value: 'winter'
                })
            })

            // Act
            const result = await term_lib.is_currentSemester('fall')

            // Assert
            expect(result).to.true
        })

        it('returns false when the id represents a different semester', async () => {
            //Arrange
            const Term = require('../../../main/models/Term')

            // Term.query()
            sandbox.stub(Term, "query").returns({
                //Term.query().findById()
                findById: sandbox.stub().returns({
                    // An example term object
                    id: 1,
                    type: 1,
                    value: 'fall'
                })
            })

            // Act
            const result = await term_lib.is_currentSemester('fall')

            // Assert
            expect(result).to.false
        })
    })
})