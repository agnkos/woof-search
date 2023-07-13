import { IconDog } from '@tabler/icons-react';

const NotFound = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <IconDog className="w-40 h-40 text-zinc-500 rotate-180" />
            <p className="text-xl text-center text-zinc-500"> Ups! Nie znaleziono podanej rasy, spróbuj wyszukać inną.</p>
        </div>
    )
}
export default NotFound