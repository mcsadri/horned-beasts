import React from 'react';
import Beast from './Beast';

class Main extends React.Component {
    render () {
        return (
            <>
                <Beast
                    title={'Dodongo'}
                    imageUrl={'https://www.zeldadungeon.net/wiki/images/thumb/c/c9/Dodongo-LoZ-Art-2.png/160px-Dodongo-LoZ-Art-2.png'}
                    description={'Dodongo dislikes smoke'}
                />
                <Beast
                    title={'Bowser'}
                    imageUrl={'https://mario.wiki.gallery/images/thumb/7/7d/MSOGT_Bowser.png/300px-MSOGT_Bowser.png'}
                    description={'King Koopa of the Koopa Troop'}
                />
            </>
        )
    }
}

export default Main;
