export const TREE_PAGE_ACTION = {
  editActionShellVisible: false,
  editModalVisible: false,
}
export const EDIT_MODAL_FORM_DATA = new Map([
  ['addDirName', {
    dirName: '',
  }],
  ['addGood', {
    dirId: '',
    goodName: '',
    goodImages: [],
  }]
])

export const EDIT_TYPE = {
  currentType: 'ADD_DIR',
  createRoot: 'CREATE_ROOT',
  addDir: 'ADD_DIR',
  addGood: 'ADD_GOOD'
}

export const INIT_TEM_DATA = {
  currentNode: null,
  updateViewCb: () => void 0,
  currentRoot: null,
}
export const INIT_DIR = {
  dirName: '',
  checked: false,
  children: [],
}

export class MyNode {
  constructor(val) {
    this.id = +Date.now()
    this.name = val;
    this.checkedChildNodeList = false;
    this.checkedGoodList = false;
    this.childNodeList = [];
    this.goodList = [];
  }
}

export class Good {
  constructor(val) {
    this.name = val;


  }
}
