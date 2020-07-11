const defaultState = {
  inputValue: '',
  list: [
    '吃早饭',
    '说早安',
    '准备面试',
    '开始面试',
    '面试成功'
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
    default: break
  }
  return state
}