import React from 'react';

const Stack = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className="stats shadow">
                <div className="stat place-items-center">
                    <div className="stat-title">Blogs</div>
                    <div className="stat-value">31K</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Users</div>
                    <div className="stat-value text-secondary">4,200</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Comment</div>
                    <div className="stat-value">1,200</div>
                </div>
            </div>
        </div>
    );
};

export default Stack;