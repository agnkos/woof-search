import { IconDog } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <IconDog className="w-40 h-40 text-zinc-500 rotate-180" />
      <p className="text-xl text-center text-zinc-500"> Ups! Nie znaleziono strony.</p>
      <NavLink to="/" className="my-4 px-4 py-2 rounded-lg bg-amber-500 text-zinc-50 font-semibold hover:bg-amber-600 duration-400">Wróć do strony głównej</NavLink>
    </div>
  )
}
export default ErrorPage