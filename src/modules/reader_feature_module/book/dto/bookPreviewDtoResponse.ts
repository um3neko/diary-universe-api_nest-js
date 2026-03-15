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

export class BookChunksPreviewDtoResponse {
	id: string;
	title?: string;

	tag?: string;

	wordCount?: number;
	wordsLearned?: number;
	newWords?: number;

	audioDuration?: string;

	touchedAt: Date;
	createdAt?: Date;
}
