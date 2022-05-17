import { useState } from 'react'
import MinMax from './MinMax'
import Total from './Total'
import DelButton from './DelButton'
import Login from './Login'

function booksStub() {
  return [
    {
      id: 1,
      title: 'Война и мир - Л.Н.Толстой',
      price: 800,
      rest: 10,
      quantity: 1,
    },
    {
      id: 2,
      title: 'Две жизни - К.Е.Антарова',
      price: 700,
      rest: 5,
      quantity: 1,
    },
    {
      id: 3,
      title: 'Разговор с богом - Н.Д.Уолша',
      price: 1000,
      rest: 2,
      quantity: 1,
    },
    {
      id: 4,
      title: 'Хроники Ехо - Макс Фрай',
      price: 400,
      rest: 8,
      quantity: 1,
    },
    {
      id: 5,
      title: 'Хохот Шамана - В.П.Серкин',
      price: 600,
      rest: 8,
      quantity: 1,
    },
  ]
}

function loginData() {
  return ([{
    login: '',
    password: '',
  }, 
  {
    error: '',
    }])
}

export default function BookCart() {
  const [books, setBooks] = useState(booksStub())
  const [logData, setLogData] = useState(loginData())

  const setQuantity = (id, quantity) => {
    setBooks(
      books.map((book) => (book.id !== id ? book : { ...book, quantity }))
    )
 }

function setDeleteItem(id) {
      setBooks(books.filter((book) => book.id !== id))
      return books
    }

const setLogin = (value, isRequired, what) => {
  if (isRequired) {
    console.log(logData[1].error)
    if (value === '') {
      setLogData([{
        login: value,
        password: logData[0].password,
      },{
        error: "Введите логин или пароль"
      }])
    } else {
      setLogData([{
        login: logData[0].login,
        password: logData[0].password,
      },{
        error: ''
      }])
      if (what === "login") {
        setLogData([{
          login: value,
          password: logData[0].password,
        },{
          error: logData[1].error
        }])
      } 
      if (what === "password") {
      setLogData([{
        login: logData[0].login,
        password: value,
      },{
        error: logData[1].error
      }])
  } 
}
}
 }


//const [result, setResult] = useInputRequired()
//     2. Реализовать пользовательский хук useInputRequired().

// В данном хуке, помимо возвращаемого значения и функций изменения(`onChange`), 
// на событие `onBlur` повесить логику обязательного/необязательного поля с возможностью передачи флага `required` 
// вторым параметром хука. Ошибка должна храниться отдельным состоянием. То есть, если поле ввода будет пустым и не в фокусе, 
// то возникнет предупреждение, что данное поле обязательно должно быть заполнено.
    
  return (
    <div className="some">
      <h1>books list</h1>
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
          {books.map((book, i) => (
            <tr key={book.id}>
              <td>{i + 1}</td>
              <td>{book.title}</td>
              <td>{book.price}</td>
              <td>
                <MinMax
                  max={book.rest}
                  current={book.quantity}
                  onChange={(quantity) => {
                    setQuantity(book.id, quantity)
                    }}
                />
              </td>
              <td>{book.price * book.quantity}</td>
              <td>
                <DelButton 
                  item={book.id}
                  onClick={() => {setDeleteItem(book.id)
                  }}
                />
              </td>
            </tr>
         
          ))}
             <tr>
               <td></td>
               <td>
              <Total booksCart={books.reduce((result, item) => 
                result += Number(item.price) * Number(item.quantity)
              , 0)
              }/>
              </td>
            </tr>
        </tbody>
      </table>
      <Login login={logData[0].login} password={logData[0].password} 
      error={logData[1].error}
      onBlur={(value, isRequied, what) => setLogin(value, isRequied, what)} 
      onChange={(value, isRequired, what) => setLogin(value, isRequired, what)}
      />
    </div>
  )
}

/* 
const setquantity = (id, quantity) => {
	const newbooks = [ ...books ];
	const productInd = books.findIndex(book => book.id == id);
	const newProduct = { ...books[productInd] };
	newProduct.quantity = quantity;
	newbooks[productInd] = newProduct;
	setbooks(newbooks);
} */
