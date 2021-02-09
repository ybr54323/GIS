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
  currentRoot: null,
}
export const INIT_DIR = {
  dirName: '',
  checked: false,
  children: [],
}

export class MyNode {
  constructor(val) {
    this.val = val;
    this.checked = false;
    this.children = [];
  }
}
