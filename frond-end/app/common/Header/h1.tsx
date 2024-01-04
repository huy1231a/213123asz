interface Data {
  title: string
}

export const HeaderOne: React.FC<Data> = ({ title }) => {
  return (
    <span className='font-bold text-2xl leading-normal text-[#303972]'>
      {title}
    </span>
  )
}

export const HeaderTitle: React.FC<Data> = ({ title }) => {
  return (
    <p className='font-bold text-4xl leading-normal text-[#303972]'>
      {title}
    </p>
  )
}
