import landingPage from '../src/landing-page';
import frames from '../src/frames';
import { parseRequest, objectToURLSearchParams } from '../modules/utils';
import buildButtons from '../modules/buildButtons';
import getTargetFrame from '../modules/getTargetFrame';
const username = data.result.user.username;

export default {
    image: (username) => `https://api.crawlbase.com/screenshots?token=4HrVHd6RoiajGYYEJsx0QA&height=700&url=https://web3.bio/${username}`,
    buttons: [
        { 
            label: '⬅️ Back',
            goTo: 'count',
        }
    ]
};
