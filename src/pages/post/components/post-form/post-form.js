import { useRef } from 'react';
import { Icon, Input } from '../../../../components';
import { SpecialPanel } from '../special-panel/special-panel';
import { sanitizeContent } from './utils';
import styled from 'styled-components';

const PostFormContainer = ({
	className,
	post: { title, imageUrl, content, publishedAt },
}) => {
	const imageRef = useRef(null);
	const titleRef = useRef(null);
	const contentRef = useRef(null);

	const onSave = () => {
		const newImageUrl = imageRef.current.value;
		const newTitle = titleRef.current.value;
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		console.log(newContent);
	};

	return (
		<div className={className}>
			<Input
				ref={imageRef}
				defaultValue={imageUrl}
				width="100%"
				placeholder="Изображение..."
			/>
			<Input
				ref={titleRef}
				defaultValue={title}
				width="100%"
				placeholder="Заголовок..."
			/>
			<SpecialPanel
				publishedAt={publishedAt}
				margin="20px 0"
				editButton={
					<Icon
						id="fa-floppy-o"
						size="21px"
						margin="0 10px 0 0"
						onClick={onSave}
					/>
				}
			/>
			<div
				ref={contentRef}
				className="post-text"
				contentEditable={true}
				suppressContentEditableWarning={true}
			>
				{content}
			</div>
		</div>
	);
};

export const PostForm = styled(PostFormContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .post-text {
		font-size: 18px;
		white-space: pre-line;
	}
`;
