import Link from 'next/link';
import Image from 'next/image';

const ImageLinks = () => {
    return (
        // <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4">
        //     <Link href="https://link1.com" target="_blank" rel="noopener noreferrer">
        //         <Image src="/assets/logos/footer/logo-fundacion-empresa.png" alt="Imagen 1" width={192} height={64} />
        //     </Link>
        //     <Link href="https://link2.com" target="_blank" rel="noopener noreferrer">
        //         <Image src="/assets/logos/footer/logo-hr.png" alt="Imagen 2" width={192} height={64}/>
        //     </Link>
        //     <Link href="https://link3.com" target="_blank" rel="noopener noreferrer">
        //         <Image src="/assets/logos/footer/parquecientifico.png" alt="Imagen 3" width={192} height={64} />
        //     </Link>
        //     <Link href="https://link4.com" target="_blank" rel="noopener noreferrer">
        //         <Image src="/assets/logos/footer/logo-universia.png" alt="Imagen 4" width={192} height={64} />
        //     </Link>
        //     <Link href="https://link5.com" target="_blank" rel="noopener noreferrer">
        //         <Image src="/assets/logos/footer/logo-santander.png" alt="Imagen 5" width={192} height={64} />
        //     </Link>
        // </div>
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="https://link1.com" target="_blank" rel="noopener noreferrer" className="relative w-[192px] h-[64px]">
                <Image
                src="/assets/logos/footer/logo-fundacion-empresa.png"
                alt="Logo Fundación Empresa"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 192px"
                style={{ objectFit: "contain" }}
                />
            </Link>
            <Link href="https://link2.com" target="_blank" rel="noopener noreferrer" className="relative w-[192px] h-[64px]">
                <Image
                src="/assets/logos/footer/logo-hr.png"
                alt="Logo HR"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 192px"
                style={{ objectFit: "contain" }}
                />
            </Link>
            <Link href="https://link3.com" target="_blank" rel="noopener noreferrer" className="relative w-[192px] h-[64px]">
                <Image
                src="/assets/logos/footer/parquecientifico.png"
                alt="Parque Científico"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 192px"
                style={{ objectFit: "contain" }}
                />
            </Link>
            <Link href="https://link4.com" target="_blank" rel="noopener noreferrer" className="relative w-[192px] h-[64px]">
                <Image
                src="/assets/logos/footer/logo-universia.png"
                alt="Logo Universia"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 192px"
                style={{ objectFit: "contain" }}
                />
            </Link>
            <Link href="https://link5.com" target="_blank" rel="noopener noreferrer" className="relative w-[192px] h-[64px]">
                <Image
                src="/assets/logos/footer/logo-santander.png"
                alt="Logo Santander"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 192px"
                style={{ objectFit: "contain" }}
                />
            </Link>
        </div>

    );
};

export default ImageLinks;

