const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(val) {
        let newLink = `( ${val} )`;
        this.chain.push(newLink);
        return this;
    },
    removeLink(pos) {
        if (!Number.isInteger(pos) || this.chain.length < pos || pos - 1 < 0) {
            this.chain = [];
            throw new Error();
        }
        this.chain.splice(pos - 1, 1);
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        chainResult = this.chain.join('~~');
        this.chain = [];
        return chainResult;
    }
};

module.exports = chainMaker;