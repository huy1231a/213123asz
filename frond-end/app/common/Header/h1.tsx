interface Data {
  title: string
}

export const HeaderOne: React.FC<Data> = ({ title }) => {
  return (
    <span className='font-semibold text-lg leading-normal text-[#303972]'>
      {title}
    </span>
  )
}
