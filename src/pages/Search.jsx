import { IconDog } from '@tabler/icons-react';
import { useLocation } from 'react-router-dom';
import NotFound from './NotFound';

const Search = () => {
  const { state } = useLocation()

  return (
    <>
      {state === "notfound" ? <NotFound /> :
        (
          <div className="h-full flex flex-col items-center justify-center">
            <IconDog className="w-40 h-40 text-zinc-500 max-[350px]:w-32 max-[350px]:h-32" />
            <p className="text-xl text-center text-zinc-500 max-[350px]:text-lg"> Tu pojawią się najważniejsze informacje o wybranym psiaku!</p>
          </div>
        )
      }
    </>
  )
}
export default Search