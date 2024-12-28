import { FC } from 'react';
import sing from '../../assets/signature.png'

const Header: FC = () => {
    return (
        <>
            <div className="px-8 py-4 flex justify-end">
                <img src={sing} alt="Signature" className='h-8' />
            </div>
        </>

    )
}

export {
    Header
}
