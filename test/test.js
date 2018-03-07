const should = require('chai').should();
const ticTacToe = require('../tic_tac_toe.js');

describe('Result of Tic Tac Toe', function() {
  describe('Horizontal win', function() {
    it('should return, Winner: x, Row: 1', function() {
      ticTacToe('xxxooxxoo').should.equal('Winner: x, Row: 1');
    });

    it('should return, Winner: x, Row: 2', function() {
      ticTacToe('oxoxxxxoo').should.equal('Winner: x, Row: 2');
    });

    it('should return, Winner: x, Row: 3', function() {
      ticTacToe('oxoooxxxx').should.equal('Winner: x, Row: 3');
    });

    it('should return, Winner: o, Row: 1', function() {
      ticTacToe('oooxxooxx').should.equal('Winner: o, Row: 1');
    });

    it('should return, Winner: o, Row: 2', function() {
      ticTacToe('xoxooooxx').should.equal('Winner: o, Row: 2');
    });

    it('should return, Winner: o, Row: 3', function() {
      ticTacToe('xoxxxoooo').should.equal('Winner: o, Row: 3');
    });
  });

  describe('Vertical win', function() {
    it('should return, Winner: x, Column: 1', function() {
      ticTacToe('xxoxoxxoo').should.equal('Winner: x, Column: 1');
    });

    it('should return, Winner: x, Column: 2', function() {
      ticTacToe('xxooxxoxo').should.equal('Winner: x, Column: 2');
    });

    it('should return, Winner: x, Column: 3', function() {
      ticTacToe('ooxxoxoxx').should.equal('Winner: x, Column: 3');
    });

    it('should return, Winner: o, Column: 1', function() {
      ticTacToe('ooxoxooxx').should.equal('Winner: o, Column: 1');
    });

    it('should return, Winner: o, Column: 2', function() {
      ticTacToe('ooxxooxox').should.equal('Winner: o, Column: 2');
    });

    it('should return, Winner: o, Column: 3', function() {
      ticTacToe('xxooxoxoo').should.equal('Winner: o, Column: 3');
    });
  });

  describe('Backward diagnol win', function() {
    it('should return, Winner: x', function() {
      ticTacToe('xoxoxooxx').should.equal('Winner: x');
    });

    it('should return, Winner: o', function() {
      ticTacToe('oxoxoxxoo').should.equal('Winner: o');
    });
  });

  describe('Forward diagnol win', function() {
    it('should return, Winner: x', function() {
      ticTacToe('xoxoxoxxo').should.equal('Winner: x');
    });

    it('should return, Winner: o', function() {
      ticTacToe('oxoxoxoox').should.equal('Winner: o');
    });
  });
});
