import { IconDog } from '@tabler/icons-react';

const Search = () => {

  return (
    <>
      <div className="h-full flex flex-col items-center justify-center">
        <IconDog className="w-36 h-36 text-zinc-500" />
        <p className="text-xl text-center text-zinc-500"> Tu pojawią się najważniejsze informacje o wybranym psiaku!</p>
      </div>
    </>
  )
}
export default Search