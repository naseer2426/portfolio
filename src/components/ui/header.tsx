import { FC } from 'react';
import Image from 'next/image';
import signature from '../../../public/signature.png'

const Header: FC = () => {
    return (
        <>
            <div className="px-8 py-4 flex justify-end">
                <Image src={signature} alt="Signature" width={100} height={100} />
            </div>
        </>

    )
}

export {
    Header
}
