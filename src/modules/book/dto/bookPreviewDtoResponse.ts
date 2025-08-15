export class BookPreviewDtoResponse {
	id: string;
	title?: string;
	author?: string;
	tag?: string;
	cover?: string;

	wordCount?: number;
	wordsLearned?: number;

	createdAt?: Date;
}
