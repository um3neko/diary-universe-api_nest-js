import {BaseDomainEntity} from '../baseEntity';

// export interface ReaderState {
// 	font: FontFamily;
// 	fontSize: TextSize;
// 	aligment: Alignment;
// 	backgroundColor: BackgroundColor;
// 	textInterval: TextInterval;
// 	textColor: FontColor;
// };

// export const FONT_FAMILIES = ['serif', 'sans-serif'] as const;
// export const ALIGNMENTS = ['left', 'center', 'right', 'justify'] as const;
// export type Alignment = (typeof ALIGNMENTS)[number];
// export const BACKGROUND_COLORS = ['#f8f9fb', '#f1efe3', '#1f1e24'] as const;
// export const TEXT_INTERVALS = ['1.6', '2', '2.2', '2.4'] as const;
// export const TEXT_SIZE = [18, 20, 22, 24, 26, 28, 30] as const;
// export const FONT_COLOR = ['#1f1e24', '#f8f9fb'] as const;

// export type FontFamily = (typeof FONT_FAMILIES)[number];
// export type Alignment = (typeof ALIGNMENTS)[number];
// export type BackgroundColor = (typeof BACKGROUND_COLORS)[number];
// export type TextInterval = (typeof TEXT_INTERVALS)[number];
// export type TextSize = (typeof TEXT_SIZE)[number];
// export type FontColor = (typeof FONT_COLOR)[number];


export class userAppState extends BaseDomainEntity {
	private constructor(
		id: string,
		createdAt: Date,
		updatedAt: Date,

		public username: string,
		public email: string,
		private passwordHash: string,

	) {
		super(id, createdAt, updatedAt);
	}
}
