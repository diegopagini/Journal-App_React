/** @format */

import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NotesAppBar } from './NotesAppBar';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';

export const NoteScreen = () => {
	const dispatch = useDispatch();
	const { active: note } = useSelector((state) => state.notes);
	const [formValues, hanldeInputChange, reset] = useForm(note);
	const { body, title, id } = formValues;
	const activeId = useRef(note.id);

	useEffect(() => {
		if (note.id !== activeId.current) {
			reset(note);
			activeId.current = note.id;
		}
	}, [note, reset]);

	useEffect(() => {
		dispatch(activeNote(formValues.id, { ...formValues }));
	}, [formValues, dispatch]);

	const handleDelete = () => {
		dispatch(startDeleting(id));
	};

	return (
		<div className='notes__main-content animate__animated animate__fadeIn'>
			<NotesAppBar />

			<div className='notes__content'>
				<input
					type='text'
					placeholder='Some awesome title'
					className='notes__title-input'
					autoComplete='off'
					name='title'
					value={title}
					onChange={hanldeInputChange}
				/>

				<textarea
					placeholder='What happened today'
					className='notes__textarea'
					name='body'
					value={body}
					onChange={hanldeInputChange}
				></textarea>

				{note.url && (
					<div className='notes__image'>
						<img src={note.url} alt={note.title} />
					</div>
				)}
			</div>

			<button className='btn btn-danger' onClick={handleDelete}>
				Delete
			</button>
		</div>
	);
};
