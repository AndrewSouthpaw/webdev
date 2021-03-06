import { coinFlip, winJackpot } from '../coin'
import { getRandomInt } from '../random'
import { resetJackpot } from '../store'

jest.mock('../random')

describe('#coinFlip', () => {
  it('should return Heads or Tails based on random generator', () => {
    /**
     * TODO these will fail randomly. Use `jest.mock` to control the output
     *      of the random number generator and test the coin flip behavior.
     *      You should not have to change the implementation files.
     */
    getRandomInt.mockReturnValueOnce(true)
    expect(coinFlip()).toEqual('Heads')
    getRandomInt.mockReturnValueOnce(false)
    expect(coinFlip()).toEqual('Tails')
  })
})

jest.mock('../store', () => ({
  getCurrentJackpot: jest.fn().mockReturnValue(100),
  resetJackpot: jest.fn()
}))

describe('#winJackpot', () => {
  it('should reset the jackpot and return the winnings message', () => {
    /**
     * TODO
     *   Using an inline mock `jest.mock('./dep', () => { ... }) to mock
     *   the behavior of the store.
     *   1. Test that a message of "You won $...!" is returned based off
     *      the current jackpot.
     *   2. Test that the jackpot is told to reset.
     */
    expect(winJackpot()).toEqual('You won $100!')
    expect(resetJackpot).toHaveBeenCalled()
  })
})
