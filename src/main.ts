import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {SeedService} from './infrastructure/seedService/seed.service';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors({
		origin: '*',
		credentials: true,
	});
	await app.listen(process.env.PORT ?? 3001);

	const seeder = app.get(SeedService);
	await seeder.seedAll();
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
