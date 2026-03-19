//TODO: move to config
export const TASK_STATUS_IDS = {
	TODO: '11111111-1111-1111-1111-111111111111',
	DONE: '22222222-2222-2222-2222-222222222222',
	PENDING: '33333333-3333-3333-3333-333333333333',
} as const;

export const TASK_PRIORITY_IDS = {
	LOW: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
	MEDIUM: 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
	HIGH: 'cccccccc-cccc-cccc-cccc-cccccccccccc',
} as const;

export const TASK_TAG_IDS = {
	WORK: 'dddddddd-dddd-dddd-dddd-dddddddddddd',
	PERSONAL: 'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee',
} as const;
