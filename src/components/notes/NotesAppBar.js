/** @format */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../../actions/notes';
import { startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
	const dispatch = useDispatch();
	const { active } = useSelector((state) => state.notes);
	const hanldeSave = () => {
		dispatch(startSaveNote(active));
	};

	const handlePictureClick = () => {
		document.querySelector('#fileSelector').click();
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			dispatch(startUploading(file));
		}
	};

	const toDay = new Date().toISOString();
	const formatDate = toDay.slice(0, 10);

	return (
		<div className='notes__appbar animate__animated animate__fadeIn'>
			<span>{formatDate}</span>

			<input
				id='fileSelector'
				type='file'
				name='file'
				style={{ display: 'none' }}
				onChange={handleFileChange}
			/>

			<div>
				<button className='btn' onClick={handlePictureClick}>
					Picture
				</button>

				<button className='btn' onClick={hanldeSave}>
					Save
				</button>
			</div>
		</div>
	);
};
