import React from 'react';

export function Item({data}) {
    return (<div className="card max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{data.question}</div>
                </div>
                <div className="px-6 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.category}</span>
                </div>
            </div>);
}