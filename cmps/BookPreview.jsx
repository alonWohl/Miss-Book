import { getCurrencySymbol } from '../services/util.service.js'

export function BookPreview({ book, children }) {
  return (
    <article className='book-preview'>
      <img src={book.thumbnail} alt='book-image' />
      <h2>{book.title}</h2>
      <h4>{`Price: ${book.listPrice.amount} ${getCurrencySymbol(book.listPrice.currencyCode)} `}</h4>
      {children}
    </article>
  )
}
