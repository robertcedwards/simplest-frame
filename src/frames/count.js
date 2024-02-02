import mainLayout from '../layouts/main';
import { getFramer, setFramer } from '../data/framer';
import { getCount, incrementCount } from '../data/count';
const getFramer = async() => {
    const store = getStore('gameState');
    const framerId = await store.get('framer');

    const request = await fetch(`${wieldAPIBase}/user?fid=${framerId}`, {
        method: "GET",
        headers: { "API-KEY": wieldKey }
    });

    const body = await streamToString(request.body);
    const data = JSON.parse(body);
    const username = data.result.user.username;
    return username;
}
export default {
    image: `https://api.crawlbase.com/screenshots?token=4HrVHd6RoiajGYYEJsx0QA&height=700&url=https://web3.bio/${username}`,
    buttons: [
        { 
            label: '⬅️ Back',
            goTo: 'count',
        }
    ]
};
