const generate = () => {
  return {
    id: 'dasd132dasd',
    name: 'node1',
    childNodeList: new Array(Math.floor(Math.random() * 10)).fill(0).map((n, i) => ({
      id: 'node' + i,
      name: 'node' + i,
      childNodeList: [],
      goodList: [],
    })),
    goodList: new Array(Math.floor(Math.random() * 10)).fill(0).map((n, i) => ({
      id: i,
      name: 'good' + i,
    }))
  }
}

const mock = {
  id: 'dasd132dasd',
  name: 'node1',
  childNodeList: new Array(Math.floor(Math.random() * 10)).fill(0).map((n, i) => (generate())),
  goodList: new Array(Math.floor(Math.random() * 10)).fill(0).map((n, i) => ({
    id: i,
    name: 'good' + i,
  }))
}
export default mock;
