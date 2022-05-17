function MinMax({ min = 0, max, current, onChange }) {
  // валидация инпута
  function applyCurrent(num) {
    const validNum = Math.max(min, Math.min(max, num))
    onChange(validNum)
  }

  function parseCurrentStr(e) {
    // Прочти про parseInt ;) https://webformyself.com/chisla-v-javascript-funkciya-parseint/
    const num = parseInt(e.target.value, 10)
    applyCurrent(Number.isNaN(num) ? min : num)
  }

  const inc = () => applyCurrent(current + 1)
  const dec = () => applyCurrent(current - 1)

  return (
    <div>
      <button type="button" onClick={dec} className="removeButton">
        -
      </button>
      <input type="text" value={current} onChange={parseCurrentStr} />
      <button type="button" onClick={inc} className="addButton">
        +
      </button>
    </div>
  )
}

export default MinMax
