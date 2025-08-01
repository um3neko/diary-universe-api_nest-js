import {Controller, Get, Req, UseGuards} from '@nestjs/common';
import {JwtAuthGuard} from 'src/modules/auth/guard/jwt.guart';
import {ImportBookService} from '../../services/import-book/import-book.service';

@Controller('import')
export class ImportController {
	constructor(private importBookService: ImportBookService) {}

	@Get('import')
	@UseGuards(JwtAuthGuard)
	async importBook(@Req() req: Request) {
		console.log(req);
	}
}
