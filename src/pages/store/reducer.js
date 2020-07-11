const defaultState = {
  inputValue: '',
  list: [
    '今天去爬六峰山',
    '问我有没有机会',
    '在山顶拍照',
  ]
}

export default (state=defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state)) // 深拷贝
  switch (action.type) {
    case 'changeValue':
      newState.inputValue = action.value
      return newState
    case 'addList':
      newState.list.push(action.value)
      newState.inputValue = ''
      return newState
    case 'removeList':
      newState.list.splice(action.index, 1)
      return newState
    default: break
  }
  return state
}