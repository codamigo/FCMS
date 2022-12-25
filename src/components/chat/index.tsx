import chatLogo from '/media/chat.svg';
import Flash from '../../utilities/flash';

export default function Chat() {
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl flex items-center space-x-4" ref={Flash()}>
            <div className="shrink-0">
                <img className="h-12 w-12" src={chatLogo} alt="ChitChat Logo" />
            </div>
            <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p className="text-slate-600">You have a new message!</p>
            </div>
        </div>
    );
}