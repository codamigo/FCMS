import {nanoid} from 'nanoid';
import Flash from '../../utilities/flash';

const teams = [
    {
        id: nanoid(),
        name: 'Calvin Hawkins',
        email:'calvin.hawkins@example.com',
        image:'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
    {
        id: nanoid(),
        name: 'Kristen Ramos',
        email:'kristen.ramos@example.com',
        image:'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',},
    {
        id: nanoid(),
        name: 'Ted Fox',
        email:'ted.fox@example.com',
        image:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',}
];

function TeamItem({ team }) {
    return (
        <li className="py-4 flex">
            <img className="h-10 w-10 rounded-full" src={team.image} alt="" />
            <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{team.name}</p>
                <p className="text-sm text-gray-500">{team.email}</p>
            </div>
        </li>
    )
}

export default function StackedList() {
    return (
        <ul className="divide-y divide-gray-200" ref={Flash()}>
            {teams.map((team) => <TeamItem key={team.id} team={team} />)}
        </ul>
    );
};