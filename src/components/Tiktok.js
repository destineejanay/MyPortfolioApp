import React from 'react';

import '../App.css';

export const Tiktok = () => {
    return (
        <>
            <div className="tiktok-container">
                <iframe className='tiktok' title="Tiktok Feed" src="https://widget.tagembed.com/56769?view" frameBorder="0" allowtransparency="true"></iframe>
            </div>
        </>
    )
}

export default Tiktok;