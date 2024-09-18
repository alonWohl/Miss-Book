export function BookPreview({ book }) {
  return (
    <article>
      <h2>{book.title}</h2>
      <img src={book.thumbnail} alt='book-image' />
      <h4>{`Price: ${book.listPrice.amount} ${book.listPrice.currencyCode} `}</h4>
    </article>
  )
}
