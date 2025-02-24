import BikeCard from './BIkeCard'
function BestSeller() {
  const data = [
    { name: 'John' },
    { name: 'John' },
    { name: 'John' },
    { name: 'John' },
    { name: 'John' },
    { name: 'John' },
  ]
  return (
    <div className='py-20'>
      <div>
        <h2 className='underline font-extrabold text-5xl text-center '>
          Best Seller
        </h2>
      </div>

      <div className='flex gap-10 mt-10'>
        {data.map((dt, id) => (
          <BikeCard key={id} />
        ))}
      </div>
    </div>
  )
}

export default BestSeller
