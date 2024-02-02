import index from '/src/frames/index.js';

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
