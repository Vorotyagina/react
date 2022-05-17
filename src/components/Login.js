/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
function Login({ login, password, error, onChange, onBlur }) {
  // валидация инпута
  // function applyCurrent(num) {
  //   const validNum = Math.max(min, Math.min(max, num))
  //   onChange(validNum)
  // }

  const isRequied = true

  function isValue(e) {
    const value = e.target.value
    console.log(e.target.id)
    onChange(value, isRequied, e.target.id)
  }

  const enter = (e) => {
    
  }

  function loginCurrentStr(e) {
    const value = e.target.value
    onChange(value, 'login')
  }

  function passwordCurrentStr(e) {
    const value = e.target.value
    onChange(value, 'password')
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td width="10" />
            <td>
              <input
                type="text"
                id='login'
                placeholder="Логин"
                onBlur={isValue}
                onChange={loginCurrentStr}
              />
              <input
                type="password"
                placeholder="Пароль"
                id='password'
                onBlur={isValue}
                onChange={passwordCurrentStr}
              />
              <button type="button" onClick={enter}>
                Войти
              </button>
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <div>{error}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Login
