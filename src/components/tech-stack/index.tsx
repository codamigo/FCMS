import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';
import tailwindLogo from '/media/tailwind.svg';
import Flash from '../../utilities/flash';

export default function TechStack () {
    return (
        <>  
            <div className='flex flex-col mt-10 mb-10' ref={Flash()}>
                <div className='flex justify-center'>
                    <a href="https://vitejs.dev"      target="_blank"><img src={viteLogo}       className="logo"       alt="Vite logo" /></a>
                    <a href="https://reactjs.org"     target="_blank"><img src={reactLogo}      className="logo react" alt="React logo" /></a>
                    <a href="https://tailwindui.com/" target="_blank"><img src={tailwindLogo}   className="logo" alt="Tailwind logo" /></a>
                </div>
                <div className='text-center text-2xl'>Vite + React + Tailwind</div>
            </div>
        </>
    );
}