type PageHeadingProps = {
  title: string
}

const PageHeading = ({ title }: PageHeadingProps) => {
  return (
    <div className='flex flex-col items-center justify-center py-4'>
      <h1 className='lg:text-4xl text-3xl font-bold text-gray-900 uppercase text-wrap  pb-4 -mx-5'>
        {title}
      </h1>
      <div className='border-b-4 border-primary w-1/12 mx-auto'></div>
    </div>
  )
}

export default PageHeading
