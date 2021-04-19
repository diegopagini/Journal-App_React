/** @format */

import React from 'react';

export const JournalEntry = () => {
	return (
		<div className='journal__entry pointer'>
			<div
				className='journal__entry-picture'
				style={{
					backgroundSize: 'cover',
					backgroundImage: `url(https://1.bp.blogspot.com/-JREhSKN8sMM/VmH2B-jmFXI/AAAAAAAAIzg/ScNtA185M88/s1600/02273%2Bpaisajes01.jpg)`,
				}}
			></div>

			<div className='journal__entry-body'>
				<p className='journal__entry-title'>Un nuevo día</p>
				<p className='journal__entry-content'>
					Sit aliqua officia et velit deserunt nisi aliquip duis veniam cillum.
				</p>
			</div>

			<div className='journal__entry-date-box'>
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	);
};
