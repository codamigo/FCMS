
import CallToAction from '../../studio/content-frames/shared/call-to-action';
import Flash from '../../utilities/flash';
import imagePath from  '/public/media//404-pages.05-with-background-image-xl.jpg';


export default function ImageCTA() {
    return (
        <section ref={Flash()}>
            <div className="md:flex  mt-6 mb-6">
                <div className="flex mr-20 mt-4 max-w-xl flex-col">
                    <h2 className="font-bold text-4xl text-slate-900"><a href="">Our 2023 Global Outlook: A new investment playbook</a></h2>
                    <div className="text-lg mt-8 mb-8 grow">
                        The new regime of greater economic and market volatility is not going away – and it requires a new investment playbook. In our 2023 Global Outlook, we discuss three new investment themes: Pricing the damage, Rethinking bonds, and Living with inflation. Read the full report for details, charts, and investment implications.
                        The new regime of greater economic and market volatility is not going away – and it requires a new investment playbook. In our 2023 Global Outlook, we discuss three new investment themes: Pricing the damage, Rethinking bonds, and Living with inflation. Read the full report for details, charts, and investment implications.
                    </div>
                    
                    <CallToAction></CallToAction>
                </div>
                <div className="mt-6 overflow-hidden rounded-lg bg-white ring-1 ring-slate-900/5">
                    <img className="h-auto w-full" loading="lazy" src={imagePath} /> 
                </div>
            </div>            
        </section>
    );
}