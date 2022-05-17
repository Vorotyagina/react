function DelButton({ item, onClick }) {
  

    function deleteBook(num) {
        onClick(num)
    }

   const del = () => deleteBook(item)

    return (
      <div>
        <button type="button" onClick={del} className="removeBook">
          X
        </button>
      </div>
    )
  }
  
  export default DelButton
  